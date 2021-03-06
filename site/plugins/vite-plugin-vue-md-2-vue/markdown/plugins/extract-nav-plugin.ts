import type MarkdownIt from 'markdown-it';
export type AnchorInfo = {
  title: string;
  href: string;
  level: number;
};
export default (md: MarkdownIt, marks = ['h2', 'h3']) => {
  md.renderer.rules.heading_open = (tokens, i, options, _env, self) => {
    const token = tokens[i];
    if (marks.includes(token.tag)) {
      const data: { anchors: Array<AnchorInfo> } = (md as any)._data ?? {};
      const title = tokens[i + 1].content;
      const id = token.attrs!.find(([name]) => name === 'id');
      const href = decodeURI(`#${id![1]}`);
      const level = Number(token.tag.match(/\d+/g)?.[0]);
      const anchors = data.anchors ?? (data.anchors = []);
      anchors.push({
        title,
        href,
        level,
      });
    }
    return self.renderToken(tokens, i, options);
  };
};
