import globby from 'globby';
import { readFileSync, writeFileSync } from 'fs';
import matter from 'gray-matter';
import { ESLint } from 'eslint';
import { resolve } from 'path';
import type { Plugin } from 'vite';
type Option = {
  /**Markdown files path */
  mdPath: string;
  output: string;
  eslintrcPath?: string;
  demoPath: string;
};
const checkOptions = (options: Option) => {
  for (const key in options) {
    if (Object.prototype.hasOwnProperty.call(options, key)) {
      const option = options[key as keyof Option];
      if (!option && key !== 'eslintrcPath')
        return Promise.reject(
          new Error(
            '[vitePluginVueGenerateRouter]: lost required param: mdPath | output | routerPath',
          ),
        );
    }
  }
};
export default (options: Option): Plugin => {
  return {
    name: 'generate-router',
    enforce: 'pre',
    config: async () => {
      try {
        await checkOptions(options);
        const paths = await globby(options.mdPath);
        const components = paths.map(path =>
          Object.assign({ path: path.split('/')[1] }, matter(readFileSync(path, 'utf-8')).data),
        );
        const generateRouterStr = (
          str: TemplateStringsArray,
          components: Array<Record<any, string>>,
        ) =>
          `${str[0]}${components.map(
            ({ path, type, title }) => `
                {
                path: "${path}",
                name: "${path}",
                meta: ${JSON.stringify({ type, title })},
                component: () => import("${options.demoPath.replace('**', path)}"),
              }`,
          )}${str[1]}`;

        const router = generateRouterStr`export default [${components}]`;

        writeFileSync(options.output, router);
        if (options.eslintrcPath) {
          const eslint = new ESLint({
            fix: true,
            useEslintrc: false,
            baseConfig: require(resolve(process.cwd(), options.eslintrcPath)),
          });
          const results = await eslint.lintFiles(options.output);
          ESLint.outputFixes(results);
        }
      } catch (e) {
        throw Error((e as Error).message);
      }
    },
  };
};
