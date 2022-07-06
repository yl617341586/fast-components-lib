import OriginAnchor from './anchor.vue';
import OriginAnchorLink from './anchor-link.vue';
OriginAnchor.Link = OriginAnchorLink;
export default OriginAnchor as typeof OriginAnchor & {
  readonly Link: typeof OriginAnchorLink;
};
