# Agent instructions

These instructions apply to Claude, Codex, Cursor, and other agents working in this repository.

## Before making changes

1. Read `docs/00-project-brief.md`.
2. Read the documents relevant to the requested change.
3. Check existing components and tokens before creating anything new.
4. Ask only when a missing decision would materially change the result.

## Product principles

- Position Frederic as a product and design leader who builds.
- Demonstrate readiness for CPO, VP Product, Head of Product, and VP Product Design roles.
- Show design-engineering and AI fluency as evidence, not as the primary professional label.
- Connect customer needs, business strategy, design, technology, regulation, and delivery.
- Prefer measurable product outcomes over descriptions of design activity.
- Keep claims accurate. Use `[VERIFY BEFORE PUBLISHING]` where evidence is incomplete.

## Visual principles

- Use one sans-serif family: Inter Variable.
- Support dark, light, and system themes equally.
- Keep the composition compact, centered, editorial, and content-led.
- Use motion with precision and restraint.
- Do not use glow effects, 3D decoration, gradients, glassmorphism, floating blobs, excessive cards, oversized display type, or generic AI landing-page patterns.
- Do not introduce colors, spacing values, radii, shadows, or motion values outside the token system.
- Preserve the original geometry of the FB mark and render it using `currentColor`.

## Interaction principles

- Sound is optional, off by default, visible, persistent, and never the only feedback.
- Respect `prefers-reduced-motion`.
- Every interactive control must work with keyboard and assistive technology.
- Motion must never delay access to content.
- Avoid sound on hover, scroll, or initial page load.

## Engineering principles

- Use TypeScript strictly.
- Prefer server components unless interaction requires a client component.
- Keep client JavaScript small.
- Use semantic HTML before adding ARIA.
- Reuse components and semantic CSS variables.
- Optimize images and fonts.
- Maintain strong Lighthouse results across performance, accessibility, best practices, and SEO.
- Run lint, type checks, tests, and a production build before completing implementation work.

## Documentation discipline

- Update the relevant document when a structural decision changes.
- Do not duplicate the same rule across multiple documents unless one file clearly links to the source of truth.
- Keep content separate from component implementation.

