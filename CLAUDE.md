# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Source for fredericberghmans.com — a single-page, centered, no-navbar personal
portfolio. There is currently one route (`app/page.tsx`); all content is
inline JS data arrays or JSX, not a CMS.

## Commands

```bash
npm install              # or: npm run install:ci for a locked, reproducible install
npm run dev               # local dev server (Vite + vinext), http://terminal.local or localhost
npm run build              # production build (bash scripts/build-verified.sh)
npm run start                # run the built app
npm test                       # build, then run tests/rendered-html.test.mjs against dist/
npm run lint                    # eslint (flat config, eslint-config-next)
npm run db:generate              # drizzle-kit generate, after editing db/schema.ts
npm run validate:artifact         # sanity-check a built dist/ output (worker export + hosting.json)
```

There is a single test file (`tests/rendered-html.test.mjs`, run with node's
built-in test runner). It imports the **built** worker at
`dist/server/index.js`, so it only works after `npm run build`; `npm test`
runs both in sequence. There's no way to run "a single test" separately from
that file today — add `test.only(...)` in the file if you need to isolate one.

`npm run build`, `npm run lint`, and `npm run db:generate` all funnel through
`scripts/sites-env.sh`, which pins `HOME`/npm cache/Wrangler paths under
`.sites-runtime/` for the OpenAI Sites CI builder. `scripts/build-verified.sh`
additionally requires GNU `timeout` (and `install-ci.sh` requires `flock` and
`sha256sum`), which aren't present on stock macOS — install coreutils/util-linux
via Homebrew, or run `node_modules/.bin/vinext build` directly, if `npm run
build` fails with a missing-command error locally. `npm run dev` does not need
any of this and works out of the box.

## Architecture

**Stack**: Next.js App Router on React 19 + TypeScript, styled with Tailwind
CSS 4 driven by semantic CSS custom properties. The app runs on
**[vinext](https://github.com/cloudflare/vinext)**, which compiles the Next.js
app to run on **Cloudflare Workers** via Vite — this is not a standard
Next.js/Vercel deployment despite `docs/08-technical-architecture.md`
describing a Vercel-hosting plan; the README and `vite.config.ts`/`worker/`
reflect what's actually wired up today (Cloudflare Workers, currently served
through OpenAI's Sites platform). Treat the docs' hosting section as
aspirational and the README's "Hosting" section as current truth.

**Request flow**: `worker/index.ts` is the Cloudflare Worker entry point. It
intercepts `/_vinext/image` for on-the-fly image optimization (via Cloudflare
Images) and otherwise delegates to vinext's generated App Router handler. Env
bindings (`ASSETS`, `DB`, `IMAGES`) are declared there and configured for local
dev in `vite.config.ts`, which reads `.openai/hosting.json` to decide whether
to simulate D1/R2 bindings at all (both are `null`/unused by default).

**Build packaging**: `build/sites-vite-plugin.ts` (the `sites()` Vite plugin)
runs after the Vite build and copies `.openai/hosting.json` and any
`drizzle/` migrations into `dist/.openai/`, which is what the Sites hosting
platform expects to find alongside the compiled worker.

**Content vs. components**: `content/homepage.md` is a human-readable copy
outline / source of truth for wording, but it is *not* consumed at build
time — the actual copy and data (projects, recognition items, videos,
capabilities) live as literal arrays and JSX directly in `app/page.tsx`.
When copy changes, update both the component and the doc. `components/`
has `brand-mark.tsx` and `social-links.tsx`, but neither is currently
imported anywhere — `app/page.tsx` re-implements the same icons/links
inline (`ContactIcon`, `CompanyLink`, etc.). Prefer wiring the existing
components in over duplicating markup again if you touch that area.

**Theming**: Three-state theme (`system` / `light` / `dark`) implemented with
a `data-theme` attribute on `<html>`, set by an inline blocking script in
`app/layout.tsx` (reads `localStorage['fred-theme']` before paint, avoiding a
flash of the wrong theme) and toggled at runtime by
`components/preference-controls.tsx`. All colors are semantic CSS variables
defined in `app/globals.css` (`:root`, the dark `prefers-color-scheme` block,
and explicit `[data-theme="light"|"dark"]` overrides) — never hardcode colors
in components. The same client component also owns two other persisted,
off-by-default preferences: interface sound (`fred-sound`, tiny WebAudio
tones on click) and an "inspection" mode (`fred-inspect`, toggles design
annotation callouts — the `.craft-note` elements in `page.tsx`).

**Auth (unused by default)**: `app/chatgpt-auth.ts` provides helpers for
"Sign in with ChatGPT" against OpenAI Sites' hosting-layer auth (reads
`oai-authenticated-user-*` request headers; Sites owns the actual
`/signin-with-chatgpt` etc. routes). The homepage doesn't call these — they
exist for a future authenticated page.

**Database**: Drizzle ORM + Cloudflare D1 is wired up but intentionally
unused — `db/schema.ts` is empty by design. `examples/d1/` shows the opt-in
pattern (schema + a route using it) to copy from if a page needs data.

## Working rules (from AGENTS.md — read it in full before structural changes)

- Read `docs/00-project-brief.md` and any doc relevant to the change before
  touching positioning, IA, or the visual system. Don't duplicate rules
  across docs; link to the source of truth instead.
- Visual: one typeface (Inter Variable); equal support for dark/light/system;
  compact, centered, editorial, content-led; no glow/3D/gradients/glassmorphism/
  floating blobs/oversized display type; no colors, spacing, radii, shadows, or
  motion values outside the token system in `globals.css`.
- Interaction: sound is optional/off-by-default/visible/persistent and never
  the only feedback (no sound on hover/scroll/load); respect
  `prefers-reduced-motion`; every control must be keyboard- and AT-operable.
- Engineering: strict TypeScript; prefer server components, add `"use client"`
  only where interaction requires it; reuse existing components/CSS variables
  before adding new ones; run lint, type checks, tests, and a production build
  before considering implementation work done.
