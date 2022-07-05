import type { AnchorInfo } from '../plugins/extract-nav-plugin';
export default (content: string, data: Record<string, any>, anchors: Array<AnchorInfo>) => {
  const RegTemplate = /(?<=<template>)([\s\S]*)(?=<\/template>)/g;
  const RegStyle = /<style.*>([\s\S]*)<\/style>/g;
  const template = `<template><article class="markdown">${
    content.match(RegTemplate)?.[0]
  }</article></template>`;
  return {
    template,
    style: content.match(RegStyle)?.[0],
    script: `<script>
    export default { data: ${JSON.stringify({
      html: {
        description: content.substring(0, content.indexOf('<h2 id="api"')),
        api: content.substring(content.indexOf('<h2 id="api"')),
      },
      title: data.title,
      anchors,
    })} }
    </script>`,
  };
};
