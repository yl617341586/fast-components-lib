<template>
  <Navigation />
  <Dropdown>
    <Button @click="click">
      {{ t('app-header-lang') }}
    </Button>
    <template #overlay>
      <Menu>
        <Menu.Item>中文</Menu.Item>
        <Menu.Item>English</Menu.Item>
      </Menu>
    </template>
  </Dropdown>
  <Switch :checked="checkedState" @change="handleChangeTheme" />
</template>

<script setup lang="ts">
/*
 * @author: Lew
 * @e-mail: yl617341586@163.com
 * @date: 2022/06/22 23:44:20
 * @description: 菜单栏
 */
import Navigation from './navigation.vue';
import { Switch, Dropdown, Button, Menu } from '@/components';
import { useI18n } from 'vue-i18n';
import { inject, ref } from 'vue';
const { t } = useI18n<i18nOptions>();
const setTheme = inject('theme', (theme: 'dark' | 'light') => theme);
const handleChangeTheme = (checked: boolean) => {
  checkedState.value = checked;
  setTheme(checked ? 'light' : 'dark');
  // location.href = `${location.protocol}//${location.hostname}`
};
const click = (e: MouseEvent) => {
  console.log(e);
};
const checkedState = ref<boolean>(localStorage.getItem('theme') !== 'dark');

</script>

<style scoped lang="less">
</style>