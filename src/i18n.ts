import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import viTranslations from './locales/vi/translation.json';
import enTranslations from './locales/en/translation.json';
import krTranslations from './locales/kr/translation.json';
import cnTranslations from './locales/cn/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    vi: {
      translation: viTranslations,
    },
    kr: {
      translation: krTranslations,
    },
    cn: {
      translation: cnTranslations,
    },
  },
  lng: window.location.pathname.split('/')[1], // Set language based on URL
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
