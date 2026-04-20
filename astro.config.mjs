import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://guillermovalin.com',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
