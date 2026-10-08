// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to foliumgroup.co via GitHub Pages (custom domain, see public/CNAME).
export default defineConfig({
  site: 'https://www.foliumgroup.co',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
