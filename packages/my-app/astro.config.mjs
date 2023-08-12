import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  outDir:'./build/server',
  output:'server',
  adapter: vercel({
    
  }),
});
