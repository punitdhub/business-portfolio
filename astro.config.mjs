// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Deploy configuration.
 *
 * Served at https://www.fortiumgroup.co via GitHub Pages with a custom
 * domain set in the repo's Settings → Pages. Because deploys run through
 * the GitHub Actions workflow (upload-pages-artifact + deploy-pages),
 * a public/CNAME file is not needed — GitHub stores the custom domain
 * directly in Pages settings. Do not add one here.
 */
export default defineConfig({
  site: 'https://www.fortiumgroup.co',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
