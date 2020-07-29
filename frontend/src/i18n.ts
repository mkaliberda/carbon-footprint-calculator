import i18n from "i18next";
import XHR from "i18next-xhr-backend";
import EN from './locales/en.json';
// for
i18n
  .use(XHR)
  .init({

  resources: {
    en: {
      translations: EN
    },
  },

  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  interpolation: {
    escapeValue: false // not needed for react!!
  },

  react: {
    wait: true
  },

  // keySeparator: false, // we use content as keys
});

export default i18n;
