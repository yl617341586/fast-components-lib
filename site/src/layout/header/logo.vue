<template>
  <h1 class="logo">
    <a v-if="logo" href="/index">{{ logo }}</a>
    <a v-else href="/index">
      <slot name="logo" />
    </a>
  </h1>
</template>

<script setup lang="ts">
/*
 * @author: Lew
 * @e-mail: yl617341586@163.com
 * @date: 2022/06/16 22:56:16
 * @description: logo
 */
defineProps<{
  logo?: string
}>();
</script>

<style lang="less" scoped>
.logo {
  height: 64px;
  background-color: @background-color;
  width: 12%;
}

.logo a {
  color: @color;
  font-size: 18px;
  text-decoration: none;
  padding-left: 40px;
}
</style>