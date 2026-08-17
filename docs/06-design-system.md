# Design system

## Status

This document defines the initial system. Exact token values will be validated in the browser before being locked.

## Typography

Font: Inter Variable, self-hosted.

Initial scale:

| Role | Desktop | Mobile | Weight |
| --- | ---: | ---: | ---: |
| Hero | 48 to 56 px | 36 to 42 px | 500 |
| Section title | 24 to 28 px | 22 to 24 px | 500 |
| Large body | 19 to 21 px | 18 to 19 px | 400 |
| Body | 16 px | 16 px | 400 |
| Metadata | 13 to 14 px | 13 px | 450 |
| Label | 12 px | 12 px | 500 |

Target body line length: 55 to 70 characters.

## Layout

- Primary reading column target: approximately 620 px, subject to visual testing.
- Wider project media containers may exceed the reading column.
- Mobile gutters: minimum 20 px.
- Desktop gutters: minimum 32 px.
- Section spacing should create separation without making the page feel fragmented.

## Semantic color tokens

The implementation must define at least:

```css
--background
--foreground
--surface
--surface-subtle
--muted
--border
--focus
--selection
--success
--warning
--danger
```

Do not name semantic tokens after literal colors.

## Theme behavior

- Initial theme follows `prefers-color-scheme`.
- Visitors can choose system, light, or dark.
- Manual preference persists locally.
- The control appears in the top-right area of the header.
- Theme changes do not require page refresh.
- Both themes receive equal design and contrast testing.

## Component inventory for phase 1

- Brand lockup
- Theme control
- Sound control
- Text link
- Primary contact link
- Section heading
- Project preview
- Impact metric
- Capability item
- Belief statement
- Career entry
- Recognition entry
- Portrait
- Footer

## Component principles

- Prefer typographic and structural grouping over cards.
- Use borders sparingly.
- Use radius only where the object requires a container.
- Use shadows only for functional elevation, not decoration.
- Provide hover, focus-visible, active, disabled, and loading behavior where relevant.
- Every control must have a visible focus state.

## Tailwind relationship

CSS variables are the source of truth for semantic values. Tailwind consumes those variables. Agents must not scatter arbitrary literal values through components.

