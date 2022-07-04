<template>
  <Menu>
    <Item>
      <RouterLink to="/docs">
        {{ t('app-header-menu-doc') }}
      </RouterLink>
    </Item>
    <Item>
      <RouterLink to="/components">
        {{ t('app-header-menu-components') }}
      </RouterLink>
    </Item>
  </Menu>
</template>

<script setup lang="ts">
/*
 * @author: Lew
 * @e-mail: yl617341586@163.com
 * @date: 2022/06/22 23:43:50
 * @description: 导航菜单
 */
import { Menu } from '../../../../components';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';
const { Item } = Menu;
const { t } = useI18n<i18nOptions>();
</script>

<style scoped lang="less">
</style>