<template>
  <Navigation />
  <Button @click="() => click('dark')">
    {{ t('app-header-lang') }}
  </Button>
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
import { useI18n } from 'vue-i18n';
const { t } = useI18n<i18nOptions>();
const handleChangeLange = () => {
  console.log(location);
  // location.href = `${location.protocol}//${location.hostname}`
};
const click = (type: string) => {
  document.getElementsByTagName('html')[0].style.colorScheme = type;
  document.getElementsByTagName('body')[0].setAttribute('data-theme', type);
};
</script>

<style scoped lang="less">

</style>