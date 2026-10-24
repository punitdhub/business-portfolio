// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Deploy configuration.
 *
 * Currently served from GitHub Pages at punitdhub.github.io/business-portfolio.
 * When ready to switch to the custom domain fortiumgroup.co:
 *   1. In your registrar, add A records to GitHub Pages's four IPs
 *      (185.199.108.153, .109, .110, .111) and a CNAME `www` → punitdhub.github.io.
 *   2. Re-add public/CNAME containing `www.fortiumgroup.co`.
 *   3. Change `site` below to 'https://www.fortiumgroup.co' and remove `base`.
 *   4. In the repo's Settings → Pages, set the custom domain.
 */
export default defineConfig({
  site: 'https://punitdhub.github.io',
  base: '/business-portfolio',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
