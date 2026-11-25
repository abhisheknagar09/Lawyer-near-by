# Lawyer Near By

Marketing homepage for a legal practice, built with [Astro](https://astro.build).
Static output, no runtime framework, no backend.

## Commands

| Command           | Does                                  |
| ----------------- | ------------------------------------- |
| `npm install`     | Install dependencies                  |
| `npm run dev`     | Dev server at `http://localhost:4400` |
| `npm run build`   | Static build into `dist/`             |
| `npm run preview` | Serve the built output locally        |

## Structure

```
src/
  data/site.ts            all page copy (nav, services, cases, FAQs, …)
  styles/global.css       design tokens + shared atoms (.btn, .eyebrow, .panel)
  layouts/BaseLayout.astro
  components/
    Icon.astro            inline SVG icon set, strokes inherit currentColor
    Header.astro          nav + mobile sheet
    Hero.astro            photo hero + green stats band
    About.astro
    Services.astro        bento grid, first practice area runs wide in green
    Consultation.astro    ← the ₹50 / 30 minutes section
    Cases.astro
    Process.astro         green panel, four steps
    Testimonials.astro
    Faq.astro             native <details> accordion
    Contact.astro         #contact — where "Explore Consultation" lands
    Footer.astro
    SmoothScroll.astro    eased wheel scrolling + gliding in-page links
  pages/index.astro       assembles the homepage
public/images/            photography and cut-out artwork
```

## Design identity — "Open Counsel"

Deep forest green and warm sand on cream, with a lime highlight. Rounded
geometric forms, Figtree for headings and UI, Inter for running text.
Tokenised in `src/styles/global.css` — change a token there and it propagates.

| Token             | Value     | Used for                            |
| ----------------- | --------- | ----------------------------------- |
| `--c-page`        | `#f7f4ee` | page background                     |
| `--c-fir`         | `#0e3b2e` | panels, buttons, icon tiles         |
| `--c-fir-deep`    | `#09271e` | text on lime                        |
| `--c-sand`        | `#ece5d7` | the consultation panel, icon chips  |
| `--c-lime`        | `#c7f05f` | accent, CTAs on green, marker swipe |
| `--c-ink`         | `#12201b` | headings                            |
| `--c-ink-soft`    | `#4d6158` | body copy                           |

Two helper classes carry the look: `.mark` draws the lime marker swipe under a
highlighted phrase, and `.panel` is the deep-green rounded block.

## The consultation section

`src/components/Consultation.astro` presents the **₹50 for 30 minutes** offer as
a sand panel: copy and the price on the left, an "included" card on the right.

**This section is presentation only, by design.** It contains no plan, price or
subscription identifiers, no checkout or booking flow, no payment gateway, and
no API calls. The "Explore Consultation" CTA is an in-page anchor to
`#contact`. Keep it that way unless a real booking flow is deliberately added.

Editing the offer: the four features are the `features` array at the top of the
component; the amount and duration are literals in the `.price` block.

## Images

`public/images/` holds the artwork. The three statue files were supplied as
JPEGs with a transparency checkerboard baked into the pixels; the backgrounds
were keyed out, so they are now PNGs with real alpha and can sit on any colour.

| File                 | Used by                    |
| -------------------- | -------------------------- |
| `advocate.jpg`       | hero photo card            |
| `consultation.jpg`   | About section              |
| `chambers.jpg`       | `/variations/chambers`     |
| `justice-mono.webp`  | `/variations/reveal`, made from `justice-bronze.png` (mirrored, black and white, cut-out repaired) |
| `justice-bronze.png` | unused — alternate artwork |
| `justice-stone.png`  | unused — alternate artwork |
| `justice-steel.png`  | unused — alternate artwork |

The statues are currently unused. They were tried as low-opacity texture in the
consultation panel and read as a smudge behind the copy at every width — they
need real space and a layout built around them, not a background slot.

## Motion studies — `/variations`

Three animated variations of the homepage live under `src/pages/variations/`,
indexed at `/variations/`. They share `src/styles/motion.css` and
`src/layouts/VariationLayout.astro`, and each is marked `noindex`.

| Route                    | Motion                                                            |
| ------------------------ | ----------------------------------------------------------------- |
| `/variations/reveal`     | Masked headline, staggered scroll reveals, parallax figure, ticker |
| `/variations/spotlight`  | Cursor-lit dark hero, counters, cards and buttons that lean        |
| `/variations/chambers`   | Masked headline, scroll reveals, a 30 minute ruler that fills      |

Rules the motion layer keeps to:

- Nothing is required to read the page. With JavaScript off every animated
  element renders visible; `has-motion` is only added by an inline head script.
- `prefers-reduced-motion: reduce` disables every transition, the marquee and the
  float, and counters jump to their final value.
- Items inside a horizontal scroller are never revealed on viewport
  intersection — they would never intersect, and would stay invisible.
- The statue artwork is used here at full size, which is what it needed.

Two variations have their own palette. Each passes `theme` to `VariationLayout`
and sets its tokens on `body.theme-…` inside the page, so the switcher bar
follows and no other page changes:

- `reveal` (`theme="mono"`): a black and silver hero, navy and blue below it,
  set in Inter.
  It still uses the shared Services, Consultation, Process, Testimonials,
  Contact and Footer sections, recoloured by redefining their tokens.
- `chambers` (`theme="navy"`): navy, white and pale blue, square corners,
  Poppins and Manrope.

## Smooth scrolling

`src/components/SmoothScroll.astro` runs on every page through the two layouts.
It uses [Lenis](https://github.com/darkroomengineering/lenis), pinned in
`package.json`. Touch screens keep native momentum, `prefers-reduced-motion`
turns it off, and without JavaScript the page scrolls normally. `lerp` sets how
long the page glides: lower is longer.

## Deploying

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub
Pages on every push to `main`.

**One setting is needed before the first run:** in the repository, go to
Settings -> Pages and set **Source** to **GitHub Actions**. Without it the
workflow builds and then fails at the deploy step.

The site then serves from `https://<owner>.github.io/<repo>/`.

Because a project site lives under a sub-path, `astro.config.mjs` reads two
variables that the workflow supplies from `actions/configure-pages`:

| Variable           | Local / Netlify / Vercel | GitHub Pages     |
| ------------------ | ------------------------ | ---------------- |
| `PUBLIC_SITE_URL`  | unset                    | the Pages origin |
| `PUBLIC_BASE_PATH` | unset, so `/`            | `/<repo>`        |

Astro does not rewrite hand-written absolute URLs, so **every internal link
and asset path must go through `url()` from `src/lib/url.ts`** rather than
starting with a plain `/`. With no base set it returns the path unchanged, so
the same code works at a domain root and under a sub-path.

To reproduce a Pages build locally:

```sh
PUBLIC_BASE_PATH=/Lawyer-near-by npm run build
```

## Before launch

- **The advocate photos** (`advocate.jpg`, `chambers.jpg`) are presented as members of the firm.
  If either is stock or generated imagery rather than a real advocate, replace it —
  showing it as your team would mislead clients.
- **Content in `src/data/site.ts`** — phone, email, address, Bar Council
  registration number, testimonials and the case list — is sample copy.
- The two unused statue files ship in `public/` and will deploy; delete them if
  you do not plan to use them.
- Pinned to Astro 5.x, which is what this was built and verified against.
  Astro 7 is available; `npx @astrojs/upgrade` if you want it, then re-test.
