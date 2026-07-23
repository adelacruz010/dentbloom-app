// CERTIFICATES HUB PAGE
// Landing page for the Certificates section.
// Shows quick access to create a new cert or view saved ones.
// Also contains the technical investigation summary for the AI feature.

import { Link } from "react-router-dom";
import useT from "../../i18n/useT";
import { loadSavedCerts } from "./SavedCertificatesPage";
import { useState, useEffect } from "react";
import "./CertificatesHub.css";

const AI_SERVICES = [
  { name: "OpenAI gpt-image-1", quality: "⭐⭐⭐⭐⭐", cost: "~$0.04–$0.08/cert", notes: "Best style control, easiest API" },
  { name: "Stability AI",       quality: "⭐⭐⭐⭐",   cost: "~$0.002–$0.01/cert", notes: "Good quality, more setup" },
  { name: "Replicate (hosted)", quality: "⭐⭐⭐⭐",   cost: "~$0.005–$0.02/cert", notes: "Middle ground, flexible" },
];

export default function CertificatesHub() {
  const t = useT();
  const tc = t.certificates;
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    setSavedCount(loadSavedCerts().length);
  }, []);

  return (
    <div className="page certs-hub-page">
      <Link to="/" className="back-btn">{t.btn.back}</Link>

      <h1>{tc.title}</h1>
      <p className="subtitle" style={{ marginBottom: 28 }}>
        Create beautiful personalised DentBloom certificates for the children in your care!
      </p>

      {/* Main action cards */}
      <div className="hub-cards">
        <Link to="/certificates/new" className="hub-card hub-card--primary">
          <span className="hub-card-icon">🏅</span>
          <div>
            <div className="hub-card-title">{tc.create}</div>
            <div className="hub-card-sub">Choose a character, type, and personalise</div>
          </div>
          <span className="hub-arrow">›</span>
        </Link>

        <Link to="/certificates/saved" className="hub-card hub-card--secondary">
          <span className="hub-card-icon">📁</span>
          <div>
            <div className="hub-card-title">{tc.savedCerts}</div>
            <div className="hub-card-sub">
              {savedCount > 0 ? `${savedCount} certificate${savedCount !== 1 ? "s" : ""} saved` : tc.noSaved}
            </div>
          </div>
          <span className="hub-arrow">›</span>
        </Link>
      </div>

      {/* What you can create */}
      <div className="hub-section">
        <h2>🎨 Certificate Types</h2>
        <div className="hub-types-row">
          {[
            { emoji: "🦷", label: "Brave Smiler" },
            { emoji: "🪥", label: "Super Brusher" },
            { emoji: "⭐", label: "Star Learner" },
            { emoji: "😁", label: "Healthy Smiles" },
            { emoji: "🌱", label: "Garden Hero" },
            { emoji: "🎂", label: "Birthday" },
          ].map(ct => (
            <div key={ct.label} className="hub-type-chip">
              <span>{ct.emoji}</span>
              <span>{ct.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Photo + cartoon feature - current status */}
      <div className="hub-section">
        <h2>📷 Personalised Photo Feature</h2>
        <div className="hub-feature-card">
          <div className="hub-feature-row">
            <div className="hub-feature-item hub-feature-item--live">
              <div className="hub-feature-status">✅ Available Now</div>
              <div className="hub-feature-title">Add Child's Photo</div>
              <p>Upload or take a photo. It appears on the certificate over the character's face. Processed entirely on your device — never uploaded.</p>
            </div>
            <div className="hub-feature-item hub-feature-item--soon">
              <div className="hub-feature-status">🚀 Coming Soon</div>
              <div className="hub-feature-title">AI Cartoon Conversion</div>
              <p>Automatically transforms the photo into a cute DentBloom-style cartoon illustration that blends naturally with the character.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical investigation summary */}
      <div className="hub-section">
        <h2>🔬 AI Technical Investigation</h2>
        <div className="hub-tech-card">

          <div className="hub-tech-row">
            <div className="hub-tech-label">Is it feasible?</div>
            <div className="hub-tech-value hub-tech-value--yes">Yes — ready to build</div>
          </div>
          <div className="hub-tech-row">
            <div className="hub-tech-label">Processing location</div>
            <div className="hub-tech-value">Backend server (Vercel Serverless Functions)</div>
          </div>
          <div className="hub-tech-row">
            <div className="hub-tech-label">Original photo stored?</div>
            <div className="hub-tech-value hub-tech-value--yes">Never — deleted immediately after conversion</div>
          </div>
          <div className="hub-tech-row">
            <div className="hub-tech-label">Development time</div>
            <div className="hub-tech-value">6–9 weeks (one developer)</div>
          </div>

          <div className="hub-ai-table">
            <div className="hub-ai-table-title">Recommended AI Services</div>
            {AI_SERVICES.map(s => (
              <div key={s.name} className="hub-ai-row">
                <div className="hub-ai-name">{s.name}</div>
                <div className="hub-ai-quality">{s.quality}</div>
                <div className="hub-ai-cost">{s.cost}</div>
                <div className="hub-ai-notes">{s.notes}</div>
              </div>
            ))}
          </div>

          <div className="hub-privacy-note">
            <div className="hub-privacy-title">🔒 Privacy — Children's Photos</div>
            <ul>
              <li>Original photo deleted immediately after cartoon conversion</li>
              <li>Only the cartoon illustration is stored</li>
              <li>Explicit parental consent required before any upload</li>
              <li>No third-party sharing of any photos</li>
              <li>GDPR / COPPA / PDPA compliant design</li>
              <li>Parents can delete their child's cartoon at any time</li>
            </ul>
          </div>

          <div className="hub-future-note">
            <div className="hub-future-title">🔮 Future Reuse</div>
            <p>Once a cartoon face is generated, it is saved to the child's profile and reused automatically across:</p>
            <div className="hub-future-chips">
              {["Storybooks", "Reward Charts", "Birthday Certificates", "Achievement Awards", "Printable Activities", "Games"].map(item => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
