// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Static output — the whole site is prerendered. See docs/plan.html for why.
 *
 * Deployed to GitHub Pages, which serves this repo from a subpath. When a real
 * domain arrives: set `site` to it, set `base` to '/', and every internal link
 * follows automatically via the u() helper in src/lib/url.ts.
 */
export default defineConfig({
  site: 'https://malaygrowth.github.io',
  base: '/smarthomeautomation',
  output: 'static',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'auto' },
});
