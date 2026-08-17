# Technical architecture

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Markdown and MDX
- Inter Variable, self-hosted
- Vercel hosting
- GitHub source control

## Repository model

- Private during development
- Public when launch content and history are suitable for publication
- Feature branches produce Vercel preview deployments
- `main` represents production

## Content model

- Homepage copy lives outside presentation components.
- Strategy and requirements remain in `docs/`.
- Future case studies use MDX when interactive components are useful.
- No CMS in phase 1.

## Rendering model

- Prefer static rendering for public pages.
- Prefer React server components.
- Use client components only for theme, sound, motion, and other required interactions.
- Keep third-party scripts minimal.

## Theme implementation

- Read system preference without a visible flash of the wrong theme.
- Persist manual theme selection locally.
- Support system, light, and dark states.
- Use semantic CSS variables.

## Analytics

The implementation should allow privacy-conscious analytics without coupling the site to a specific vendor initially.

Initial events:

- Contact click
- LinkedIn click
- CV click
- GitHub click
- Project preview open
- Theme change
- Sound enabled or disabled

Do not collect sensitive or unnecessary personal data.

## Performance

- Optimize and size images responsively.
- Self-host fonts and preload only necessary files.
- Avoid heavy animation libraries unless justified.
- Avoid WebGL and 3D dependencies.
- Prevent layout shift.
- Keep audio assets small and load them only when needed.

## Accessibility

- Target WCAG 2.2 AA.
- Use semantic HTML.
- Ensure full keyboard navigation.
- Maintain visible focus states.
- Meet text and non-text contrast requirements.
- Respect reduced motion.
- Announce theme and sound state accessibly.
- Provide meaningful alternative text.

## SEO and metadata

- Descriptive page title and metadata
- Canonical URL
- Open Graph and social preview image
- Structured person data where appropriate
- Sitemap
- Robots configuration
- Accessible, semantic headings

## Domain and hosting

The domain remains registered with Versio. DNS will point to Vercel after production validation. The current registration expires on 2 September 2028.

