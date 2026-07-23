// CERTIFICATE BUILDER PAGE
// 4-step wizard:
//   Step 1 — Choose character
//   Step 2 — Choose certificate type
//   Step 3 — Fill in child name, clinic, date, message + optional photo
//   Step 4 — Preview and download/print
//
// All photo processing is 100% on-device.
// No photo is ever uploaded or sent anywhere.

import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { CERT_CHARACTERS, CERT_TYPES } from "../../data/certificates";
import useT from "../../i18n/useT";
import CertificateCanvas from "./CertificateCanvas";
import "./CertificatePage.css";

const STEPS = [1, 2, 3, 4];

export default function CertificatePage() {
  const t = useT();
  const tc = t.certificates;

  // Wizard state
  const [step, setStep]           = useState(1);
  const [character, setCharacter] = useState(null);
  const [certType, setCertType]   = useState(null);
  const [childName, setChildName] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [certDate, setCertDate]   = useState(() => new Date().toLocaleDateString("en-AU"));
  const [message, setMessage]     = useState("");
  const [photoSrc, setPhotoSrc]   = useState(null);
  const [showConsent, setShowConsent] = useState(false);
  const [pendingPhotoAction, setPendingPhotoAction] = useState(null);

  const fileInputRef    = useRef(null);
  const cameraInputRef  = useRef(null);

  // ── Photo handling ──────────────────────────────────────────
  const requestPhoto = (source) => {
    setPendingPhotoAction(source);
    setShowConsent(true);
  };

  const handleConsentAgree = () => {
    setShowConsent(false);
    if (pendingPhotoAction === "camera") {
      cameraInputRef.current?.click();
    } else {
      fileInputRef.current?.click();
    }
  };

  const handleConsentDecline = () => {
    setShowConsent(false);
    setPhotoSrc(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setPhotoSrc(ev.target.result);
    reader.readAsDataURL(file);
    // Clear the input so same file can be re-selected
    e.target.value = "";
  };

  // ── Navigation ──────────────────────────────────────────────
  const canProceed = () => {
    if (step === 1) return !!character;
    if (step === 2) return !!certType;
    if (step === 3) return childName.trim().length > 0;
    return true;
  };

  const next = () => {
    if (step === 2 && certType) {
      // Pre-fill message from template if user hasn't typed one
      if (!message) setMessage(certType.defaultMessage);
    }
    setStep(s => Math.min(s + 1, 4));
  };
  const prev = () => setStep(s => Math.max(s - 1, 1));

  // ── Step labels ─────────────────────────────────────────────
  const STEP_LABELS = [tc.step1, tc.step2, tc.step3, tc.step4];

  return (
    <div className="page cert-page">
      <Link to="/rewards" className="back-btn">{t.btn.back}</Link>

      <h1>{tc.title}</h1>
      <p className="subtitle" style={{ marginBottom: 24 }}>{tc.subtitle}</p>

      {/* Progress stepper */}
      <div className="cert-stepper">
        {STEPS.map((s) => (
          <div key={s} className={`cert-step ${step === s ? "active" : step > s ? "done" : ""}`}>
            <div className="cert-step-circle">{step > s ? "✓" : s}</div>
            <div className="cert-step-label">{STEP_LABELS[s - 1]?.split("—")[1]?.trim() || `Step ${s}`}</div>
          </div>
        ))}
      </div>

      {/* ── STEP 1: Choose Character ── */}
      {step === 1 && (
        <div className="cert-section">
          <h2>{tc.chooseCharacter}</h2>
          <div className="cert-character-grid">
            {CERT_CHARACTERS.map((char) => (
              <button
                key={char.id}
                className={`cert-char-card ${character?.id === char.id ? "selected" : ""}`}
                style={{ borderColor: character?.id === char.id ? char.color : "var(--border)" }}
                onClick={() => setCharacter(char)}
              >
                <div className="cert-char-top" style={{ background: char.color + "22" }}>
                  {/* Body image placeholder — shows emoji fallback */}
                  <img
                    src={char.bodyImageSrc}
                    alt={char.name}
                    className="cert-char-body-img"
                    onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                  />
                  <div className="cert-char-emoji-ph" style={{ display: "none" }}>
                    {char.emoji}
                  </div>
                </div>
                <div className="cert-char-info">
                  <div className="cert-char-name">{char.name}</div>
                  <div className="cert-char-desc">{char.description}</div>
                </div>
                {character?.id === char.id && (
                  <div className="cert-selected-badge" style={{ background: char.color }}>✓</div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── STEP 2: Choose Certificate Type ── */}
      {step === 2 && (
        <div className="cert-section">
          <h2>{tc.chooseType}</h2>
          <div className="cert-type-grid">
            {CERT_TYPES.map((ct) => (
              <button
                key={ct.id}
                className={`cert-type-card ${certType?.id === ct.id ? "selected" : ""}`}
                style={{
                  background: certType?.id === ct.id ? ct.bgColor : "white",
                  borderColor: certType?.id === ct.id ? ct.accentColor : "var(--border)",
                }}
                onClick={() => setCertType(ct)}
              >
                <span className="cert-type-emoji">{ct.emoji}</span>
                <span className="cert-type-label" style={{ color: ct.accentColor }}>{ct.label}</span>
                <p className="cert-type-msg">"{ct.defaultMessage.slice(0, 60)}…"</p>
                {certType?.id === ct.id && (
                  <div className="cert-selected-badge" style={{ background: ct.accentColor }}>✓</div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── STEP 3: Details + Photo ── */}
      {step === 3 && (
        <div className="cert-section">
          <h2>{tc.step3.split("—")[1]?.trim() || "Your Details"}</h2>

          <div className="cert-form">
            {/* Child name */}
            <div className="cert-field">
              <label className="cert-label">{tc.childName} *</label>
              <input
                className="cert-input"
                type="text"
                placeholder={tc.childNamePh}
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                maxLength={40}
              />
            </div>

            {/* Clinic/Childcare name */}
            <div className="cert-field">
              <label className="cert-label">{tc.clinicName}</label>
              <input
                className="cert-input"
                type="text"
                placeholder={tc.clinicNamePh}
                value={clinicName}
                onChange={(e) => setClinicName(e.target.value)}
                maxLength={60}
              />
            </div>

            {/* Date */}
            <div className="cert-field">
              <label className="cert-label">{tc.customDate}</label>
              <input
                className="cert-input"
                type="text"
                value={certDate}
                onChange={(e) => setCertDate(e.target.value)}
                maxLength={30}
              />
            </div>

            {/* Custom message */}
            <div className="cert-field">
              <label className="cert-label">{tc.message}</label>
              <textarea
                className="cert-input cert-textarea"
                placeholder={tc.messagePh}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={180}
                rows={3}
              />
            </div>

            {/* Photo section */}
            <div className="cert-photo-section">
              <div className="cert-photo-header">
                <span className="cert-label">{tc.addPhoto}</span>
                {photoSrc && (
                  <button className="cert-remove-photo" onClick={() => setPhotoSrc(null)}>
                    ✕ Remove
                  </button>
                )}
              </div>

              {photoSrc ? (
                <div className="cert-photo-preview">
                  <img src={photoSrc} alt="Child" className="cert-photo-thumb" />
                  <div className="cert-photo-added">{tc.photoAdded}</div>
                </div>
              ) : (
                <div className="cert-photo-btns">
                  <button className="btn btn-white btn-sm" onClick={() => requestPhoto("camera")}>
                    📷 {tc.takePhoto}
                  </button>
                  <button className="btn btn-white btn-sm" onClick={() => requestPhoto("gallery")}>
                    🖼️ {tc.chooseGallery}
                  </button>
                </div>
              )}

              {/* AI coming soon note */}
              <div className="cert-ai-note">
                <div className="cert-ai-note-title">{tc.aiNote}</div>
                <div className="cert-ai-note-body">{tc.aiNoteBody}</div>
              </div>
            </div>
          </div>

          {/* Hidden file inputs */}
          <input ref={fileInputRef}    type="file" accept="image/*"          style={{ display: "none" }} onChange={handleFileChange} />
          <input ref={cameraInputRef}  type="file" accept="image/*" capture="user" style={{ display: "none" }} onChange={handleFileChange} />
        </div>
      )}

      {/* ── STEP 4: Preview ── */}
      {step === 4 && (
        <CertificateCanvas
          character={character}
          certType={certType}
          childName={childName}
          clinicName={clinicName}
          certDate={certDate}
          message={message}
          photoSrc={photoSrc}
          t={tc}
          onEdit={prev}
        />
      )}

      {/* ── Navigation buttons ── */}
      {step < 4 && (
        <div className="cert-nav">
          {step > 1 && (
            <button className="btn btn-white" onClick={prev}>{t.btn.back}</button>
          )}
          <button
            className="btn btn-primary"
            onClick={next}
            disabled={!canProceed()}
            style={{ opacity: canProceed() ? 1 : 0.45 }}
          >
            {step === 3 ? tc.preview : `${t.btn.next}`}
          </button>
        </div>
      )}

      {/* ── Consent Modal ── */}
      {showConsent && (
        <div className="consent-overlay" onClick={handleConsentDecline}>
          <div className="consent-modal" onClick={(e) => e.stopPropagation()}>
            <div className="consent-icon">📷</div>
            <h2 className="consent-title">{tc.consentTitle}</h2>
            <p className="consent-body">{tc.consentBody}</p>
            <div className="consent-btns">
              <button className="btn btn-primary" onClick={handleConsentAgree}>
                {tc.consentAgree}
              </button>
              <button className="btn btn-white" onClick={handleConsentDecline}>
                {tc.consentDecline}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
