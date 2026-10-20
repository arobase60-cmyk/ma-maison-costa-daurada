// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ma-maison-costa-daurada.pages.dev',
  integrations: [sitemap()],
});