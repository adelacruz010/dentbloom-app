// DentalPlatformPage.jsx — Structure ready, content coming soon
import { Link } from "react-router-dom";
import { DENTAL_SECTIONS } from "../../data/platform";
import "./DentalPlatformPage.css";

export default function DentalPlatformPage() {
  return (
    <div className="page dental-platform-page">
      <Link to="/" className="back-btn">← Home</Link>

      <div className="dental-hero">
        <div className="dental-hero-icon">🦷</div>
        <div>
          <h1>Dental Clinics</h1>
          <p className="subtitle">Patient education and waiting room resources for dental practices.</p>
          <span className="coming-soon" style={{ marginTop: 10, display: "inline-flex" }}>
            🔜 Full platform coming soon
          </span>
        </div>
      </div>

      <h2 style={{ marginBottom: 16 }}>Planned Sections</h2>
      <div className="dental-sections-grid">
        {DENTAL_SECTIONS.map(section => (
          <div key={section.id} className="dental-section-card">
            <span className="dental-section-emoji">{section.emoji}</span>
            <span className="dental-section-label">{section.label}</span>
            <span className="coming-soon" style={{ fontSize: "0.6rem", padding: "2px 8px" }}>Soon</span>
          </div>
        ))}
      </div>

      <div className="dental-note">
        <p>The Dental Clinic platform will provide patient education resources, waiting room content, behaviour management tools and printable activities — all aligned with the DentBloom brand.</p>
      </div>
    </div>
  );
}
