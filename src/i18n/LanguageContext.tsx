import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Locale } from './translations';
import { siteConfig } from '@/config/site';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    // Check session storage first
    const stored = sessionStorage.getItem('locale');
    if (stored && (stored === 'en' || stored === 'pt')) {
      return stored as Locale;
    }
    
    // Detect from browser locale
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('pt')) {
      return 'pt';
    }
    
    return siteConfig.defaultLocale as Locale;
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    sessionStorage.setItem('locale', newLocale);
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = {
    locale,
    setLocale,
    t: translations[locale],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
