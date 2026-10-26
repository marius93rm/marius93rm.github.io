# Web showcase

## Direction

A light screening room: oversized Manrope typography, steel-blue controls, one
dominant browser frame, two receding views of the same project, and a seven-item
filmstrip. The images carry the content; project descriptions remain on the home
page. Each view holds for 5.4 seconds. After the third view the next project plays.
Selecting a project or view pauses the tour until Play is pressed.

Research references consulted on 2026-10-25:

- [Codrops — On-Scroll 3D Carousel](https://tympanus.net/Development/3DCarousel/): perspective and depth between neighboring previews.
- [Codrops — carousel collection](https://tympanus.net/codrops/hub/tag/carousel/): continuous visual browsing and clear controls.
- [Awwwards — Featured Area Interaction](https://www.awwwards.com/inspiration/featured-area-interaction-moha-auf-experience-expert): a dominant project viewport with direct project navigation.

The implementation is original vanilla JavaScript/CSS. No third-party demo code
or artwork was copied. Motion is a specific exception requested by the owner to
the homepage design system's no-autoplay rule.

## Screenshots and destinations

The seven opening screenshots are the previously approved 1280 × 800 assets in
`assets/images/projects/`. Additional views were captured from real rendered
pages on 2026-10-25/26 and encoded as local WebP files in `assets/images/showcase/`.
They are recorded previews, not live embedded websites. No visitor-side requests
are made to the featured sites until a visitor follows the external link.

| Project | Additional capture sources | Destination |
| --- | --- | --- |
| Spațiu360 | `/produse/#tur-rezidential`, `/tur-virtual-google-maps-brasov/` on spatiu360.ro | https://spatiu360.ro/ |
| Casa Rusu | `/en/meniu/`, `/en/preparate/snitel-cotlet-porc` on casarusu.netlify.app | https://casarusu.netlify.app/ (provisional URL confirmed in its AGENTS.md) |
| BikeTrain | Station selection and travel guide in the local travelBike application | https://github.com/marius93rm/travelBike |
| Visit Codlea | `/galerie/`, `/locuri/biserica-evanghelica-fortificata-codlea/` on visitcodlea.infy.click | https://visitcodlea.infy.click/ |
| unaSquadraFortissimi | `#agenti`, `#skill`, rendered from the public repository locally because the hosted page's stylesheet did not render during capture | https://marius93rm.github.io/unaSquadraFortissimi/ |
| TikTok Cleaner | `#safety`, `#quick-start` on the project's public GitHub Pages site | https://marius93rm.github.io/tiktok-non-mutual-cleaner/ |
| Depurazioneacqua.eu | `/gallery.html`, `/microfiltrazione.html` | https://depurazioneacqua.eu/ |

The owner explicitly removed ThoseGuys and afterElla from this pass because
their repositories contained only README files. Do not add placeholder artwork.

## Maintenance and behavior

- Edit data and translations in `scripts/build-showcase.mjs`, then regenerate.
- Keep the view order, caption and thumbnail selection synchronized.
- Manual controls pause autoplay; the Play button resumes it.
- Reduced motion disables transitions and starts paused. Explicit Play still
  allows view changes without transition effects.
- Background documents and out-of-view players suspend their animation clock.
- Decode each next image before replacing the visible frame. Failed decoding
  leaves the last good frame visible and pauses the tour.
- Cinema mode isolates background controls, keeps keyboard focus inside the
  player, and exits with Escape or its toggle.
- On mobile, swipe the screen for another view; scroll the filmstrip for projects.
- Without JavaScript, the initial screenshot and all seven destination links work.
- Deep links use project IDs, e.g. `/it/showcase/#casa-rusu`.

## Checks

Run `node scripts/build-locales.mjs`, `node scripts/build-showcase.mjs`,
`node scripts/check-showcase.mjs` and `node --check assets/js/showcase.js`.
Browser review should cover 360, 768, 1024 and 1440 CSS pixels, all seven
projects, manual views, autoplay, pause, cinema/Escape and language navigation.
Never submit the contact form as part of showcase verification.

Verified for this change: all four responsive widths without document overflow;
all seven project selections and decoded opening images; manual scene changes;
cinema mode and Escape/focus return; the tablet home menu linking to the showcase;
reduced-motion startup; and DOM-based controller checks for automatic scene/project
advance, pause/resume, visibility suspension, keyboard focus, rapid selections,
image failure recovery and deep links. Lighthouse and external schema-validator
runs were not performed. Static JSON-LD parsing and metadata/link checks passed.
