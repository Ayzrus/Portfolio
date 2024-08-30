"use client";
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import ptTranslations from '../Locales/pt.json';
import enTranslations from '../Locales/en.json';
import { TranslationType } from "../Types/translation";

type LanguageContextType = {
  language: string;
  translations: TranslationType;
  changeLanguage: (newLanguage: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState("pt");
  const [translations, setTranslations] = useState<TranslationType>(ptTranslations);

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    const loadTranslations = () => {
      switch (language) {
        case 'en':
          setTranslations(enTranslations);
          break;
        case 'pt':
        default:
          setTranslations(ptTranslations);
          break;
      }
    };

    loadTranslations();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
