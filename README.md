# Marius Minia Developer

Static portfolio and contact site for Marius Minia, a web developer and informatics professor serving businesses in Romania.

The first version is intentionally a visual and technical foundation. It does not invent portfolio entries, courses, technology logos, testimonials, prices, metrics, client names or personal contact details. Those will be added in later content passes.

## Current status

- Static HTML, CSS and vanilla JavaScript.
- No framework, build step or runtime dependency.
- English is the first language.
- Light editorial tech visual system.
- Homepage routes are stable through `#services`, `#teaching`, `#work`, `#background` and `#contact`.
- Formspree is structurally ready, but the real form endpoint still needs to be inserted.
- The approved portrait and six selected desktop homepage screenshots are integrated in the homepage; the three teaching repositories have a separate highlighted card group with language logos.
- Teaching technology tags use the compact Shields.io README visual language, with Simple Icons brand colors and icons loaded from the official Simple Icons CDN.
- The education and certification strip uses verified CV data and appears before the contact section. The extracted public CV content is stored in [`data/cv.json`](data/cv.json).
- The selected professional background and LinkedIn links use information verified from the supplied CV and public LinkedIn profile.

## Design direction

The page is read as a professional developer portfolio for business owners and companies. The intended impression is premium tech, calm, precise and credible rather than gaming, neon or startup-generic.

The design system is documented in [`.stitch/DESIGN.md`](.stitch/DESIGN.md). The file is a manual source of truth inspired by the Google Stitch skills workflow. Stitch MCP is not installed in this repository, so it is documentation only and does not run the site.

Design dials:

- `DESIGN_VARIANCE: 7` - editorial asymmetry without experimental layouts.
- `MOTION_INTENSITY: 4` - restrained hover, focus and slider-direction transitions.
- `VISUAL_DENSITY: 4` - generous spacing with a more information-rich project gallery.

The project gallery uses stable CSS Grid Level 1/2 primitives. It intentionally does not use the experimental CSS Grid Level 3 masonry/grid-lanes syntax.

## Palette and typography

The page uses one light theme and one restrained blue accent family:

| Token | Value | Role |
| --- | --- | --- |
| Canvas | `#F5F8FC` | Main page background |
| Surface | `#FFFFFF` | Cards, form and content surfaces |
| Surface muted | `#E8EFF7` | Soft visual contrast and placeholders |
| Ink | `#132238` | Headings and primary text |
| Ink soft | `#5E6F82` | Body copy and secondary text |
| Border | `#D6E1EC` | Structural borders |
| Steel Cobalt | `#205B8F` | CTA, active states and focus ring |

Manrope is self-hosted in `assets/fonts/Manrope-Variable.ttf`. Do not add Google Fonts links or CDN styling to the production page.

## Page structure

1. Header and primary navigation.
2. Hero with personal portrait slot and primary contact action.
3. Education and certifications strip before contact, with the verified highlights ordered chronologically as Sapienza (2014), Entrepreneurship Course (2018), Apple Developer Academy (2019) and Apple Teacher (2020).
4. Services with websites as the featured service.
5. Teaching experience slider with real course details and technology tags.
6. Selected projects, followed by a separate group for teaching repositories.
7. Simple Formspree contact form.
8. Footer with four icon-only actions for LinkedIn, email, telephone and the contact form.

The source template supplied by TemplatesJungle was used as a structural reference for the hero, fixed navigation and asymmetric grid. The gaming copy, orange neon palette, remote demo images, Material Symbols and CDN dependencies were removed.

## Content contracts for future agents

### CV-derived education and experience

The supplied `Marius-Minia-CV2026ENG.pdf` is the source for the public education, certification and professional-training data in [`data/cv.json`](data/cv.json). The JSON keeps the original date text, institutions, locations, focus keywords and descriptive copy for later content passes. The homepage highlights the verified studies and certifications chronologically: Computer Engineering studies at Sapienza University of Rome (2014), Entrepreneurship Course at SC SIAB Development Srl (2018), Apple Developer Academy Programme (2019), and Apple Teacher certification (2020).

The public JSON and footer publish the confirmed phone number and email address as clickable `tel:` and `mailto:` links. Date of birth, gender and driving-licence information remain excluded from the public site.

### LinkedIn-derived background

The public profile at <https://www.linkedin.com/in/mariusminia> identifies Marius as working freelance / across multiple institutions and lists the Apple Developer Academy @Unina Federico II (2019-2020), with a focus on Swift, iOS/macOS development and UX/UI/product design. It also lists Apple Teacher and Google's fundamentals of digital marketing training.

These facts are used as concise credibility signals, not as a replacement for a complete CV. Do not infer current employers, client names, dates or project outcomes beyond the profile and the user's confirmed brief. The business positioning remains Romania-focused because that is the current project brief.

### Portrait

The approved personal photo is stored in `assets/images/portrait/` and the portrait figure in `index.html` uses a real `<picture>` element with:

