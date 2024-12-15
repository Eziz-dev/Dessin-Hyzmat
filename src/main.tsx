import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import global_en from "./locales/en/global.json";
import global_ru from "./locales/ru/global.json";
import global_tm from "./locales/tm/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: "en",
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
);
