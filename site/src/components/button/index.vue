<template>
  <button class="button" @click="e => emit('click', e)">
    <slot />
  </button>
</template>

<script setup lang="ts">
/*
 * @author: Lew
 * @e-mail: yl617341586@163.com
 * @date: 2022/07/13 23:52:13
 * @description: 按钮
 */
const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void
}>();

</script>

<style scoped lang="less">
.button {
    cursor: pointer;
}
</style>