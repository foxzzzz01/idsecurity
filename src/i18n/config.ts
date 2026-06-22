import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import translationRU from './ru.json';
import translationUZ from './uz.json';


const resources = {
  ru: {
    translation: translationRU,
  },
  uz: {
    translation: translationUZ,
  },
};

i18n

  .use(initReactI18next)

  .init({
    resources,
    lng: 'ru', 
    fallbackLng: 'ru', 
    
    interpolation: {
      escapeValue: false, 
    },
    
    
  });

export default i18n;