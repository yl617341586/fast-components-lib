import lessToJs from 'less-vars-to-js';
import { readFileSync } from 'fs';
import { resolve } from 'path';
export default () => {
  const defaultThemePath = resolve(__dirname, '..', 'src', 'theme', 'default.less');
  const defaultLess = readFileSync(defaultThemePath, 'utf-8');
  return lessToJs(defaultLess, { stripPrefix: true, resolveVariables: false });
};
