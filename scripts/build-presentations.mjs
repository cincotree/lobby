// scripts/build-presentations.mjs
import fs from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'src', 'app', 'presentations');
const PUB = path.join(ROOT, 'public', 'presentations');

// Optional: build only a subset: PRESENTATIONS="deck-a,deck-b" npm run build:presentations
const only = (process.env.PRESENTATIONS || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

function isDir(p) { try { return fs.statSync(p).isDirectory(); } catch { return false; } }
function exists(p) { try { fs.accessSync(p); return true; } catch { return false; } }

(async () => {
  if (!isDir(SRC)) {
    console.error(`No presentations folder at: ${SRC}`);
    process.exit(0);
  }
  await fsp.mkdir(PUB, { recursive: true });

  const entries = fs.readdirSync(SRC).filter(name => {
    if (only.length && !only.includes(name)) return false;
    return isDir(path.join(SRC, name)) && exists(path.join(SRC, name, 'slides.md'));
  });

  if (entries.length === 0) {
    console.log('No Slidev decks found (or filtered out).');
    process.exit(0);
  }

  for (const id of entries) {
    const deckDir = path.join(SRC, id);
    const slides = path.join(deckDir, 'slides.md');
    const outDir = path.join(PUB, id);

    console.log(`\n▶ Building deck: ${id}`);
    await fsp.rm(outDir, { recursive: true, force: true });
    await fsp.mkdir(outDir, { recursive: true });

    // Important: set base so assets resolve under /presentations/<id>/
    const cmd = `npx slidev build "${slides}" --base "/presentations/${id}/" --out "${outDir}"`;
    console.log(cmd);
    execSync(cmd, { stdio: 'inherit' });
  }

  console.log('\n✓ All decks built into public/presentations/*');
})().catch(err => {
  console.error(err);
  process.exit(1);
});
