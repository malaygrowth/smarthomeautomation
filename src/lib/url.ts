/**
 * Prefixes an internal path with the site's base.
 *
 * GitHub Pages serves this repo from /smarthomeautomation/, so every internal
 * link needs that prefix. Once a real domain is in place, set `base` back to
 * '/' in astro.config.mjs and every link here follows automatically — nothing
 * else has to change.
 *
 *   u('/estimate/')  ->  '/smarthomeautomation/estimate/'   (Pages)
 *                    ->  '/estimate/'                       (own domain)
 */
export function u(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}` || '/';
}
