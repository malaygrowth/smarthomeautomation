import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { articles } from '../data/journal';
import { site } from '../data/site';

const citySlug = (c: string) =>
  c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Built from the data, so a new service or article is never missing from it. */
export const GET: APIRoute = ({ site: deployedSite }) => {
  // Named to avoid shadowing the imported `site` data below.
  // deployedSite gives the origin; BASE_URL is the subpath Pages serves us from.
  const origin = (deployedSite ?? new URL('https://example.com')).origin;
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

  const paths = [
    '/',
    '/services/',
    ...services.map((s) => `/services/${s.slug}/`),
    '/projects/',
    ...projects.map((p) => `/projects/${p.slug}/`),
    '/journal/',
    ...articles.map((a) => `/journal/${a.slug}/`),
    ...site.cities.map((c) => `/areas/${citySlug(c)}/`),
    '/estimate/',
    '/how-it-works/',
    '/service-and-amc/',
    '/for-designers/',
    '/contact/',
    '/privacy/',
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${origin}${base}${p}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
