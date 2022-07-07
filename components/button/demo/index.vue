<template>
  <Demo>
    <Disabled />
    <Danger />
  </Demo>
</template>

<script lang="ts">
import CN from '../index.zh-CN.md';
export default { CN };
</script>

<script setup lang="ts">
import Demo from '@/components/demo.vue';
import Disabled from './disabled.vue';
import Danger from './danger.vue';
</script>