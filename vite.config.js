// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['i18next', 'react-i18next']
  },
  build: {
    rollupOptions: {
      external: ['@mui/material/Pagination'],
    },
  },
});
