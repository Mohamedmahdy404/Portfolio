import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { translations } from "@/constants/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    const initialLanguage = savedLanguage === "ar" ? "ar" : "en";
    setLanguage(initialLanguage);
  }, []);

  useEffect(() => {
    const direction = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.body.dir = direction;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      direction: language === "ar" ? "rtl" : "ltr",
      isArabic: language === "ar",
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === "en" ? "ar" : "en")),
      t: translations[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
