<template>
  <header class="header">
    <Logo>
      <template #logo>
        <img class="logo-img" src="@/assets/logo.png" alt="logo">
        lbg-design
      </template>
    </Logo>
    <SearchInput />
    <Menu />
  </header>
</template>

<script setup lang="ts">
/*
 * @author: Lew
 * @e-mail: yl617341586@163.com
 * @date: 2022/06/16 21:14:29
 * @description: 头部导航
 */
import Logo from './logo.vue';
import SearchInput from './search.vue';
import Menu from './menu.vue';
</script>

<style scoped lang="less">
.header {
  box-shadow: 0 2px 8px #f0f1f2;
  display: flex;
}

.logo-img {
  width: 32px;
  height: 32px;
  margin-right: 16px;
  vertical-align: middle;
}
</style>