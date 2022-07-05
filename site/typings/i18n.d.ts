import type zhCN from '../src/i18n/zh-CN';

declare global {
  export type i18nOptions = {
    message: typeof zhCN;
  };
}
