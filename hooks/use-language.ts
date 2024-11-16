"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { languages, translations } from '@/lib/translations';

type LanguageStore = {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  getCurrentLanguage: () => string;
};

const getDefaultLanguage = () => {
  if (typeof window === 'undefined') return 'en';
  
  try {
    const browserLang = window.navigator.language.toLowerCase();
    if (browserLang.includes('hy')) return 'hy';
    if (browserLang.includes('ru')) return 'ru';
    return 'en';
  } catch {
    return 'en';
  }
};

export const useLanguage = create<LanguageStore>()(
  persist(
    (set, get) => ({
      currentLanguage: 'en', // Default to 'en' initially
      setLanguage: (lang: string) => set({ currentLanguage: lang }),
      getCurrentLanguage: () => get().currentLanguage,
      t: (key: string) => {
        try {
          const keys = key.split('.');
          let current: any = translations[get().currentLanguage] || translations.en;
          
          for (const k of keys) {
            if (!current || current[k] === undefined) {
              console.warn(`Translation missing for key: ${key}`);
              // Fallback to English if translation is missing
              current = translations.en;
              for (const fallbackKey of keys) {
                if (!current || current[fallbackKey] === undefined) {
                  return key;
                }
                current = current[fallbackKey];
              }
              return current;
            }
            current = current[k];
          }
          
          return current;
        } catch (error) {
          console.warn(`Error getting translation for key: ${key}`, error);
          return key;
        }
      },
    }),
    {
      name: 'language-storage',
      skipHydration: true, // Skip hydration to prevent mismatch
    }
  )
);