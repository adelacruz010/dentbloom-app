// CertificateCanvas.jsx
// Renders a full, properly proportioned DentBloom certificate.
// Fixed aspect ratio so it never crops.
// Download uses html2canvas at 3x scale for print quality.

import { useRef, useState } from "react";
import "./CertificateCanvas.css";

// ── Decorative floating stars ────────────────────────────────
function FloatingStars({ color }) {
  const stars = [
    { top: "10%", left: "4%",  size: "1.5rem" },
    { top: "8%",  left: "88%", size: "1.3rem" },
    { top: "26%", left: "2%",  size: "1rem"   },
    { top: "24%", left: "91%", size: "1.1rem" },
    { top: "52%", left: "3%",  size: "1.2rem" },
    { top: "54%", left: "90%", size: "0.9rem" },
    { top: "74%", left: "4%",  size: "1.4rem" },
    { top: "76%", left: "88%", size: "1.1rem" },
    { top: "88%", left: "8%",  size: "0.8rem" },
    { top: "86%", left: "84%", size: "0.8rem" },
  ];
  return (
    <>
      {stars.map((s, i) => (
        <div key={i} style={{
          position: "absolute", top: s.top, left: s.left,
          fontSize: s.size, color: color,
          opacity: 0.55, pointerEvents: "none",
          filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))",
        }}>★</div>
      ))}
    </>
  );
}

// ── Decorative corner boxes (matching screenshot) ────────────
function CornerBoxes({ borderColor, bgColor }) {
  const box = (pos) => ({
    position: "absolute", ...pos,
    width: 52, height: 52,
    border: `3px solid ${borderColor}`,
    borderRadius: 8,
    background: bgColor,
    opacity: 0.7,
  });
  return (
    <>
      <div style={box({ top: 14, left: 14 })} />
      <div style={box({ top: 14, right: 14 })} />
      <div style={box({ bottom: 14, left: 14 })} />
      <div style={box({ bottom: 14, right: 14 })} />
    </>
  );
}

