import { defineConfig, loadEnv } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      return {
        ...prev,
        ['process.env.' + key]: `"${val}"`,
      };
    },
    {},
  );
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
    define: envWithProcessPrefix,
  };
});
