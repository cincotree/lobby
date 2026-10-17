import fs from 'fs';
import fsp from 'fs/promises';
import os from 'os';
import path from 'path';
import { execFileSync } from 'child_process';

const ROOT = process.cwd();
const SRC  = path.join(ROOT, 'src', 'prototypes');
const OUT  = path.join(ROOT, 'public', 'prototypes');
const CONFIG = path.join(ROOT, '.staticrypt');
const TEMPLATE = path.join(ROOT, 'scripts', 'prototype-template.html');
const DEFAULT_INSTRUCTIONS = 'This prototype is shared privately. Enter the password you were sent to open it.';

function isDir(p){ try { return fs.statSync(p).isDirectory(); } catch { return false; } }
function exists(p){ try { fs.accessSync(p); return true; } catch { return false; } }
function passwordEnvVar(id){ return `PROTOTYPE_PASSWORD_${id.toUpperCase().replace(/[^A-Z0-9]/g, '_')}`; }
function defaultTitle(id){ return id.split(/[-_]/).filter(Boolean).map(w => w[0].toUpperCase() + w.slice(1)).join(' '); }
function readMeta(id){
  const file = path.join(SRC, id, 'meta.json');
  return exists(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {};
}

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
    const meta = readMeta(id);
    const tmpDir = await fsp.mkdtemp(path.join(os.tmpdir(), `prototype-${id}-`));
    try {
      execFileSync('npx', [
        'staticrypt', path.join(SRC, id, 'index.html'),
        '-d', tmpDir,
        '-c', path.relative(ROOT, path.join(CONFIG, `${id}.json`)),
        '-t', TEMPLATE,
        '--remember', '30',
        '--template-title', meta.title || defaultTitle(id),
        '--template-instructions', meta.instructions || DEFAULT_INSTRUCTIONS,
      ], { stdio: 'inherit', cwd: ROOT, env });

      await fsp.mkdir(outDir, { recursive: true });
      await fsp.copyFile(path.join(tmpDir, 'index.html'), path.join(outDir, 'index.html'));
    } finally {
      await fsp.rm(tmpDir, { recursive: true, force: true });
    }
  }

  console.log('\n✓ Encrypted prototypes written to public/prototypes/*');
})().catch(err => {
  console.error(err);
  process.exit(1);
});
