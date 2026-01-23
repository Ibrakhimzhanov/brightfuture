import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ibrakhimzhanov.github.io',
  base: '/brightfuture/',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'uz',
    locales: ['uz', 'ru', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
