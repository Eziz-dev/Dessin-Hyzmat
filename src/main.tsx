import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import global_en from "./locales/en/global.json";
import global_ru from "./locales/ru/global.json";
import global_tm from "./locales/tm/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import Cookies from "js-cookie";

const savedLanguage = Cookies.get("language") || "en";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: savedLanguage,
  resources: {
    en: {
      global: global_en,
    },
    ru: {
      global: global_ru,
    },
    tm: {
      global: global_tm,
    },
  },
});

i18next.on("languageChanged", (lng) => {
  Cookies.set("language", lng, { expires: 365 }); // Save language in a cookie for 1 year
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
);
