import matter from 'gray-matter';
export default (vue: string) => {
  const RegTemplate = /(?<=<template>)([\s\S]*)(?=<\/template>)/g;
  const RegDocs = /(?<=<docs>)([\s\S]*)(?=<\/docs>)/g;
  const RegStyle = /<style.*>([\s\S]*)<\/style>/g;
  const RegScript = /(?<=<script.*>)([\s\S]*)(?=<\/script>)/g;

  const { data } = matter(vue.match(RegDocs)?.[0] ?? '');
  console.log(vue.match(RegDocs)?.[0]);
  const template = `<template>
  <DemoContainer>
  ${vue.match(RegTemplate)?.[0]}
  </DemoContainer>
  </template>`;
  return {
    template,
    style: vue.match(RegStyle)?.[0],
    script: `<script setup lang="ts">
${vue.match(RegScript)?.[0]}
    </script>`,
  };
};
