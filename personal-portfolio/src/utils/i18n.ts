import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import aboutEn from "./locales/en/about.json";
import aboutPt from "./locales/pt/about.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      about: aboutEn,
    },
    pt: {
      about: aboutPt,
    },
  },
});

export default i18n;
