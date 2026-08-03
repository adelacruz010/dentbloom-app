// PlatformSelector.jsx
// Entry point for DentBloom — choose between Childcare, Dental Clinic, or Family platform.
// Persists platform choice to localStorage.
// Family platform requires an access code.

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PLATFORMS } from "../../data/platform";
import useT from "../../i18n/useT";
import LanguageSelector from "../../components/ui/LanguageSelector";
import "./PlatformSelector.css";

export function getPlatform() {
  try { return localStorage.getItem("db_platform") || null; } catch { return null; }
}
export function setPlatform(id) {
  try { localStorage.setItem("db_platform", id); } catch {}
}

export default function PlatformSelector() {
  const t = useT();
  const navigate = useNavigate();
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");

  const handleSelect = (platform) => {
    if (!platform.available) {
      if (platform.id === "family") { setShowCodeInput(true); return; }
      return; // dental — just show coming soon state
    }
    setPlatform(platform.id);
    navigate("/home");
  };

  const handleCodeSubmit = () => {
    // Placeholder — real validation will come with backend
    if (code.trim().length < 4) {
      setCodeError("Please enter a valid access code.");
      return;
    }
    setCodeError("");
    setPlatform("family");
    navigate("/home");
  };

  return (
    <div className="platform-page">

      {/* Header */}
      <div className="platform-header">
        <div className="platform-logo">
          <img
            src="/assets/logo/dentbloom-logo.png"
            alt="DentBloom"
            className="platform-logo-img"
            onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "block"; }}
          />
          <span className="platform-logo-fallback" style={{ display: "none" }}>
            <span style={{ fontFamily: "Fredoka One, cursive", fontSize: "2rem", color: "#085a64" }}>
              Dent<span style={{ color: "#fd5946" }}>Bloom</span>
            </span>
          </span>
        </div>
        <LanguageSelector size="small" />
      </div>

      <div className="platform-content">
        <h1 className="platform-title">{t.platform?.title || "Choose your platform"}</h1>
        <p className="platform-subtitle">Early Childhood Education Platform</p>

        <div className="platform-cards">
          {PLATFORMS.map((p) => (
            <button
              key={p.id}
              className={`platform-card ${!p.available ? "platform-card--soon" : ""}`}
              style={{ borderColor: p.color, "--p-color": p.color, "--p-bg": p.bgColor }}
              onClick={() => handleSelect(p)}
            >
              <div className="platform-card-icon" style={{ background: p.bgColor }}>
                {p.emoji}
              </div>
              <div className="platform-card-body">
                <div className="platform-card-title" style={{ color: p.color }}>{p.label}</div>
                <div className="platform-card-desc">{p.description}</div>
              </div>
              {!p.available && p.id !== "family" && (
                <span className="platform-soon-badge">Coming Soon</span>
              )}
              {p.id === "family" && (
                <span className="platform-soon-badge" style={{ background: p.color }}>Access Code</span>
              )}
              <span className="platform-arrow" style={{ color: p.color }}>›</span>
            </button>
          ))}
        </div>

        {/* Family access code input */}
        {showCodeInput && (
          <div className="platform-code-card">
            <h3>👨‍👩‍👧 Family Access</h3>
            <p>Enter the access code provided by your child's childcare centre.</p>
            <div className="platform-code-row">
              <input
                className="platform-code-input"
                type="text"
                placeholder="Enter access code"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                maxLength={12}
              />
              <button className="btn btn-primary" onClick={handleCodeSubmit}>
                Enter
              </button>
            </div>
            {codeError && <p className="platform-code-error">{codeError}</p>}
            <p className="platform-code-note">
              Don't have a code? Ask your child's educator for your Family Access Code.
            </p>
            <button className="platform-code-cancel" onClick={() => setShowCodeInput(false)}>
              Cancel
            </button>
          </div>
        )}

        {/* Project connection visual */}
        <div className="platform-flow">
          {["♻️ Recycle", "🌱 Garden", "🍎 Cook", "🪥 Healthy Habits"].map((item, i, arr) => (
            <div key={item} className="platform-flow-item">
              <span className="platform-flow-chip">{item}</span>
              {i < arr.length - 1 && <span className="platform-flow-arrow">→</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