export default function CertificateCanvas({
  character, certType, childName, clinicName,
  certDate, message, photoSrc, t, onEdit,
}) {
  const certRef       = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [shared,      setShared]      = useState(false);

  // ── Download PNG ─────────────────────────────────────────────
  const handleDownloadPNG = async () => {
    setDownloading(true);
    try {
      if (!window.html2canvas) {
        await new Promise((resolve, reject) => {
          const s = document.createElement("script");
          s.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
          s.onload = resolve; s.onerror = reject;
          document.head.appendChild(s);
        });
      }
      const canvas = await window.html2canvas(certRef.current, {
        scale: 3,          // 3x for sharp print quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: certType.bgColor,
        logging: false,
        windowWidth: certRef.current.offsetWidth,
        windowHeight: certRef.current.offsetHeight,
      });
      const link = document.createElement("a");
      link.download = `DentBloom-${(childName || "Certificate").replace(/\s+/g, "-")}.png`;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    } catch (err) {
      console.error("Download error:", err);
      alert("Download failed. Please use Print instead.");
    }
    setDownloading(false);
  };

  // ── Print ────────────────────────────────────────────────────
  const handlePrint = () => {
    setTimeout(() => window.print(), 150);
  };

  // ── Share ────────────────────────────────────────────────────
  const handleShare = async () => {
    const text = `${t.shareMsg} — ${childName}`;
    if (navigator.share) {
      try { await navigator.share({ title: `DentBloom Certificate — ${childName}`, text }); }
      catch {}
    } else {
      await navigator.clipboard.writeText(text).catch(() => {});
    }
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  const ac  = certType.accentColor;   // accent colour
  const bg  = certType.bgColor;       // background
  // Slightly darker shade for corner boxes / border
  const bd  = ac + "88";

  return (
    <div className="cert-canvas-wrapper">

      {/* ── Action buttons ── */}
      <div className="cert-actions">
        <button className="btn btn-white btn-sm" onClick={onEdit}>{t.editDetails}</button>
        <button className="btn btn-teal btn-sm" onClick={handleDownloadPNG} disabled={downloading}>
          {downloading ? "Preparing…" : t.downloadPNG}
        </button>
        <button className="btn btn-primary btn-sm" onClick={handlePrint}>{t.print}</button>
        <button className="btn btn-white btn-sm" onClick={handleShare}>
          {shared ? "Copied! ✓" : t.share}
        </button>
      </div>

      {/* ── Scroll container so certificate is never clipped ── */}
      <div className="cert-scroll-wrap">

        {/* THE CERTIFICATE — fixed width, auto height, never crops */}
        <div
          ref={certRef}
          className="certificate"
          style={{ background: bg, borderColor: ac }}
          id="dentbloom-certificate"
        >
          <FloatingStars color={ac} />
          <CornerBoxes borderColor={ac} bgColor={bg} />

          {/* ── Logo ── */}
          <div className="cert-logo-row">
            <span className="cert-bloomy-icon">🌸</span>
            <img
              src="/assets/logo/dentbloom-logo.png"
              alt="DentBloom"
              className="cert-logo"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <span className="cert-logo-fallback" style={{ display: "none", fontFamily: "Fredoka One, cursive", fontSize: "1.6rem", color: "#085a64" }}>
              <strong style={{ color: "#085a64" }}>Dent</strong><strong style={{ color: "#fd5946" }}>Bloom</strong>
            </span>
          </div>

          {/* ── Certificate title ── */}
          <h2 className="cert-type-title" style={{ color: ac }}>
            {certType.label}
          </h2>

          {/* ── "Awarded to" ── */}
          <p className="cert-certifies" style={{ color: ac }}>
            THIS CERTIFICATE IS PROUDLY AWARDED TO
          </p>

          {/* ── Character image box ── */}
          <div className="cert-char-box" style={{ borderColor: ac, background: bg + "cc" }}>
            {/* Photo layered on top of character face if provided */}
            {photoSrc && (
              <div className="cert-photo-overlay" style={character.facePosition}>
                <img src={photoSrc} alt={childName} className="cert-photo-face" />
              </div>
            )}

            {/* Character body — fills the box */}
            <img
              src={character.bodyImageSrc}
              alt={character.name}
              className="cert-char-img"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="cert-char-emoji-fb" style={{ display: "none" }}>
              <span>{character.emoji}</span>
            </div>
          </div>

          {/* ── Child name ── */}
          <h1 className="cert-child-name" style={{ color: ac }}>
            {childName || "Your Name Here"}
          </h1>

          {/* ── Reward message ── */}
          <p className="cert-message" style={{ color: ac }}>
            {message || certType.defaultMessage}
          </p>

          {/* ── Emoji badge ── */}
          <div className="cert-badge" style={{ background: ac }}>
            <span className="cert-badge-emoji">{certType.emoji}</span>
          </div>

          {/* ── Divider ── */}
          <div className="cert-divider" style={{ background: ac + "44" }} />

          {/* ── Footer ── */}
          <div className="cert-footer">
            <div className="cert-footer-item">
              <span className="cert-footer-label" style={{ color: ac }}>DATE</span>
              <span className="cert-footer-value" style={{ color: ac }}>{certDate}</span>
            </div>
            {clinicName && (
              <div className="cert-footer-item">
                <span className="cert-footer-label" style={{ color: ac }}>PRESENTED BY</span>
                <span className="cert-footer-value" style={{ color: ac }}>{clinicName}</span>
              </div>
            )}
          </div>

          {/* ── Generated by ── */}
          <p className="cert-generated" style={{ color: ac }}>
            {t.generatedOn}
          </p>

        </div>
      </div>

      {/* Print CSS */}
      <style>{`
        @media print {
          body > *:not(#cert-print-root) { display: none !important; }
          .cert-actions { display: none !important; }
          .cert-scroll-wrap { overflow: visible !important; }
          .certificate {
            width: 100% !important;
            max-width: 100% !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
