// FamilyPlatformPage.jsx — Structure ready, requires access code
import { Link } from "react-router-dom";
import { FAMILY_SECTIONS } from "../../data/platform";
import "./FamilyPlatformPage.css";

export default function FamilyPlatformPage() {
  return (
    <div className="page family-platform-page">
      <Link to="/" className="back-btn">← Home</Link>

      <div className="family-hero">
        <div className="family-hero-icon">👨‍👩‍👧</div>
        <div>
          <h1>Family Platform</h1>
          <p className="subtitle">Access content shared by your child's childcare centre.</p>
        </div>
      </div>

      {/* How it works */}
      <div className="family-how-it-works">
        <h2 style={{ marginBottom: 16 }}>How it works</h2>
        <div className="family-steps">
          {[
            { step: "1", icon: "🏫", text: "Your child's childcare centre has a DentBloom licence." },
            { step: "2", icon: "🔑", text: "The educator gives you a unique Family Access Code." },
            { step: "3", icon: "📱", text: "You enter the code to access content shared by your childcare." },
            { step: "4", icon: "🎵", text: "You only see songs, stories, videos and activities chosen by your educators." },
          ].map(s => (
            <div key={s.step} className="family-step">
              <div className="family-step-num">{s.step}</div>
              <div className="family-step-icon">{s.icon}</div>
              <div className="family-step-text">{s.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Planned sections */}
      <h2 style={{ marginBottom: 16 }}>What families can access</h2>
      <div className="family-sections-grid">
        {FAMILY_SECTIONS.map(section => (
          <div key={section.id} className="family-section-card">
            <span className="family-section-emoji">{section.emoji}</span>
            <div>
              <div className="family-section-label">{section.label}</div>
              <div className="family-section-desc">{section.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="family-privacy-note">
        <h3>🔒 Privacy by design</h3>
        <p>Families can only see content explicitly shared by their childcare. They cannot browse the full DentBloom library. This keeps home learning aligned with what children are experiencing at childcare.</p>
      </div>
    </div>
  );
}
