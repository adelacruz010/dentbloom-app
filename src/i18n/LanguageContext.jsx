// LanguageContext.jsx
// Manages the app's selected language (en / es / pt).
// Saved to localStorage so the user's choice persists between visits.

import { createContext, useContext, useState, useEffect } from "react";

export const LANGUAGES = [
  { code: "en", label: "English",    flag: "🇬🇧" },
  { code: "es", label: "Español",    flag: "🇪🇸" },
  { code: "pt", label: "Português",  flag: "🇵🇹" },
];

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("db_lang") || "en"; }
    catch { return "en"; }
  });

  const changeLang = (code) => {
    setLang(code);
    try { localStorage.setItem("db_lang", code); } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLang, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
