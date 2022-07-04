import MarkdownIt from 'markdown-it';
import matter from 'gray-matter';
import { generateVue } from './utils';
import anchor from 'markdown-it-anchor';
import { extractNavPlugin } from './plugins';
import type { AnchorInfo } from './plugins/extract-nav-plugin';
import type { Plugin } from 'vite';
export default (): Plugin => {
  const md = new MarkdownIt();
  let anchors: Array<AnchorInfo> = [];
  md.use(md => {
    anchors = extractNavPlugin(md);
  }).use(anchor, {
    permalinkSymbol: '#',
    permalink: true,
    permalinkClass: 'anchor',
    permalinkBefore: true,
  });
  return {
    name: 'md-2-vue',
    transform: (code, id) => {
      if (id.endsWith('.md')) {
        const { content, data } = matter(code);
        const { template, script, style } = generateVue(md.render(content), data, anchors);
        return {
          code: `${template ?? ''}${script ?? ''}${style ?? ''}`,
          map: null,
        };
      }
    },
  };
};