- descriptive filename
- accurate `width` and `height`
- an honest `alt` description
- WebP or AVIF preferred, with a suitable fallback
- high priority loading because it is the hero visual

Do not replace it with a stock portrait or an AI-generated person without explicit approval.

### Technology logos

Add only technologies Marius confirms. Prefer local SVG assets from a reputable icon source and document their licenses in `THIRD-PARTY-NOTICES.md`. Do not invent a stack to fill space.

### Courses

Teaching cards in `index.html` use the verified instructor entries from `data/cv.json`. Each card includes the course title, date, instructor position, institution, descriptive copy and a compact list of technologies or topics. Add new cards only for confirmed entries; do not invent course titles, dates or attendee numbers.

### Selected work

The `#work` section contains the approved project entries supplied for this content pass:

- Spațiu360, a bilingual virtual-tour website for properties and businesses around Brașov.
- unaSquadraFortissimi, a repo-local Codex and Paseo template with agents, skills and workflows.
- TikTok Cleaner, a browser-console utility for cleaning non-mutual follows.
- Depurazioneacqua.EU, a service website for water purifier sales, installation and assistance in Rome and Lazio.
- Photography portfolio for events, portraits, motorcycles and cars.
- BikeTrain România, the product interface from the `travelBike` repository.

Each project includes a 1280 × 800 desktop homepage screenshot, accurate dimensions to prevent layout shift, descriptive `alt` text, a short factual description and a live or repository URL. The BikeTrain screenshot was captured from the locally running repository app. Do not replace these assets with CSS-built fake screenshots or remote placeholder photography.

The learning category contains `learn-react`, `learn-python` and `learn-csharp`. These are teaching materials created and delivered in Marius's courses, so keep them visually distinct from client-facing work and deployed portfolio sites.

### Contact

Replace the placeholder action in the form:

```html
action="https://formspree.io/f/REPLACE_WITH_FORM_ID"
```

with the verified Formspree endpoint. Keep named fields stable: `name`, `email`, `company`, `phone` and `message`. Test a real submission only after the endpoint is connected.

The phone number, email address, social URLs and any WhatsApp link must be supplied by Marius before adding them. Never commit guessed contact details.

## SEO foundation

The homepage includes:

- `lang="en"`
- descriptive title and meta description
- indexable robots meta tag
- canonical URL
- Open Graph and Twitter metadata without a fake image
- `WebSite` and `Person` JSON-LD
- one `h1` and logical `h2` sections
- semantic landmarks and crawlable anchor links
- `robots.txt`
- `sitemap.xml`

The current canonical URL is `https://marius93rm.github.io/`. If a custom domain is introduced, update the canonical, JSON-LD, Open Graph URL, `robots.txt` sitemap URL and `sitemap.xml` together. Search for the old URL before deploying:

```bash
rg -n "marius93rm\.github\.io" .
```

When Romanian or Italian translations are ready, add real localized pages first, then add `hreflang` links and their URLs to the sitemap. Do not add alternate-language tags for pages that do not exist.

Technical SEO cannot replace useful final copy. The next content pass should add a clear value proposition, service detail, real proof and location context without keyword stuffing.

## AI search visibility

The homepage keeps its important answers in crawlable, visible HTML and includes matching JSON-LD for the website, person, professional service and FAQ content. `robots.txt` explicitly allows `OAI-SearchBot`, following [OpenAI's crawler guidance](https://help.openai.com/en/articles/9237897-chatgpt-search), while the canonical URL and sitemap keep the public page easy to discover.

[`llms.txt`](llms.txt) is included as a small, experimental index of the site. It is not a ranking control: [Google's generative AI guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) says Search does not require or use special AI-readable files. Keep it concise and update it when the public offer changes.

## Local development

No package installation is required. Serve the repository over HTTP so relative paths and form behavior match deployment:

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080/>.

Opening `index.html` directly with `file://` is not the supported verification path.

## Verification checklist

Before each handoff:

- Confirm `git status` contains only intended changes.
- Test the page at 360, 768, 1024 and 1440 CSS pixels.
- Test the mobile navigation with keyboard and Escape.
- Test all links and section anchors.
- Test the teaching slider at desktop, tablet and mobile widths, including touch/trackpad scrolling and keyboard arrows.
- Test focus visibility and form labels.
- Test with `prefers-reduced-motion: reduce`.
- Test with JavaScript disabled.
- Run Lighthouse for Performance, Accessibility, Best Practices and SEO.
- Validate JSON-LD with Schema Markup Validator.
- Confirm no demo copy, gaming images, fake metrics or placeholder links remain in a release build.
- Confirm the footer links point to the current LinkedIn profile and contact section.

## Deployment

The repository is `marius93rm/marius93rm.github.io`, so the site can be served from GitHub Pages using the `main` branch root. No build artifact is required. Configure GitHub Pages in repository settings, then verify the deployed canonical URL and sitemap in Google Search Console.

## Third-party notices

See [`THIRD-PARTY-NOTICES.md`](THIRD-PARTY-NOTICES.md) for the NovaShift source, license details and the Manrope font license.
