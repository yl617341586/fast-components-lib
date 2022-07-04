import { createApp } from 'vue';
import router from './router';
import i18n from './i18n/index';
import App from './App.vue';
import './theme/index.less';

createApp(App).use(i18n).use(router).mount('#app');
