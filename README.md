# cincotree.com

Marketing site for Cincotree, an AI engineering practice based in Dubai.

Next.js App Router, statically exported and served from GitHub Pages at
[www.cincotree.com](https://www.cincotree.com).

## Running it

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```

This runs `scripts/build-presentations.mjs` first, which builds every Slidev
deck under `src/presentations/<id>/slides.md` into `public/presentations/<id>/`,
then runs `next build` to export the whole site to `out/`.

Decks are only present after a full build, so slide links 404 under `npm run dev`.
To rebuild a subset:

```bash
PRESENTATIONS=agents-industrial-swe npm run build:presentations
```

## Layout

```
src/app/          routes; /courses, /blog and /workshops are redirect stubs
src/components/   Nav, Footer, Section, CTA, Redirect
src/content/      page copy as typed modules: offers, talks, faq
src/presentations/ Slidev deck sources
public/           static assets, CNAME, icons
```

Copy lives in `src/content` rather than in the components, so wording changes
do not mean touching layout.

## Deploying

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. There is no staging environment, so a push to
`master` is a production release.

Static export means no API routes: the contact path is Cal.com plus email.
`redirects()` in `next.config.ts` would be ignored under `output: 'export'`,
which is why moved routes use client-side redirect stubs instead.
