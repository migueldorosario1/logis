import { defineConfig } from 'astro/config';

// LOGIS — portal estático trilíngue (PT/EN/ES), deploy no Vercel (projeto logis-magazine)
export default defineConfig({
  site: 'https://logis-magazine.vercel.app',
  trailingSlash: 'ignore',
});
