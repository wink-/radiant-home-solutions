import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://radianthomesolutions.com/',
  // Hugo's generated public/ is still tracked in git and must remain untouched,
  // so Astro uses static/ (same assets Hugo copies: robots.txt + Sveltia admin).
  publicDir: './static',
  redirects: {
    // Legacy Hugo URL -> new Astro URL (keeps old links working).
    // Static build emits /areas-served/index.html, covering both slash forms.
    '/areas-served/': '/service-areas/',
  },
});
