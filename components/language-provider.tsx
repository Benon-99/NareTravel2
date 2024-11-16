"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/use-language';

const LanguageContext = createContext<{
  isLoaded: boolean;
}>({
  isLoaded: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { setLanguage } = useLanguage();

  useEffect(() => {
    // Set language based on browser preference
    const browserLang = window.navigator.language.toLowerCase();
    if (browserLang.includes('hy')) {
      setLanguage('hy');
    } else if (browserLang.includes('ru')) {
      setLanguage('ru');
    } else {
      setLanguage('en');
    }
    setIsLoaded(true);
  }, [setLanguage]);

  return (
    <LanguageContext.Provider value={{ isLoaded }}>
      {isLoaded ? children : null}
    </LanguageContext.Provider>
  );
}