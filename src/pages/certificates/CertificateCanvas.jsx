// CertificateCanvas.jsx
// Renders the final certificate and handles PNG download and Print/PDF export.
// Uses an HTML div (not canvas) for maximum styling flexibility.
// The downloadPNG function uses html2canvas (loaded via CDN) to capture the div.

import { useRef, useState } from "react";
import "./CertificateCanvas.css";

// Decorative stars scattered in the certificate background
function Stars() {
  const positions = [
    { top: "8%",  left: "5%",  size: "1.4rem", opacity: 0.5 },
    { top: "12%", left: "88%", size: "1.2rem", opacity: 0.4 },
    { top: "30%", left: "3%",  size: "0.9rem", opacity: 0.35 },
    { top: "28%", left: "92%", size: "1rem",   opacity: 0.4 },
    { top: "55%", left: "6%",  size: "1.1rem", opacity: 0.3 },
    { top: "58%", left: "90%", size: "0.8rem", opacity: 0.35 },
    { top: "78%", left: "4%",  size: "1.3rem", opacity: 0.4 },
    { top: "80%", left: "89%", size: "1rem",   opacity: 0.35 },
  ];
  return (
    <>
      {positions.map((p, i) => (
        <div key={i} style={{ position: "absolute", top: p.top, left: p.left, fontSize: p.size, opacity: p.opacity, pointerEvents: "none" }}>⭐</div>
      ))}
    </>
  );
}

// Decorative corner flourishes
function Corners({ color }) {
  const style = (r, rotation) => ({
    position: "absolute", ...r,
    width: 60, height: 60,
    border: `4px solid ${color}`,
    opacity: 0.3,
    transform: `rotate(${rotation}deg)`,
    borderRadius: 4,
  });
  return (
    <>
      <div style={style({ top: 16, left: 16 }, 0)} />
      <div style={style({ top: 16, right: 16 }, 90)} />
      <div style={style({ bottom: 16, left: 16 }, -90)} />
      <div style={style({ bottom: 16, right: 16 }, 180)} />
    </>
  );
}

export default function CertificateCanvas({
  character, certType, childName, clinicName,
  certDate, message, photoSrc, t, onEdit
}) {
  const certRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [printing, setPrinting] = useState(false);
  const [shared, setShared] = useState(false);

  // ── Download as PNG ──────────────────────────────────────────
  const handleDownloadPNG = async () => {
    setDownloading(true);
    try {
      // Dynamically load html2canvas from CDN
      if (!window.html2canvas) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }
      const canvas = await window.html2canvas(certRef.current, {
        scale: 2,             // 2x for crisp print quality
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });
      const link = document.createElement("a");
      link.download = `DentBloom-${childName.replace(/\s+/g, "-")}-Certificate.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("Download error:", err);
      alert("Download failed. Please try the Print option instead.");
    }
    setDownloading(false);
  };

  // ── Print / Save as PDF ──────────────────────────────────────
  const handlePrint = () => {
    setPrinting(true);
    // Give browser a tick to update state, then print
    setTimeout(() => {
      window.print();
      setPrinting(false);
    }, 200);
  };

  // ── Share ────────────────────────────────────────────────────
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `DentBloom Certificate — ${childName}`,
          text: t.shareMsg,
        });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch {}
    } else {
      // Fallback: copy text to clipboard
      await navigator.clipboard.writeText(`${t.shareMsg} — ${childName}`).catch(() => {});
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  const accentColor = certType.accentColor;
  const bgColor     = certType.bgColor;

  return (
    <div className="cert-canvas-wrapper">

      {/* ── Action buttons ── */}
      <div className="cert-actions">
        <button className="btn btn-white btn-sm" onClick={onEdit}>{t.editDetails}</button>
        <button className="btn btn-teal btn-sm" onClick={handleDownloadPNG} disabled={downloading}>
          {downloading ? "Preparing…" : t.downloadPNG}
        </button>
        <button className="btn btn-primary btn-sm" onClick={handlePrint}>
          {t.print}
        </button>
        <button className="btn btn-white btn-sm" onClick={handleShare}>
          {shared ? "Copied! ✓" : t.share}
        </button>
      </div>

      {/* ── Certificate (the actual printable element) ── */}
      <div
        ref={certRef}
        className="certificate"
        style={{ background: bgColor, borderColor: accentColor }}
        id="dentbloom-certificate"
      >
        <Stars />
        <Corners color={accentColor} />

        {/* Logo row */}
        <div className="cert-logo-row">
          <img
            src="/assets/logo/dentbloom-logo.png"
            alt="DentBloom"
            className="cert-logo"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="cert-logo-fallback" style={{ display: "none", fontFamily: "Fredoka One, cursive", fontSize: "1.4rem", color: "#085a64" }}>
            🌸 DentBloom
          </div>
        </div>

        {/* Certificate type title */}
        <div className="cert-type-title" style={{ color: accentColor }}>
          {certType.label}
        </div>

        {/* "This certifies that" */}
        <div className="cert-certifies" style={{ color: accentColor + "cc" }}>
          This certificate is proudly awarded to
        </div>

        {/* Character + photo composite */}
        <div className="cert-character-area">
          {/* Character body */}
          <div className="cert-character-wrap" style={{ borderColor: accentColor }}>
            {/* Photo overlaid on character face area */}
            {photoSrc && (
              <div className="cert-photo-overlay" style={character.facePosition}>
                <img src={photoSrc} alt={childName} className="cert-photo-face" />
              </div>
            )}
            {/* Character body image */}
            <img
              src={character.bodyImageSrc}
              alt={character.name}
              className="cert-character-body"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="cert-char-emoji-fallback" style={{ display: "none" }}>
              <span style={{ fontSize: "7rem" }}>{character.emoji}</span>
            </div>
          </div>
        </div>

        {/* Child name */}
        <div className="cert-child-name" style={{ color: accentColor }}>
          {childName || "Your Name Here"}
        </div>

        {/* Reward message */}
        <div className="cert-message" style={{ color: accentColor + "cc" }}>
          {message || certType.defaultMessage}
        </div>

        {/* Certificate emoji badge */}
        <div className="cert-emoji-badge" style={{ background: accentColor }}>
          {certType.emoji}
        </div>

        {/* Footer details */}
        <div className="cert-footer" style={{ borderTopColor: accentColor + "44" }}>
          <div className="cert-footer-item">
            <span className="cert-footer-label">Date</span>
            <span className="cert-footer-value">{certDate}</span>
          </div>
          {clinicName && (
            <div className="cert-footer-item">
              <span className="cert-footer-label">Presented by</span>
              <span className="cert-footer-value">{clinicName}</span>
            </div>
          )}
          <div className="cert-footer-item">
            <span className="cert-footer-label" style={{ opacity: 0.5 }}>{t.generatedOn}</span>
          </div>
        </div>
      </div>

      {/* Print styles injected as a style tag */}
      <style>{`
        @media print {
          body > * { display: none !important; }
          #dentbloom-certificate {
            display: flex !important;
            position: fixed !important;
            top: 0 !important; left: 0 !important;
            width: 100vw !important; height: 100vh !important;
            margin: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
