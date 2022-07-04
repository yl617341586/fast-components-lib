import lessToJs from 'less-vars-to-js';
import { readFileSync } from 'fs';
import { resolve } from 'path';
export default () => {
  const darkThemePath = resolve(__dirname, '..', 'src', 'theme', 'dark.less');
  const darkLess = readFileSync(darkThemePath, 'utf-8');
  return lessToJs(darkLess, { stripPrefix: true, resolveVariables: false });
};
