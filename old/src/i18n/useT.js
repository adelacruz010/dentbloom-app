// useT.js — Translation hook
// Usage anywhere in the app:
//   const t = useT();
//   t.btn.back  →  "← Back" (en) / "← Atrás" (es) / "← Voltar" (pt)

import { useLang } from "./LanguageContext";
import en from "./en";
import es from "./es";
import pt from "./pt";

const TRANSLATIONS = { en, es, pt };

export default function useT() {
  const { lang } = useLang();
  return TRANSLATIONS[lang] || TRANSLATIONS.en;
}
