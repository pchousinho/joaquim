
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://pchousinho.github.io',
  base: '/joaquim',
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx()],
});
