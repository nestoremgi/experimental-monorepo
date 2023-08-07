import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/static";

export default defineConfig({
  outDir: '../../dist/packages/my-app',
  output:'static',
  adapter: vercel(),
});
