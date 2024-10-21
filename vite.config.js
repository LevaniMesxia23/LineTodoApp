// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@clerk/clerk-react', 'i18next', 'react-i18next', 'react-router-dom']
    }
  },
  optimizeDeps: {
    include: ['i18next', 'react-i18next']
  }
});
