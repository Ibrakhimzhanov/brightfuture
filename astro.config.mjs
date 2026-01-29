import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://brightfuture-alpha.vercel.app',
  base: '/',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'uz',
    locales: ['uz', 'ru', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
