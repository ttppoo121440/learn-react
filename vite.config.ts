import path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import eslintPlugin from 'vite-plugin-eslint';

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const envWithProcessPrefix = Object.entries(env).reduce((prev, [key, val]) => {
    // 過濾掉無效鍵
    if (!/[()]/.test(key)) {
      return {
        ...prev,
        ['process.env.' + key]: `"${val}"`,
      };
    }
    return prev;
  }, {});
  return {
    base: mode === 'development' ? '/' : '/learn-react/',
    plugins: [
      react(),
      eslintPlugin(),
      EnvironmentPlugin({
        NODE_ENV: process.env.NODE_ENV || 'development',
      }),
    ],
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
