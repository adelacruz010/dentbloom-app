// SETTINGS PAGE
import { Link } from "react-router-dom";
import useT from "../../i18n/useT";
import LanguageSelector from "../../components/ui/LanguageSelector";
import "./SettingsPage.css";

export default function SettingsPage() {
  const t = useT();
  return (
    <div className="page settings-page">
      <Link to="/" className="back-btn">{t.btn.back}</Link>
      <h1>⚙️ {t.settings.title}</h1>

      {/* Language section */}
      <div className="settings-card">
        <div className="settings-card-header">
          <span style={{ fontSize: "1.8rem" }}>🌍</span>
          <div>
            <h3>{t.settings.language}</h3>
            <p className="subtitle">{t.settings.chooseLanguage}</p>
          </div>
        </div>
        <LanguageSelector size="large" />
      </div>

      {/* Future settings placeholders */}
      {[
        { icon: "🔔", title: "Notifications", desc: "Coming soon" },
        { icon: "🎵", title: "Sound & Music", desc: "Coming soon" },
        { icon: "👨‍👩‍👧", title: "Parent Account", desc: "Coming soon" },
        { icon: "🏫", title: "Educator Account", desc: "Coming soon" },
      ].map(s => (
        <div key={s.title} className="settings-card settings-card--dim">
          <div className="settings-card-header">
            <span style={{ fontSize: "1.8rem" }}>{s.icon}</span>
            <div>
              <h3>{s.title}</h3>
              <span className="coming-soon">{s.desc}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
