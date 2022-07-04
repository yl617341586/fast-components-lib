import OriginAnchor from './anchor.vue';
import OriginAnchorLink from './anchor-link.vue';
OriginAnchor.link = OriginAnchorLink;
export default OriginAnchor as typeof OriginAnchor & {
  readonly link: typeof OriginAnchorLink;
};
