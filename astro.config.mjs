// @ts-check
import { defineConfig } from 'astro/config';

/**
 * GitHub Pages serves a project site from /<repo>/, so the deploy workflow
 * sets these two variables. Locally, and on hosts that serve from the domain
 * root (Netlify, Vercel), they are unset and the site builds at `/`.
 */
const site = process.env.PUBLIC_SITE_URL || 'https://lawyernearby.example';
const base = process.env.PUBLIC_BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  // Not Astro's default 4321: another Astro project running with `--host` can
  // hold that port on IPv4 while this one takes it on IPv6, and `localhost` then
  // sends that project's requests here ("No cached compile metadata found").
  server: { port: 4400 },
  devToolbar: { enabled: false },
});
