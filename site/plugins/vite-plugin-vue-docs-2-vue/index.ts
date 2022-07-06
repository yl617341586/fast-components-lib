import type { Plugin } from 'vite';
import { generateVue } from './utils';
export default (): Plugin => {
  return {
    name: 'docs-2-vue',
    transform: (code, id) => {
      if (id.endsWith('.vue') && id.includes('/demo/') && !id.includes('index')) {
        const { template, script, style } = generateVue(code, id);
        return { code: `${template ?? ''}${script ?? ''}${style ?? ''}`, map: null };
      }
    },
  };
};
