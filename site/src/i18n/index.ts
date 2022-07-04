import { createI18n } from 'vue-i18n';
import zhCN from './zh-CN';
import enUS from './en-US';
export default createI18n<[i18nMessageSchema], 'zh-CN' | 'en-US'>({
  locale: 'zh-CN',
  allowComposition: true,
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN,
  },
});
