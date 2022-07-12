import matter from 'gray-matter';
export default (vue: string, path: string) => {
  const RegTemplate = /(?<=<template>)([\s\S]*)(?=<\/template>)/g;
  const RegDocs = /(?<=<docs>)([\s\S]*)(?=<\/docs>)/g;
  const RegStyle = /<style.*>([\s\S]*)<\/style>/g;
  const RegScript = /(?<=<script.*>)([\s\S]*)(?=<\/script>)/g;
  const code = /<template.*>([\s\S]*)<\/template>/g;

  const { data } = matter(vue.match(RegDocs)?.[0].trim() ?? '');
  const href = `#${path
    .substring(process.cwd().length + 1, path.indexOf('.'))
    .replaceAll('/', '-')}`;
  const style = vue.match(RegStyle)?.[0].trim();
  const script = `<script setup lang="ts">
  ${vue.match(RegScript)?.[0].trim()}
import DemoContainer from '@/layout/demo-container.vue';
</script>`;
  const title = JSON.stringify(data.title)?.replaceAll('"', "'");
  const content = JSON.stringify(data.content)?.replaceAll('"', "'");
  const template = `<template>
  <DemoContainer :title="${title}" :content="${content}" code="${vue
    .match(code)?.[0]
    .trim()}" href="${href}" >
  ${vue.match(RegTemplate)?.[0].trim()}
  </DemoContainer>
</template>`;
  return {
    template,
    style,
    script,
  };
};
