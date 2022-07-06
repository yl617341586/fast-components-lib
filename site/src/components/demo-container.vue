<template>
  <article :id="href.substring(1)">
    <main>
      <slot />
    </main>
    <section>
      <h4>
        <a :href="href">  {{ title['zh-CN'] }}</a>
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
type DemoInfo = {
  'zh-CN': string;
  'en-US': string
}
defineProps<{
  title: DemoInfo;
  content: DemoInfo;
  code: string;
  href: string
}>();
</script>

<style scoped lang="less">
</style>