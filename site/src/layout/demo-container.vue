<template>
  <article :id="href.substring(1)">
    <main>
      <slot />
    </main>
    <section>
      <h4>
        <a :href="href"> {{ title['zh-CN'] }}</a>
      </h4>
      <p>{{ content['zh-CN'] }}</p>
    </section>
    <footer>
      <pre><code>{{ code }}</code></pre>
    </footer>
  </article>
</template>

<script setup lang="ts">
/*
 * @author: Lew
 * @e-mail: yl617341586@163.com
 * @date: 2022/07/05 23:37:48
 * @description: 单个demo的容器，通过vite plugin注入到demo的源码中
 */
import { inject, onMounted } from 'vue';
type DemoInfo = {
  'zh-CN': string;
  'en-US': string
}

const props = defineProps<{
  title: DemoInfo;
  content: DemoInfo;
  code: string;
  href: string
}>();
const appendAnchors = inject('anchors', (anchors: { title: string; href: string; level: 3 }) => anchors);
onMounted(() => {
  appendAnchors({
    title: props.title['zh-CN'],
    href: props.href,
    level: 3,
  });
});
</script>

<style scoped lang="less">
</style>