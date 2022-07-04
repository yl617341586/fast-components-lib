<template>
  <li class="anchor-link">
    <a class="anchor-link-title" :href="href">{{ title }}</a>
    <slot />
  </li>
</template>

<script setup lang="ts">
/*
 * @author: Lew
 * @e-mail: yl617341586@163.com
 * @date: 2022/07/04 23:30:56
 * @description: 锚点链接
 */
export interface AnchorLinkoption {
    title: string;
    href: string;
}
defineProps<AnchorLinkoption>();
</script>

<style scoped lang="less">
.anchor-link {
    padding-left: 16px;

    &-title {
        color: #000;
    }
}
</style>