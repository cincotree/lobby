// scripts/build-presentations.mjs
import fs from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = process.cwd();
const SRC  = path.join(ROOT, 'src', 'presentations');       // your deck root
const OUT  = path.join(ROOT, 'public', 'presentations');    // final output root

// Optional global config at repo root (use one of these filenames)
const GLOBAL_CFG = ['slidev.config.mjs', 'slidev.config.js', 'slidev.config.ts']
  .map(n => path.join(ROOT, n))
  .find(p => fs.existsSync(p));

function isDir(p){ try { return fs.statSync(p).isDirectory(); } catch { return false; } }
function exists(p){ try { fs.accessSync(p); return true; } catch { return false; } }

(async () => {
  if (!isDir(SRC)) {
    console.log(`No presentations dir at: ${SRC}`);
    process.exit(0);
  }
  await fsp.mkdir(OUT, { recursive: true });

  // Allow selecting subset via env: PRESENTATIONS=deck1,deck2
  const only = (process.env.PRESENTATIONS || '').split(',').map(s => s.trim()).filter(Boolean);

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
    const slides  = 'slides.md';                           // run inside deck, so just filename
    const outDir  = path.join(OUT, id);

    console.log(`\n► Building deck: ${id}`);
    await fsp.rm(outDir, { recursive: true, force: true });
    await fsp.mkdir(outDir, { recursive: true });

    // If a global config exists and the deck lacks one, place a temporary link/copy
    let createdLocalCfg = false;
    const localCfg = path.join(deckDir, 'slidev.config.mjs');
    if (GLOBAL_CFG && !fs.existsSync(localCfg)) {
      const rel = path.relative(deckDir, GLOBAL_CFG);
      try {
        fs.symlinkSync(rel, localCfg);
        createdLocalCfg = true;
      } catch {
        // On platforms where symlink needs elevation (e.g., Windows), fallback to copy
        const content = await fsp.readFile(GLOBAL_CFG, 'utf8');
        await fsp.writeFile(localCfg, content, 'utf8');
        createdLocalCfg = true;
      }
    }

    try {
      // IMPORTANT: run with cwd = deckDir so Slidev picks up slidev.config.* correctly
      const cmd = `npx slidev build "${slides}" --base "/presentations/${id}/" --out "${outDir}"`;
      console.log(cmd);
      execSync(cmd, { stdio: 'inherit', cwd: deckDir });
    } finally {
      if (createdLocalCfg) {
        try { await fsp.unlink(localCfg); } catch {}
      }
    }
  }

  console.log('\n✓ All decks built to public/presentations/*');
})().catch(err => {
  console.error(err);
  process.exit(1);
});
