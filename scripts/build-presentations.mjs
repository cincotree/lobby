// scripts/build-presentations.mjs
import fs from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = process.cwd();
const SRC  = path.join(ROOT, 'src', 'presentations');     // decks live here
const OUT  = path.join(ROOT, 'public', 'presentations');  // built output

function isDir(p){ try { return fs.statSync(p).isDirectory(); } catch { return false; } }
function exists(p){ try { fs.accessSync(p); return true; } catch { return false; } }

(async () => {
  if (!isDir(SRC)) {
    console.log(`No presentations dir at: ${SRC}`);
    process.exit(0);
  }
  await fsp.mkdir(OUT, { recursive: true });

  // optionally build a subset: PRESENTATIONS=deck1,deck2 npm run build:presentations
  const only = (process.env.PRESENTATIONS || '')
    .split(',').map(s => s.trim()).filter(Boolean);

  const decks = fs.readdirSync(SRC).filter(name => {
    if (only.length && !only.includes(name)) return false;
    return isDir(path.join(SRC, name)) && exists(path.join(SRC, name, 'slides.md'));
  });

  if (decks.length === 0) {
    console.log(`No Slidev decks found in: ${SRC}`);
    process.exit(0);
  }

  for (const id of decks) {
    const deckDir = path.join(SRC, id);
    const outDir  = path.join(OUT, id);

    console.log(`\n► Building deck: ${id}`);
    await fsp.rm(outDir, { recursive: true, force: true });
    await fsp.mkdir(outDir, { recursive: true });

    // Run inside the deck so Slidev reads the front-matter (routerMode: hash)
    const cmd = `npx slidev build "slides.md" --base "/presentations/${id}/" --out "${outDir}"`;
    console.log(cmd);
    execSync(cmd, { stdio: 'inherit', cwd: deckDir });
  }

  console.log('\n✓ All decks built to public/presentations/*');
})().catch(err => {
  console.error(err);
  process.exit(1);
});
