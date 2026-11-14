import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://09labs.dev',
  integrations: [react()],
  output: 'server',       
  adapter: vercel(),      
  server: {
    port: 4324,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});