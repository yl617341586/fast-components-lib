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
      component: () => import('../views/components.vue'),
      children: [
        {
          path: 'overview',
          name: 'overview',
          component: () => import('../views/components-overview.vue'),
        },
        ...demo,
      ],
    },
    {
      path: '/docs',
      name: 'docs',
      component: () => import('../views/docs.vue'),
      redirect: { name: 'introduce' },
      children: [
        {
          name: 'introduce',
          path: 'introduce',
          component: () => import('@/docs/introduce.zh-CN.md'),
        },
      ],
    },
    { path: '/index', redirect: { name: 'docs' } },
  ],
});
