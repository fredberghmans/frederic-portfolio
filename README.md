# Frederic Berghmans — Portfolio

The source for [fredericberghmans.com](https://www.fredericberghmans.com), a personal portfolio positioning
Frederic as a product and design leader — someone who moves between product
strategy, design, technology, AI, and delivery, and stays close enough to the
work to build.

## Content

The first release is a single, centered homepage (no navigation bar) that
walks through:

1. **Introduction** — portrait, name, title, and social links
2. **Selected work** — case studies in progress (AMINA platform rebuild,
   building the product-design function, AI-native delivery)
3. **Recognition** — awards, hackathons, certifications, panels
4. **Videos** — talks and interviews
5. **Where I operate** — product, design, technology, delivery
6. **Belief statement** and footer

Copy and content structure are documented separately from the components
that render them:

- `content/homepage.md` — homepage copy outline (source of truth for copy,
  independent of implementation)
- `docs/` — the strategy and design foundation for the whole site:
  - `00-project-brief.md` — product purpose, audiences, success criteria
  - `01-positioning.md` — positioning, differentiation, tone of voice
  - `02-audience-and-goals.md` — who the site is for and what they should do
  - `03-information-architecture.md` — homepage structure and future
    case-study model
  - `05-visual-direction.md` — visual character, typography, color, logo,
    portrait treatment
  - `06-design-system.md` — type scale, layout, semantic color tokens,
    component inventory
  - `07-motion-and-sound.md` — motion vocabulary and optional sound design
  - `08-technical-architecture.md` — stack, rendering, accessibility, SEO
  - `references.md` — external references that inform (not dictate) the
    visual design

If you're changing anything structural (positioning, IA, visual system),
read the relevant doc first — `AGENTS.md` has the full contributor checklist.

## Tech stack

- **Next.js** (App Router) on **React 19** and **TypeScript**
- **Tailwind CSS 4**, driven by semantic CSS variables (`app/globals.css`)
- **Inter Variable**, self-hosted via `@fontsource-variable/inter`
- **[vinext](https://github.com/cloudflare/vinext)** — runs Next.js on
  Cloudflare Workers via Vite
- **Drizzle ORM** + Cloudflare **D1** — wired up but unused by default
  (`db/schema.ts` is intentionally empty; see `examples/d1/` for an opt-in
  example)
- Hosted on **Cloudflare Workers**, currently served through OpenAI's Sites
  platform (see [Hosting](#hosting) below)

## Project structure

```
app/            Next.js App Router: layout, homepage, ChatGPT sign-in helpers
components/     Reusable UI: brand mark, theme/sound controls, social links
content/        Editorial copy outline, kept separate from components
db/             Drizzle client + schema (empty until the site needs data)
docs/           Product brief, positioning, IA, design system, architecture
examples/d1/    Opt-in example of a D1-backed route + schema
public/         Static assets: images, favicon, résumé
scripts/        Install/build/dev helper scripts (see Hosting)
tests/          Build/render checks
worker/         Cloudflare Worker entry point (image optimization, routing)
```

## Getting started

Prerequisites: Node.js `>=22.13.0`.

```bash
npm install        # or: npm run install:ci for a locked, reproducible install
npm run dev         # start the local dev server (Vite + vinext)
npm run build        # production build
npm run start        # run the built app
npm test               # build, then verify rendered output
npm run lint            # eslint
npm run db:generate      # generate Drizzle migrations after schema changes
```

Edit site content and UI under `app/` and `components/`; theme tokens and
global styles live in `app/globals.css`.

## Hosting

This repo is currently deployed via the OpenAI Sites platform, which runs
on Cloudflare Workers under the hood. A few things are specific to that setup:

- `.openai/hosting.json` declares optional D1/R2 bindings; `vite.config.ts`
  simulates them locally.
- `worker/index.ts` is the Cloudflare Worker entry point (routes requests,
  handles image optimization).
- `scripts/install-ci.sh` and `scripts/build-verified.sh` back the
  `install:ci` and `build` npm scripts. They're written for the Sites
  builder's Linux environment (single-socket, non-retrying `npm ci`, a
  bounded build with artifact validation) — not general-purpose scripts, and
  not native to macOS.
- `app/chatgpt-auth.ts` provides optional "Sign in with ChatGPT" helpers for
  pages that need per-user identity. The homepage doesn't use them; they're
  available if a future page needs an authenticated view. Dispatch (the
  hosting platform) owns the actual auth routes and cookies — see the
  helper's doc comments for usage.

None of this is required to run the site locally with plain `npm run dev`
or to deploy it elsewhere (e.g. Cloudflare Pages/Workers directly); it's
what makes the OpenAI Sites builder specifically work.

## Learn more

- [vinext documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 guide](https://orm.drizzle.team/docs/get-started/d1-new)
- `AGENTS.md` for contributor/agent working rules (product, visual,
  interaction, and engineering principles)
