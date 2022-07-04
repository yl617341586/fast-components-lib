import OriginMenu from './menu.vue';
import OriginItem from './item.vue';
OriginMenu.Item = OriginItem;
export default OriginMenu as typeof OriginMenu & {
  readonly Item: typeof OriginItem;
};
