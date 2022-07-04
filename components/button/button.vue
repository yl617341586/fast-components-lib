<script setup lang="ts">
/*
 * @author: Lew
 * @e-mail: yl617341586@163.com
 * @date: 2022/06/14 23:00:03
 * @description: Button组件
 */
withDefaults(defineProps<{
    disabled?: boolean
}>(), { disabled: false });
</script>

<template>
  <button>
    <slot />
  </button>
</template>

<style scoped lang="less">
</style>