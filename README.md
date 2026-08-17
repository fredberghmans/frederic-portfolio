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
- Hosted on **Vercel**

## Project structure

```
app/            Next.js App Router: layout, homepage
components/     Reusable UI: brand mark, theme/sound controls, social links
content/        Editorial copy outline, kept separate from components
docs/           Product brief, positioning, IA, design system, architecture
public/         Static assets: images, favicon, résumé
```

## Getting started

Prerequisites: Node.js `>=22.13.0`.

```bash
npm install     # install dependencies
npm run dev      # start the local dev server
npm run build     # production build
npm run start      # run the built app
npm run lint         # eslint
```

Edit site content and UI under `app/` and `components/`; theme tokens and
global styles live in `app/globals.css`.

## Hosting

Deployed on Vercel, connected to this repository — pushes to `main` deploy to
production, and other branches/PRs get preview deployments.

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
- `AGENTS.md` for contributor/agent working rules (product, visual,
  interaction, and engineering principles)
