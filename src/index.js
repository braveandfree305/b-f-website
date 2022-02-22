import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import { StrictMode } from "react";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import './index.css';
import App from './App';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
   // if you're using a language detector, do not define the lng option
   supportedLngs: ['en','sp'],
    fallbackLng: "en",
    detection:{
      order: ['cookie','htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookies'],
    },
    backend: {
      loadPath: '../public/locales/{{lng}}/translation.json',
    },
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
  
  
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Suspense fallback={(<div>Loading</div>)}>
  <StrictMode>
    <App />
  </StrictMode>
  </Suspense>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
