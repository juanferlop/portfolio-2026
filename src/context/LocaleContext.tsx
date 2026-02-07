"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Locale = "es" | "en";

interface LocaleContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("es");

  // Sync with localStorage on mount (client only)
  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored && stored !== locale) setLocale(stored);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
