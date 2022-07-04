import less from 'less';
import darkVar from '../scripts/generate-dark-var';
import defaultVar from '../scripts/generate-default-var';
export default async (content: string, filename: string) => {
  const options = {
    javascriptEnabled: true,
    modifyVars: {
      ...defaultVar(),
      ...darkVar(),
    },
    relativeUrls: true,
    filename,
  };
  const { css } = await less.render(content, options);
  const theme = `
  [data-theme=dark] {
    ${css}
  }`;
  return content + theme;
};
