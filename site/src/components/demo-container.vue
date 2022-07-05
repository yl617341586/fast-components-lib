<template>
  <article>
    <main>
      <slot />
    </main>
    <section>
      <h4>{{ title }}</h4>
      <p>{{ content }}</p>
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
defineProps<{
    title: string;
    content: string;
    code: string
}>();
</script>

<style scoped lang="less">
</style>