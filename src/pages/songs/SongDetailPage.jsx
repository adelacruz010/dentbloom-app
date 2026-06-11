// SONG DETAIL PAGE
// Full page for a single DentBloom song.
// Shows: Video, Lyrics, Movement Guide, Movement Card, Activity, PDF Downloads

import { useParams, Link } from "react-router-dom";
import { SONGS, ACTIVITIES } from "../../data/content";
import { VideoEmbed, PDFDownloadButton, TagList } from "../../components/ui/shared";
import "./SongDetailPage.css";

export default function SongDetailPage() {
  const { slug } = useParams();
  const song = SONGS.find((s) => s.slug === slug);

  if (!song) {
    return (
      <div className="page">
        <Link to="/songs" className="back-btn">← Back to Songs</Link>
        <h1>Song not found</h1>
        <p className="subtitle">This song doesn't exist yet. <Link to="/songs">See all songs</Link>.</p>
      </div>
    );
  }

  // Find the linked activity if there is one
  const linkedActivity = song.activityId
    ? ACTIVITIES.find((a) => a.id === song.activityId)
    : null;

  return (
    <div className="page">

      {/* ── Breadcrumb ── */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>›</span>
        <Link to="/songs">Songs</Link>
        <span>›</span>
        <span>{song.title}</span>
      </div>

      {/* ── Song Header ── */}
      <div className="song-hero" style={{ background: song.color }}>
        <span className="song-hero-emoji">{song.emoji}</span>
        <div>
          <h1 style={{ color: song.textColor }}>{song.title}</h1>
          <p style={{ color: song.textColor, opacity: 0.8, fontWeight: 700 }}>{song.description}</p>
          <div style={{ marginTop: 8, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontWeight: 800, color: song.textColor, fontSize: "0.88rem" }}>⏱ {song.duration}</span>
            <TagList tags={song.tags} />
          </div>
        </div>
      </div>

      <div className="song-layout">

        {/* ── Left / Main Column ── */}
        <div className="song-main">

          {/* Video */}
          <section className="song-section">
            <h2>🎬 Video</h2>
            <VideoEmbed videoUrl={song.videoUrl} title={song.title} />
          </section>

          {/* Lyrics */}
          <section className="song-section">
            <h2>📝 Lyrics</h2>
            {song.lyrics?.length > 0 ? (
              <div className="lyrics-box">
                {song.lyrics.map((line, i) => (
                  <p key={i} className="lyric-line">{line}</p>
                ))}
              </div>
            ) : (
              <div className="coming-soon-block">
                <span>📝</span> Lyrics will be added soon.
              </div>
            )}
          </section>

          {/* Movement Guide */}
          <section className="song-section">
            <h2>💃 Movement Guide</h2>
            {song.movementGuide?.length > 0 ? (
              <ol className="movement-list">
                {song.movementGuide.map((step) => (
                  <li key={step.step} className="movement-step">
                    <span className="step-num">{step.step}</span>
                    <span className="step-action">{step.action}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <div className="coming-soon-block">💃 Movement guide coming soon.</div>
            )}
          </section>

          {/* Linked Activity */}
          {linkedActivity && (
            <section className="song-section">
              <h2>🎨 Go-Along Activity</h2>
              <Link to={`/activities/${linkedActivity.id}`} className="card linked-activity-card">
                <div style={{ background: linkedActivity.color, padding: "16px", borderRadius: "var(--radius-lg) var(--radius-lg) 0 0", fontSize: "2.5rem", textAlign: "center" }}>
                  {linkedActivity.emoji}
                </div>
                <div className="card-body">
                  <div className="card-title">{linkedActivity.title}</div>
                  <div className="card-meta">👶 {linkedActivity.ageRange} &nbsp;·&nbsp; ⏱ {linkedActivity.duration}</div>
                  <div className="card-desc">{linkedActivity.description}</div>
                </div>
              </Link>
            </section>
          )}

        </div>

        {/* ── Right / Sidebar ── */}
        <aside className="song-sidebar">

          {/* PDF Downloads */}
          <div className="sidebar-card">
            <h3>📄 Downloads</h3>
            {song.pdfs?.length > 0 ? (
              <div className="pdf-list">
                {song.pdfs.map((pdf) => (
                  <PDFDownloadButton key={pdf.file} label={pdf.label} file={pdf.file} />
                ))}
              </div>
            ) : (
              <p style={{ fontSize: "0.85rem", color: "var(--text-light)", fontWeight: 700 }}>
                PDFs coming soon.
              </p>
            )}
          </div>

          {/* Audio player */}
          <div className="sidebar-card">
            <h3>🎵 Audio</h3>
            {song.audioSrc ? (
              <audio controls style={{ width: "100%", borderRadius: "var(--radius-sm)" }}>
                <source src={song.audioSrc} type="audio/mpeg" />
                Your browser does not support audio.
              </audio>
            ) : (
              <p style={{ fontSize: "0.85rem", color: "var(--text-light)", fontWeight: 700 }}>
                Audio file coming soon.
              </p>
            )}
          </div>

          {/* Back to all songs */}
          <Link to="/songs" className="back-btn" style={{ width: "100%", justifyContent: "center" }}>
            ← Back to Songs
          </Link>

        </aside>
      </div>
    </div>
  );
}
