// ============================================================
// Shared UI Components
// ============================================================

// ── AssetImage ── shows a placeholder if the image file is missing
export function AssetImage({ src, alt, width, height, className = "", style = {} }) {
  const handleError = (e) => {
    e.target.style.display = "none";
    e.target.nextSibling.style.display = "flex";
  };

  return (
    <div style={{ position: "relative", width, height, ...style }}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onError={handleError}
        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        className="asset-placeholder"
        style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, display: "none" }}
      >
        <span style={{ fontSize: "2rem" }}>🖼️</span>
        <span style={{ fontSize: "0.65rem" }}>{alt}</span>
      </div>
    </div>
  );
}

// ── PDFDownloadButton ── download button for PDF resources
export function PDFDownloadButton({ label, file, compact = false }) {
  const handleClick = () => {
    // Try to open/download the PDF
    // If the file doesn't exist yet, it will just 404 gracefully
    window.open(file, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`btn btn-secondary ${compact ? "btn-sm" : ""}`}
      style={{ gap: 8 }}
    >
      <span>⬇️</span>
      {label || "Download PDF"}
    </button>
  );
}

// ── SectionTitle ── consistent section heading
export function SectionTitle({ emoji, title, count }) {
  return (
    <div className="section-header">
      {emoji && <span style={{ fontSize: "1.5rem" }}>{emoji}</span>}
      <h2>{title}</h2>
      {count !== undefined && <span className="count">{count}</span>}
    </div>
  );
}

// ── EmptyState ── shown when no content is available yet
export function EmptyState({ emoji = "🌱", title, message }) {
  return (
    <div style={{
      background: "white",
      borderRadius: "var(--radius-lg)",
      padding: "48px 24px",
      textAlign: "center",
      boxShadow: "var(--shadow-sm)",
    }}>
      <div style={{ fontSize: "3rem", marginBottom: 12 }}>{emoji}</div>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <p className="subtitle">{message}</p>
    </div>
  );
}

// ── TagList ── render an array of tag strings
export function TagList({ tags = [] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
      {tags.map((t) => (
        <span key={t} className="tag">{t}</span>
      ))}
    </div>
  );
}

// ── VideoEmbed ── YouTube or placeholder
export function VideoEmbed({ videoUrl, title }) {
  if (!videoUrl) {
    return (
      <div style={{
        background: "#f5f5f5",
        borderRadius: "var(--radius-md)",
        aspect: "16/9",
        aspectRatio: "16/9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        color: "var(--text-light)",
        border: "2px dashed var(--border)",
        width: "100%",
      }}>
        <span style={{ fontSize: "3rem" }}>🎬</span>
        <p style={{ fontWeight: 800, fontSize: "0.9rem" }}>Video coming soon</p>
        <p style={{ fontSize: "0.75rem" }}>Add a YouTube URL to display here</p>
      </div>
    );
  }

  return (
    <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", aspectRatio: "16/9", width: "100%" }}>
      <iframe
        src={videoUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}
