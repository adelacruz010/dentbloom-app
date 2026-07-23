// LanguageSelector.jsx
// A compact flag-based language picker.
// Pass size="large" for the Settings page version.

import { useLang, LANGUAGES } from "../../i18n/LanguageContext";
import "./LanguageSelector.css";

export default function LanguageSelector({ size = "small" }) {
  const { lang, changeLang } = useLang();

  return (
    <div className={`lang-selector lang-selector--${size}`}>
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          className={`lang-btn ${lang === l.code ? "active" : ""}`}
          onClick={() => changeLang(l.code)}
          title={l.label}
          aria-label={`Switch to ${l.label}`}
        >
          <span className="lang-flag">{l.flag}</span>
          {size === "large" && <span className="lang-label">{l.label}</span>}
        </button>
      ))}
    </div>
  );
}
