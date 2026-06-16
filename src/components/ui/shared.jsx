// Shared UI Components

// Smart image with placeholder fallback
export function AssetImg({ src, alt, width, height, style = {}, className = "" }) {
  const handleError = (e) => {
    e.target.style.display = "none";
    e.target.nextSibling.style.display = "flex";
  };
  return (
    <div style={{ position: "relative", width, height, flexShrink: 0, ...style }}>
      <img src={src} alt={alt} onError={handleError}
        style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }}
        className={className}
      />
      <div className="asset-ph" style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, display: "none" }}>
        <span style={{ fontSize: "2rem" }}>🖼️</span>
        <span>{alt}</span>
      </div>
    </div>
  );
}

// Star earn button — tapping earns a star and shows celebration
export function EarnStarBtn({ onEarn, label = "⭐ Earn a Star!" }) {
  return (
    <button className="btn btn-primary" onClick={onEarn} style={{ fontSize: "1.2rem", padding: "16px 36px" }}>
      {label}
    </button>
  );
}

// Video embed or placeholder
export function VideoEmbed({ videoUrl, title }) {
  if (!videoUrl) return (
    <div style={{ background: "#f0f0f0", borderRadius: "var(--r-md)", aspectRatio: "16/9", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, color: "var(--text-light)", border: "2px dashed var(--border-mid)" }}>
      <span style={{ fontSize: "3rem" }}>🎬</span>
      <p style={{ fontWeight: 700, fontSize: "0.9rem" }}>Video coming soon</p>
    </div>
  );
  return (
    <div style={{ borderRadius: "var(--r-md)", overflow: "hidden", aspectRatio: "16/9" }}>
      <iframe src={videoUrl} title={title} allowFullScreen style={{ width: "100%", height: "100%", border: "none" }} />
    </div>
  );
}

// PDF download button
export function PDFBtn({ label, file, compact = false }) {
  if (!file) return (
    <button className={`btn btn-white ${compact ? "btn-sm" : ""}`} disabled style={{ opacity: 0.5 }}>
      ⬇️ {label} — Coming Soon
    </button>
  );
  return (
    <button className={`btn btn-white ${compact ? "btn-sm" : ""}`} onClick={() => window.open(file, "_blank")}>
      ⬇️ {label}
    </button>
  );
}

// Section heading
export function SectionHeading({ emoji, title }) {
  return (
    <div className="section-title">
      {emoji && <span>{emoji}</span>}
      {title}
    </div>
  );
}
