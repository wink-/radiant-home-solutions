import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://radianthomesolutions.com/',
  redirects: {
    // Legacy Hugo URLs -> new Astro URLs (keeps old links working)
    '/areas-served': '/service-areas/',
    '/areas-served/': '/service-areas/',
  },
});
