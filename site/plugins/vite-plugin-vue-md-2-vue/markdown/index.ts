import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';
import { extractNavPlugin } from './plugins';
export type MarkdownItRender = {
  render: (src: string, env?: any) => { html: string; data: Record<string, any> };
};
export default (): MarkdownItRender => {
  const md = new MarkdownIt();
  const originRender = md.render;
  const wrappedRender: MarkdownItRender['render'] = src => {
    (md as any)._data = {};
    const html = originRender.call(md, src);
    return {
      html,
      data: (md as any)._data,
    };
  };
  md.use(extractNavPlugin).use(anchor, {
    permalinkSymbol: '#',
    permalink: true,
    permalinkClass: 'anchor',
    permalinkBefore: true,
  });
  (md as any).render = wrappedRender;
  return md as any;
};
