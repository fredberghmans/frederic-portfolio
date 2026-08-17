# Motion and sound

## Motion principles

- Motion explains state, hierarchy, or relationship.
- Motion can add character but must remain quiet.
- Content is available immediately.
- Avoid animating every element.
- Avoid large scroll-bound effects.
- Prefer responsive, interruptible transitions.

## Initial motion vocabulary

- Content entrance: short fade with minimal vertical travel
- Navigation: underline, opacity, or small positional response
- Project preview: restrained media or text transition
- Theme change: coordinated color transition
- Portrait: optional minimal parallax or clarity transition
- Page transition: short and subtle when case-study pages are introduced

Exact duration and easing tokens will be tested in implementation.

## Reduced motion

When `prefers-reduced-motion: reduce` is active:

- Remove parallax
- Remove nonessential transforms
- Reduce duration to near-instant state changes
- Preserve hierarchy and feedback without motion

## Sound character

Subtle digital tones. Balanced, quiet, and precise.

Possible sound moments:

- Theme change
- Explicit navigation selection
- Copy email confirmation
- Project open
- Error or invalid action

Do not use sound for:

- Hover
- Scrolling
- Initial page load
- Ambient background audio
- Repeated passive interactions

## Sound control

- Sound is off by default.
- The control is visible in the header.
- The preference persists locally.
- Sound is never the only feedback channel.
- Volume remains low and consistent.
- The system must not play before a visitor interaction permits audio.

