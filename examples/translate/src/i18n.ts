import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import detector from "i18next-browser-languagedetector";

i18n.use(Backend)
    .use(detector)
    .use(initReactI18next)
    .init({
        whitelist: ["en", "tr"],
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
        fallbackLng: ["en", "tr"],
        react: {
            useSuspense: false,
        },
    });

export default i18n;
