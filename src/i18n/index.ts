export { default as i18n } from './i18n-instance';
export { I18nProvider } from './I18nProvider';
// react-i18next의 useTranslation을 re-export하여 각 앱이 직접 의존성 없이 사용 가능
export { useTranslation } from 'react-i18next';
export type { TFunction } from 'i18next';
