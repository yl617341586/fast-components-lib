import demo from './demo';
import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: { name: 'docs' } },
    {
      path: '/components',
      name: 'components',
      redirect: { name: 'overview' },
      component: () => import('../view/components.vue'),
      children: [
        {
          path: 'overview',
          name: 'overview',
          component: () => import('../view/components-overview.vue'),
        },
        ...demo,
      ],
    },
    {
      path: '/docs',
      name: 'docs',
      component: () => import('../view/docs.vue'),
      redirect: { name: 'introduce' },
      children: [
        {
          name: 'introduce',
          path: 'introduce',
          component: () => import('@/docs/introduce.zh-CN.md'),
        },
      ],
    },
  ],
});
