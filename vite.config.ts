import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': `${path.resolve(__dirname, './src/app/')}`,
      '@pages': `${path.resolve(__dirname, './src/pages/')}`,
      '@features': `${path.resolve(__dirname, './src/features/')}`,
      '@entities': `${path.resolve(__dirname, './src/entities/')}`,

      '@api': `${path.resolve(__dirname, './src/shared/api/')}`,
      '@constants': `${path.resolve(__dirname, './src/shared/constants/')}`,
      '@helpers': `${path.resolve(__dirname, './src/shared/helpers/')}`,
      '@stores': `${path.resolve(__dirname, './src/shared/stores/')}`,
      '@swr': `${path.resolve(__dirname, './src/shared/swr/')}`,
      '@theme': `${path.resolve(__dirname, './src/shared/theme/')}`,
      '@types': `${path.resolve(__dirname, './src/shared/types/')}`,
      '@ui': `${path.resolve(__dirname, './src/shared/ui/')}`,
    },
  },
});
