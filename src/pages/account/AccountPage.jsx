// AccountPage.jsx — Structure for Administrator, Educator, Family accounts
import { Link } from "react-router-dom";
import useT from "../../i18n/useT";
import LanguageSelector from "../../components/ui/LanguageSelector";
import "./AccountPage.css";

const ADMIN_SECTIONS = [
  { id: "licence",     emoji: "📋", label: "Licence Details",       desc: "View your DentBloom licence details and renewal date." },
  { id: "educators",   emoji: "👩‍🏫", label: "Invite Educators",      desc: "Invite team members to access the educator platform." },
  { id: "family-codes",emoji: "🔑", label: "Family Access Codes",   desc: "Generate codes for families linked to your centre." },
  { id: "share",       emoji: "📤", label: "Shared Content",        desc: "Choose which projects, songs and videos families can see." },
];

const EDUCATOR_SECTIONS = [
  { id: "favourites",  emoji: "❤️", label: "My Favourites",          desc: "Your saved songs, stories and activities." },
  { id: "downloads",   emoji: "⬇️", label: "Downloaded Resources",   desc: "Resources you have downloaded for offline use." },
  { id: "certificates",emoji: "🏅", label: "My Certificates",        desc: "Certificates you have created." },
];

export default function AccountPage() {
  const t = useT();
  const ta = t.account || {};

  // For now show educator view as default
  const userType = "educator";

  return (
    <div className="page account-page">
      <h1>{ta.title || "Account"}</h1>

      {/* User card */}
      <div className="account-user-card">
        <div className="account-avatar">👩‍🏫</div>
        <div className="account-user-info">
          <div className="account-user-name">DentBloom Educator</div>
          <div className="account-user-type">{ta.educator || "Educator"}</div>
          <span className="coming-soon" style={{ marginTop: 6, fontSize: "0.65rem" }}>
            Sign In coming soon
          </span>
        </div>
      </div>

      {/* Language */}
      <div className="account-section-card">
        <div className="account-section-header">
          <span style={{ fontSize: "1.5rem" }}>🌍</span>
          <div>
            <div className="account-section-title">{ta.language || "Language"}</div>
          </div>
        </div>
        <LanguageSelector size="large" />
      </div>

      {/* Educator sections */}
      <h2 style={{ marginBottom: 14 }}>My Content</h2>
      {EDUCATOR_SECTIONS.map(s => (
        <div key={s.id} className="account-section-card account-section-card--dim">
          <div className="account-section-header">
            <span style={{ fontSize: "1.5rem" }}>{s.emoji}</span>
            <div>
              <div className="account-section-title">{s.label}</div>
              <div className="account-section-desc">{s.desc}</div>
            </div>
            <span className="coming-soon" style={{ marginLeft: "auto", fontSize: "0.62rem", flexShrink: 0 }}>Soon</span>
          </div>
        </div>
      ))}

      {/* Admin sections */}
      <h2 style={{ margin: "24px 0 14px" }}>Centre Management</h2>
      {ADMIN_SECTIONS.map(s => (
        <div key={s.id} className="account-section-card account-section-card--dim">
          <div className="account-section-header">
            <span style={{ fontSize: "1.5rem" }}>{s.emoji}</span>
            <div>
              <div className="account-section-title">{s.label}</div>
              <div className="account-section-desc">{s.desc}</div>
            </div>
            <span className="coming-soon" style={{ marginLeft: "auto", fontSize: "0.62rem", flexShrink: 0 }}>Soon</span>
          </div>
        </div>
      ))}

      {/* Platform selector */}
      <div className="account-section-card" style={{ marginTop: 24 }}>
        <div className="account-section-header">
          <span style={{ fontSize: "1.5rem" }}>🔄</span>
          <div>
            <div className="account-section-title">Switch Platform</div>
            <div className="account-section-desc">Switch between Childcare, Dental, and Family platforms.</div>
          </div>
        </div>
        <Link to="/select-platform" className="btn btn-white btn-sm" style={{ marginTop: 10 }}>
          Switch Platform
        </Link>
      </div>
    </div>
  );
}
