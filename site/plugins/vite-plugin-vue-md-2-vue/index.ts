import matter from 'gray-matter';
import { generateVue } from './utils';
import type { Plugin } from 'vite';
export default (): Plugin => {
  return {
    name: 'md-2-vue',
    transform: (code, id) => {
      if (id.endsWith('.md')) {
        const { content, data } = matter(code);
        const { template, script, style } = generateVue(content, data, id);
        return {
          code: `${template ?? ''}${script ?? ''}${style ?? ''}`,
          map: null,
        };
      }
    },
  };
};
