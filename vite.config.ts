import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // ⚠️ GitHub Pages ke liye base repo name hota hai
  // Repo: mashalstudios.github.io
  base: '/mashalstudios.github.io/',

  plugins: [react()],

  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    emptyOutDir: true,
  },
});