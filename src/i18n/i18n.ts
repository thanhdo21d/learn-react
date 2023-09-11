import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const locals = {
  en: "English",
  vi: "Tiếng Việt",
};

const resources = {
  en: {
    translation: {
      //shopee 9/9 sale lớn mua ngay
      "Shope Sale": "shopee 9/9 big sale buy now",
      "Shope Cart": "Shope Cart",
      "Add TO Cart": "Add TO Cart",
    },
  },
  vi: {
    translation: {
      //shopee 9/9 sale lớn mua ngay
      "Shope Sale": "shopee 9/9 sale lớn mua ngay",
      "Shope Cart": "Giỏ Hàng",
      "Add TO Cart": "Thêm Sản Phẩm",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
