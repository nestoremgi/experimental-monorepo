import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  outDir: '../../dist/packages/my-app',
  output:'server',
  adapter: vercel(),
});
