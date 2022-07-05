import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import appendThemePlugin from './plugins/append-theme-plugin';
import vitePluginVueGenerateRouter from './plugins/vite-plugin-vue-generate-router';
import vitePluginVueMd2Vue from './plugins/vite-plugin-vue-md-2-vue';
import vitePluginVueDocs2Vue from './plugins/vite-plugin-vue-docs-2-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginVueGenerateRouter({
      mdPath: 'components/*/index.*.md',
      output: 'site/src/router/demo.ts',
      demoPath: '../../../components/**/demo/index.vue',
      eslintrcPath: '.eslintrc.js',
    }),
    vitePluginVueDocs2Vue(),
    vitePluginVueMd2Vue(),
    vue({ include: [/\.vue$/, /\.md$/] }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
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
