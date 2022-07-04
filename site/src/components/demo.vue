<template>
  <article>
    <h1>{{ doc.CN?.data?.title }}</h1>
    {{ doc.CN?.data?.anchors }}
    <section class="markdown" v-html="doc.CN?.data?.html.description" />
    <section class="markdown">
      <h2>{{ t('app.component.examples') }}</h2>
      <slot />
    </section>
    <section class="markdown" v-html="doc.CN?.data?.html.api" />
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Anchor } from '@/components';
type Data = {
  html: {
    description: string;
    api: string
  };
  title: string;
  anchors: {
    title: string;
    href: string;
    level: number;
  };
}
type DemoComponents = {
  CN?: { data?: Data }
  US?: { data?: Data }
}
const { path, matched } = useRoute();
const { t } = useI18n<i18nOptions>();
const doc = computed(() => matched[matched.length - 1]?.components?.default as DemoComponents);
</script>

<style scoped lang="ts">

</style>