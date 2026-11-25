/**
 * Build an internal URL that survives being served from a sub-path.
 *
 * GitHub Pages serves a project site at /<repo>/, so `site/` and `base` are
 * set at build time and every absolute link and asset reference has to carry
 * that prefix. Astro does not rewrite absolute URLs written by hand, so use
 * this helper instead of a leading slash.
 *
 *   url('/images/advocate.jpg')  ->  '/Lawyer-near-by/images/advocate.jpg'
 *   url('/')                     ->  '/Lawyer-near-by/'
 *
 * With no base configured (local dev, Netlify, Vercel) it returns the path
 * unchanged, so the same code works in both places.
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const rest = path.replace(/^\/+/, '');
  return `${base}/${rest}`;
}
