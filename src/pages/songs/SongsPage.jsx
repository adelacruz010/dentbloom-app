// SONGS LIST PAGE
// Shows all DentBloom songs as cards.
// Each card links to its individual song page.

import { Link } from "react-router-dom";
import { SONGS } from "../../data/content";
import { SectionTitle } from "../../components/ui/shared";
import "./SongsPage.css";

export default function SongsPage() {
  return (
    <div className="page">
      <SectionTitle emoji="🎵" title="Songs & Dance" count={`${SONGS.length} songs`} />
      <p className="subtitle" style={{ marginBottom: 28 }}>
        Fun, educational songs to make toothbrushing and dental health a daily joy!
      </p>

      <div className="songs-grid">
        {SONGS.map((song) => (
          <Link key={song.id} to={`/songs/${song.slug}`} className="card song-card-item">
            <div className="song-color-bar" style={{ background: song.color }}>
              <span className="song-big-emoji">{song.emoji}</span>
            </div>
            <div className="card-body">
              <div className="card-title">{song.title}</div>
              <div className="card-meta">⏱ {song.duration}</div>
              <div className="card-desc">{song.description}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                {song.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              {/* Show what's included */}
              <div className="song-includes">
                {song.videoUrl   && <span>🎬 Video</span>}
                {song.lyrics?.length > 0 && <span>📝 Lyrics</span>}
                {song.movementGuide?.length > 0 && <span>💃 Movement</span>}
                {song.pdfs?.length > 0 && <span>📄 {song.pdfs.length} PDF{song.pdfs.length !== 1 ? "s" : ""}</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Coming soon note */}
      <div className="more-songs-note">
        <span className="coming-soon">🎵 More songs coming soon!</span>
      </div>
    </div>
  );
}
