import createMarkdownRenderer from '../markdown';
export default (content: string, data: Record<string, any>, id: string) => {
  const md = createMarkdownRenderer();
  const { html, data: docData } = md.render(content);
  const RegStyle = /<style.*>([\s\S]*)<\/style>/g;
  const template = `<template><article class="markdown">${html}</article></template>`;
  const { isDemo, isZhCN } = envCreater(id);
  const pageData = {
    docData: {
      html: {
        description: html.substring(0, html.indexOf('<h2 id="api"')),
        api: html.substring(html.indexOf('<h2 id="api"')),
      },
      title: data.title,
      anchors: docData.anchors,
    },
  };
  const script = `<script>
  export default ${JSON.stringify(
    Object.assign(
      {},
      isDemo && pageData,
      !isDemo && isZhCN && { CN: pageData },
      !isDemo && !isZhCN && { US: pageData },
    ),
  )}
  </script>`;
  return {
    template,
    style: html.match(RegStyle)?.[0],
    script,
  };
};
const envCreater = (id: string): { isDemo: boolean; isZhCN: boolean } => ({
  isDemo: id.includes(`${process.cwd()}/components`.replaceAll('\\', '/')),
  isZhCN: id.includes('zh-CN'),
});
