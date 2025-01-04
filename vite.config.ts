import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'development' ? '/' : '/learn-react/',
    plugins: [react(), eslintPlugin()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    server: {
      open: 'index.html',
    },
  };
});
