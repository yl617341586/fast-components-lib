<script setup lang="ts">
/*
 * @author: Lew
 * @e-mail: yl617341586@163.com
 * @date: 2022/06/22 23:48:45
 * @description: 菜单组件
 */
withDefaults(defineProps<{
    disabled?: boolean
}>(), { disabled: false });
</script>

<template>
  <ul>
    <slot />
  </ul>
</template>

<style scoped lang="less">
</style>