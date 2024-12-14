import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
const resources = {
    en: {
        translation: {
            welcome: "Welcome to our application!",
            description: "This is an internationalized React app.",
        },
    },
    fr: {
        translation: {
            welcome: "Bienvenue dans notre application!",
            description: "Ceci est une application React internationalisée.",
        },
    },
};

i18n
    .use(LanguageDetector) // Automatically detects the user's language
    .use(initReactI18next) // Connects i18next with React
    .init({
        resources,
        fallbackLng: 'en', // Default language if the detected language is unavailable
        interpolation: {
            escapeValue: false, // React already escapes by default
        },
    });

export default i18n;
