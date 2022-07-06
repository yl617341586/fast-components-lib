<template>
  <ul class="anchor">
    <slot />
  </ul>
</template>

<script setup lang="ts">
/*
 * @author: Lew
 * @e-mail: yl617341586@163.com
 * @date: 2022/07/04 23:14:36
 * @description: 锚点组件
 */
// export interface Anchoroption {
//   title: string;
//   href: string;
//   children?: Array<Anchoroption>
// }
// defineProps<{
//   options: Array<Anchoroption>
// }>();
</script>
<style scoped lang="less">
.anchor {
  position: absolute;
  right: 0;
}
</style>