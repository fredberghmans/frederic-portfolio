# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Source for fredericberghmans.com — a single-page, centered, no-navbar personal
portfolio. There is currently one route (`app/page.tsx`); all content is
inline JS data arrays or JSX, not a CMS.

## Commands

```bash
npm install       # install dependencies
npm run dev        # local dev server (Next.js + Turbopack), http://localhost:3000
npm run build        # production build
npm run start          # run the built app
npm run lint             # eslint (flat config, eslint-config-next)
```

There are no automated tests in this repo currently.

## Architecture

**Stack**: Next.js App Router on React 19 + TypeScript, styled with Tailwind
CSS 4 driven by semantic CSS custom properties. Standard Next.js build and
runtime — no custom server, edge worker, or database wiring. Deployed on
Vercel.

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

## Working rules (from AGENTS.md — read it in full before structural changes)

Before changing positioning, IA, the visual system, or interaction/motion
behavior, read `AGENTS.md` and whichever of these are relevant to the change:
`docs/00-project-brief.md` (purpose, audiences, success criteria),
`docs/01-positioning.md` (positioning, differentiation, tone of voice),
`docs/05-visual-direction.md` (visual character, typography, color, portrait),
`docs/06-design-system.md` (type scale, layout, semantic tokens, components),
`docs/07-motion-and-sound.md` (motion vocabulary, reduced motion, sound
rules), `docs/08-technical-architecture.md` (stack, rendering, a11y, SEO).
Don't duplicate rules across docs; link to the source of truth instead.

- Visual: one typeface (Inter Variable); equal support for dark/light/system;
  compact, centered, editorial, content-led; no glow/3D/gradients/glassmorphism/
  floating blobs/oversized display type; no colors, spacing, radii, shadows, or
  motion values outside the token system in `globals.css`.
- Interaction: sound is optional/off-by-default/visible/persistent and never
  the only feedback (no sound on hover/scroll/load); respect
  `prefers-reduced-motion`; every control must be keyboard- and AT-operable.
- Engineering: strict TypeScript; prefer server components, add `"use client"`
  only where interaction requires it; reuse existing components/CSS variables
  before adding new ones; run lint, type checks, and a production build
  before considering implementation work done.
