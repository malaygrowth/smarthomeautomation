# Infinita — website

Marketing site for Infinita, a smart home automation business in Jaipur:
smart switches, motorised curtains, room scenes, climate and environment
control, voice integration, and security/entry.

**Live:** https://malaygrowth.github.io/smarthomeautomation/

## Read this first

`docs/plan.html` is the research and design-direction document: market sizing,
buyer objections, the productized offer, the full site map, conversion
mechanics, the design research, and three visual directions. Open it in a
browser. Every decision in the code traces back to it.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the build
```

Astro, static output, no runtime server.

## Deployment

Every push to `main` builds and publishes to GitHub Pages via
`.github/workflows/deploy.yml`. Pages must be set to **Build and deployment →
Source → GitHub Actions** in repository settings for the deploy step to succeed.

Because Pages serves the site from `/smarthomeautomation/`, `astro.config.mjs`
sets `base` and **every internal link goes through `u()` in `src/lib/url.ts`**.
Write `href={u('/estimate/')}`, never `href="/estimate/"` — a raw absolute path
will 404 in production while looking fine in `astro dev`.

When a real domain arrives: set `site` to it, set `base: '/'`, update
`public/robots.txt`, and every link follows automatically.

The `@font-face` rules live in `src/layouts/Base.astro` rather than in
`global.css`, because CSS URLs are not rewritten for the base path.

## How it's put together

```
src/
  data/site.ts        brand, contact, packages, scene definitions
  data/services.ts    the six service pages, copy and objection answers
  data/pricing.ts     the estimator's price model
  data/projects.ts    case studies
  data/journal.ts     cost guides and comparisons
  layouts/Base.astro  head, header, footer, floating WhatsApp
  components/
    SceneDemo.astro   the interactive room
    Placeholder.astro loud marker for scaffolding content
  pages/
    index.astro            homepage
    estimate.astro         cost estimator
    contact.astro          WhatsApp / call / form
    how-it-works.astro     survey to handover, with days
    service-and-amc.astro  warranty and service plan
    for-designers.astro    the architect and builder channel
    privacy.astro          plain-language privacy
    404.astro
    sitemap.xml.ts         built from the data, never stale
    services/[slug].astro  six service pages
    projects/[slug].astro  case studies
    journal/[slug].astro   articles
    areas/[city].astro     one per service area
  styles/global.css   the Switchplate design system
public/fonts/         Oswald + Instrument Serif Italic, self-hosted
```

23 routes build in about a second.

**Content lives in `src/data`, not in templates.** Changing a price, a phone
number or a paragraph of service copy never means editing markup.

### Brand

Infinita's mark is an infinity path drawn as a single continuous circuit — the
name, and the product: a house wired to run without anybody thinking about it.
`public/logo.svg` is the full lockup with the wordmark's font embedded, so it
renders correctly anywhere. `public/mark.svg` is the mark alone, used in the
site header. It stays legible down to 16px.

### The design system — "Switchplate"

Light, architectural, precise. Warm plaster ground, brass hairlines, condensed
signage typography borrowed from the switchgear itself. It deliberately avoids
the near-black glassmorphic look every other site in this category uses — see
the design research section of the plan for why.

- **Display / labels** — Oswald, condensed uppercase, tracked
- **Body** — system grotesk stack
- **Accent voice** — Instrument Serif Italic, used for the one line that matters
- **Accent colour** — brass `#9A6420`, spent once per view
- **Secondary** — teal `#0F5D58` for "connected" signals and WhatsApp

The one dark surface is `--night`, used for the scene demo and the footer,
where a room at dusk genuinely belongs.

### The estimator

`src/pages/estimate.astro` answers the objection that blocks most purchases —
cost — before anyone has to ring you. The maths runs in the browser from
`src/data/pricing.ts` and the finished estimate is handed to WhatsApp as a
pre-written message, so there is no backend and nothing to maintain.

**Every rate in `pricing.ts` is a placeholder** derived from published market
benchmarks. Replace them all before launch.

### The scene demo

`src/components/SceneDemo.astro` is the differentiator: a visitor taps Morning
/ Evening / Movie / Away and the room responds — lights dim, curtains travel,
readouts update. Driven entirely by the `scenes` array in `src/data/site.ts`,
so scene names and values are content, not code.

`--curtain` is how far the curtains are **drawn back**: `0%` closed, `100%`
fully open. `--sky` is daylight outside, separate from `--lvl` (artificial
light) so a dark room at midday and a lit room at night both read correctly.

## Still to do

**Content that is indicative, not confirmed:**

- [ ] Prices — `src/data/pricing.ts` rates and the three package prices in `src/data/site.ts` are set against published market benchmarks, not against Infinita's own job costings. Confirm before spending money to drive traffic here.
- [ ] Case studies — the three in `src/data/projects.ts` are marked `sample: true` and render a visible "Sample" note. Replace with real installs and set `sample: false`.
- [ ] Photography — still the highest-value missing asset. Nothing on the site uses a photograph yet.
- [ ] `hello@infinita.in` is a placeholder address.

**Not started:**

- [ ] Contact form endpoint — submitting currently hands the details to WhatsApp, so no enquiry is lost
- [ ] The formal legal notice under the plain-language privacy page
- [ ] Emailed PDF of the estimate
- [ ] Analytics and call tracking
- [ ] Google Business Profile — for a service-area business this often out-performs the website for calls
- [ ] More journal articles — the two here are the highest-intent queries
