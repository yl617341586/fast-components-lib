<template>
  <slot />
  <Teleport :to="div">
    <slot name="overlay" />
  </Teleport>
</template>

<script setup lang="ts">
import { useSlots, Teleport } from 'vue';

/*
 * @author: Lew
 * @e-mail: yl617341586@163.com
 * @date: 2022/07/13 23:24:29
 * @description: 下拉菜单
 */
const slots = useSlots();
const div = document.createElement('div');
div.style.position = 'absolute';
div.style.top = '0';
div.style.left = '0';
div.style.width = '100%';
document.querySelector('#app')?.append(div);
</script>

<style scoped lang="less">
</style>