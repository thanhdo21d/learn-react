import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HOME_PRODUCT_EN from "../locales/en/home.json";
import HOME_PRODUCT_VI from "../locales/vi/home.json";
import HEADER_PRODUCT_EN from "../locales/en/header.json";
import HEADER_PRODUCT_VI from "../locales/vi/header.json";
export const locals = {
  en: "English",
  vi: "Tiếng Việt",
};

const resources = {
  en: {
    home: HOME_PRODUCT_EN,
    header: HEADER_PRODUCT_EN,
  },
  vi: {
    home: HOME_PRODUCT_VI,
    header: HEADER_PRODUCT_VI,
  },
};

export const defaultNS = "home";

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  ns: ["home", "header"],
  fallbackLng: "vi",
  defaultNS,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
