<template>
  <article>
    <h1>{{ doc.CN?.data?.title }}</h1>
    <Anchor>
      <Anchor.Link v-for="({href,title},index) in anchors" :key="index" :href="href" :title="title" />
    </Anchor>
    <section class="markdown" v-html="doc.CN?.data?.html.description" />
    <section class="markdown">
      <h2>{{ t('app.component.examples') }}</h2>
      <slot />
    </section>
    <section class="markdown" v-html="doc.CN?.data?.html.api" />
  </article>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Anchor } from '@/components';
import { type } from 'os';
type Data = {
  html: {
    description: string;
    api: string
  };
  title: string;
  anchors: Array<{
    title: string;
    href: string;
    level: number;
  }>;
}
type DemoComponents = {
  CN?: { data?: Data }
  US?: { data?: Data }
}
const slots = useSlots();
const { path, matched } = useRoute();
const { t } = useI18n<i18nOptions>();
const doc = computed(() => matched[matched.length - 1]?.components?.default as DemoComponents);
const anchors = computed(() => [...slots.default?.().map(({ type }) => {
  const { href, title } = (type as any).anchors;
  return { title: title['CN'], href, level: 3 };
}) ?? [], doc.value.CN?.data?.anchors[doc.value.CN?.data?.anchors.length - 1]] as Data['anchors']);
</script>

<style scoped lang="ts">

</style>