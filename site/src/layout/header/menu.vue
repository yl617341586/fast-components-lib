<template>
  <Navigation />
  <!-- <Button @click="() => click('dark')">
    {{ t('app-header-lang') }}
  </Button> -->
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
import { Button } from '../../../../components';
import { Switch } from '@/components';
import { useI18n } from 'vue-i18n';
import { inject, ref } from 'vue';
const { t } = useI18n<i18nOptions>();
const setTheme = inject('theme', (theme: 'dark' | 'light') => theme);
const handleChangeTheme = (checked: boolean) => {
  checkedState.value = checked;
  setTheme(checked ? 'light' : 'dark');
  // location.href = `${location.protocol}//${location.hostname}`
};

const checkedState = ref<boolean>(localStorage.getItem('theme') !== 'dark');

</script>

<style scoped lang="less">
</style>