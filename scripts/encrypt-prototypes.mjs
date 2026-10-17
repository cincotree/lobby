import fs from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = process.cwd();
const SRC  = path.join(ROOT, 'src', 'prototypes');
const OUT  = path.join(ROOT, 'public', 'prototypes');
const CONFIG = path.join(ROOT, '.staticrypt');

function isDir(p){ try { return fs.statSync(p).isDirectory(); } catch { return false; } }
function exists(p){ try { fs.accessSync(p); return true; } catch { return false; } }
function passwordEnvVar(id){ return `PROTOTYPE_PASSWORD_${id.toUpperCase().replace(/[^A-Z0-9]/g, '_')}`; }

(async () => {
  if (!isDir(SRC)) {
    console.log(`No prototypes dir at: ${SRC}`);
    process.exit(0);
  }

  const only = (process.env.PROTOTYPES || '')
    .split(',').map(s => s.trim()).filter(Boolean);

  const prototypes = fs.readdirSync(SRC).filter(name => {
    if (only.length && !only.includes(name)) return false;
    return isDir(path.join(SRC, name)) && exists(path.join(SRC, name, 'index.html'));
  });

  if (prototypes.length === 0) {
    console.log(`No prototypes found in: ${SRC}`);
    process.exit(0);
  }

  await fsp.mkdir(CONFIG, { recursive: true });

  for (const id of prototypes) {
    const outDir = path.join(OUT, id);
    const envVar = passwordEnvVar(id);
    const { STATICRYPT_PASSWORD, ...env } = process.env;
    if (process.env[envVar]) env.STATICRYPT_PASSWORD = process.env[envVar];

    console.log(`\n► Encrypting prototype: ${id}`);
    if (!env.STATICRYPT_PASSWORD) console.log(`${envVar} not set, enter the password for "${id}":`);
    await fsp.rm(outDir, { recursive: true, force: true });
    await fsp.mkdir(outDir, { recursive: true });

    const cmd = `npx staticrypt "${path.join(SRC, id, 'index.html')}" -d "${outDir}" -c "${path.relative(ROOT, path.join(CONFIG, `${id}.json`))}" --remember 30 --template-title "Cincotree prototype" --template-instructions "Enter the password to view this prototype."`;
    execSync(cmd, { stdio: 'inherit', cwd: ROOT, env });
  }

  console.log('\n✓ Encrypted prototypes written to public/prototypes/*');
})().catch(err => {
  console.error(err);
  process.exit(1);
});
