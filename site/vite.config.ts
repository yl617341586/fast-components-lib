import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import appendThemePlugin from './plugins/append-theme-plugin';
import vitePluginVueGenerateRouter from './plugins/vite-plugin-vue-generate-router';
import vitePluginVueMd2Vue from './plugins/vite-plugin-vue-md-2-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginVueGenerateRouter({
      mdPath: 'components/*/index.*.md',
      output: 'site/src/router/demo.ts',
      demoPath: '../../../components/**/demo/index.vue',
      eslintrcPath: '.eslintrc.js',
    }),
    vitePluginVueMd2Vue(),
    vue({ include: [/\.vue$/, /\.md$/] }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'base-components': resolve(__dirname, '..', 'components'),
      components: resolve(__dirname, 'src', 'components'),
      view: resolve(__dirname, 'src', 'view'),
      assets: resolve(__dirname, 'src', 'assets'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true;@import "${resolve(__dirname, 'src/theme/index.less')}";`,
        },
        additionalData: appendThemePlugin,
        javascriptEnabled: true,
      },
    },
  },
});
