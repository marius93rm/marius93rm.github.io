# Design System: Marius Minia Developer

This document is the visual source of truth for the static portfolio site. It is written in semantic language so a future agent can extend the page without reintroducing the original gaming template's visual language.

## 1. Visual theme and atmosphere

Light editorial tech for business owners and companies in Romania. The interface should feel credible, focused and premium without looking corporate-template or gaming-oriented. Use controlled asymmetry, generous whitespace and a clear reading path toward a phone conversation.

- Page theme: light only.
- Design variance: 6/10, offset asymmetric layouts with clear alignment.
- Motion intensity: 4/10, restrained transitions and user-controlled interactions.
- Visual density: 3/10, spacious portfolio presentation.
- Content register: concise, direct and factual.
- Primary conversion: call Marius.
- Secondary conversion: review real work and submit the contact form.

## 2. Color palette and roles

- **Cloud Canvas (`#F5F8FC`)** - primary page background.
- **Paper Surface (`#FFFFFF`)** - content surfaces, form and cards.
- **Mist Surface (`#E8EFF7`)** - placeholder fields and quiet contrast.
- **Deep Ink (`#132238`)** - headings, brand text and primary body emphasis.
- **Steel Text (`#5E6F82`)** - supporting copy and descriptions.
- **Faint Text (`#52677D`)** - supporting notes and non-primary metadata while retaining WCAG AA contrast.
- **Structural Border (`#D6E1EC`)** - section and component boundaries.
- **Strong Border (`#B9CBDC`)** - input borders and interactive outlines.
- **Steel Cobalt (`#205B8F`)** - the only accent family, used for primary actions, active states, focus rings and small emphasis.
- **Cobalt Deep (`#17466E`)** - hover state for the same accent family.
- **Cobalt Tint (`#E2EDF6`)** - soft background tint derived from the accent.

Do not introduce additional accent hues, social-network blue, neon orange, purple gradients or pure black. Keep text contrast at WCAG AA minimum, with the main text targeting AAA where practical.

## 3. Typography rules

- **Display and headings:** self-hosted Manrope, weight 800, tight tracking and controlled scale.
- **Body:** self-hosted Manrope, weight 400 to 600, relaxed line height and a maximum reading measure near 65 characters.
- **Labels:** Manrope, weight 800, small size and restrained letter spacing.
- **No remote font loading:** never add Google Fonts or CDN font links to the production HTML.
- **No default serif:** the brand direction is technical and sans-serif.
- **No all-caps italic gaming typography:** use sentence case and weight for hierarchy.

## 4. Component styling

- **Navigation:** sticky, translucent light surface with a 1px bottom border. Maximum desktop height is 72px. Collapse to a full-width mobile menu below 768px.
- **Buttons:** 12px radius, accent fill for primary action, white text, minimum 48px height, tactile active state and no outer glow.
- **Text links:** underlined or visibly directional, never a low-contrast ghost link.
- **Cards:** use only where hierarchy requires a surface. Use 12px radius, structural border and cool tinted shadow.
- **Inputs:** label above field, 48px minimum height, visible border, accent focus ring and native validation support.
- **Carousel:** horizontal scroll-snap, visible controls when content exists, keyboard arrows, no autoplay and no forced scroll hijack.
- **Media slots:** clearly labeled until real approved assets exist. Do not fabricate screenshots with CSS rectangles.
- **Empty states:** state what will be added without inventing content or metrics.

## 5. Layout principles

- Use a centered container with a maximum width of 1180px.
- Use CSS Grid for asymmetric splits and galleries.
- Collapse all multi-column sections to one column below 768px.
- Keep the hero split on desktop: copy left, portrait right.
- Keep technology logos in a separate band below the hero, not as a cluttered trust strip inside the hero.
- Make websites the visually dominant service, with supporting services arranged as a vertical group.
- Use a featured portfolio item plus smaller supporting items. Do not use an empty bento cell.
- Use `min-height: 100dvh` for the desktop hero, never `100vh` as the only height rule.
- Preserve stable anchor IDs: `services`, `teaching`, `work`, `contact`.

## 6. Motion and interaction

- Animate only transform and opacity.
- Use short ease-out transitions for hover and active feedback.
- Use no perpetual animation, automatic marquee or carousel autoplay.
- Respect `prefers-reduced-motion: reduce` by disabling smooth scroll and transition effects.
- Keep the mobile navigation and carousel fully usable with keyboard input.
- Do not add `window.addEventListener('scroll')`, custom cursors, parallax or scroll hijacking.

## 7. Content rules

- Use only information supplied or verified by Marius.
- Do not invent clients, course titles, reviews, numbers, prices, awards, technologies or project results.
- Prefer short, concrete sentences over marketing filler.
- Avoid words such as “seamless”, “next-gen”, “elevate” and “unleash”.
- Keep the main action consistently labeled “Call Marius” until a final CTA label is approved.
- Add Romanian and Italian versions only after real translations exist.

## 8. Accessibility and SEO rules

- Keep one `h1` and a logical `h2` hierarchy.
- Use semantic `header`, `nav`, `main`, `section`, `article`, `form` and `footer` elements.
- Every input needs a visible associated label and a stable `name`.
- Every real image needs accurate dimensions and descriptive alternative text.
- Keep decorative placeholders `aria-hidden` and explain their replacement contract in documentation.
- Preserve visible focus states and minimum 44px interactive targets.
- Keep SEO-critical copy in HTML, not injected only by JavaScript.
