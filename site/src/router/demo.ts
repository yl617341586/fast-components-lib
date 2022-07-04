export default [
  {
    path: 'button',
    name: 'button',
    meta: { type: '通用', title: '按钮' },
    component: () => import('../../../components/button/demo/index.vue'),
  },
  {
    path: 'menu',
    name: 'menu',
    meta: { type: '通用', title: '菜单' },
    component: () => import('../../../components/menu/demo/index.vue'),
  },
];
