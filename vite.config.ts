import { fileURLToPath, URL } from 'node:url';

import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';

const { name: ProjectName } = require('./package.json');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), svgLoader()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'build/index.js'),
      name: ProjectName,
      fileName: (format) => `${ProjectName}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'vue/dist/vue.esm-bundler.js',
        },
      },
    },
  },
});
