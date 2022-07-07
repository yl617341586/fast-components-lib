<script setup lang="ts">
import { Header, Anchor } from '@/components';
import { RouterView, useRoute } from 'vue-router';
import { computed, provide, ref, watch } from 'vue';
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
  CN?: { docData?: Data }
  US?: { docData?: Data }
}
const route = useRoute();
const demoAnchors = ref<Data['anchors']>([]);
const doc = computed(() => route.matched[route.matched.length - 1]?.components?.default as DemoComponents);
const anchors = computed(() => [...demoAnchors.value, doc.value?.CN?.docData?.anchors.find(({ title }) => title === 'API') ?? []] as Data['anchors']);
provide('anchors', (anchors: Data['anchors'][0]) => {
  if (!demoAnchors.value.some(({ href }) => href === anchors.href))
    demoAnchors.value.push(anchors);
});

watch(
  () => route.path,
  () => {
    console.log(doc.value);
    demoAnchors.value.length = 0;
  },
);
</script>

<template>
  <Header />
  <RouterView />
  <Anchor v-if="anchors.length">
    <Anchor.Link v-for="({ href, title }, index) in anchors" :key="index" :href="href" :title="title" />
  </Anchor>
</template>

<style scoped lang="less">
</style>
