import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import aboutEn from "./locales/en/about.json";
import aboutPt from "./locales/pt/about.json";
import filesEn from "./locales/en/files.json";
import filesPt from "./locales/pt/files.json";
import journeyPt from "./locales/pt/journey.json";
import journeyEn from "./locales/en/journey.json";
import technologiesEn from "./locales/en/technologies.json";
import technologiesPt from "./locales/pt/technologies.json";
import contactMePt from "./locales/pt/contactMe.json";
import contactMeEn from "./locales/en/contactMe.json";
import projectsEn from "./locales/en/projects.json";
import projectsPt from "./locales/pt/projects.json";
import codeEn from "./locales/en/code.json";
import codePt from "./locales/pt/code.json";

i18n.use(initReactI18next).init({
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      about: aboutEn,
      files: filesEn,
      journey: journeyEn,
      technologies: technologiesEn,
      contactMe: contactMeEn,
      projects: projectsEn,
      code: codeEn,
    },
    pt: {
      about: aboutPt,
      files: filesPt,
      journey: journeyPt,
      technologies: technologiesPt,
      contactMe: contactMePt,
      projects: projectsPt,
      code: codePt,
    },
  },
});

export default i18n;
