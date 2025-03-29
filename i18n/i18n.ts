import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '../locales/en/common.json';
import enMainPage from '../locales/en/mainPage.json';
import koCommon from '../locales/ko/common.json';
import koMainPage from '../locales/ko/mainPage.json';

const resources = {
  en: {
    common: enCommon,
    mainPage: enMainPage,
  },
  ko: {
    common: koCommon,
    mainPage: koMainPage,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
  fallbackLng: 'en',
  ns: ['common', 'mainPage'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
