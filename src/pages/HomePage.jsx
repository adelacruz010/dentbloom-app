// HOME PAGE

import { Link } from "react-router-dom";
import { SONGS, ACTIVITIES } from "../data/content";
import { AssetImage } from "../components/ui/shared";
import "./HomePage.css";

const QUICK_LINKS = [
  { to: "/songs",                    icon: "🎵", label: "Songs",          color: "#C8EFE3", text: "#2A7A64" },
  { to: "/activities",               icon: "🎨", label: "Activities",     color: "#FFD6DC", text: "#A8354F" },
  { to: "/resources/movement-cards", icon: "💃", label: "Movement Cards", color: "#C8E8FF", text: "#2E6A9A" },
  { to: "/resources/parents",        icon: "👨‍👩‍👧", label: "For Parents",    color: "#FFF3C4", text: "#8A6400" },
  { to: "/resources/teachers",       icon: "🏫", label: "For Teachers",   color: "#E0D4F5", text: "#5A3EA0" },
  { to: "/about",                    icon: "🌸", label: "About Bloomy",   color: "#FFE5C8", text: "#9A5A1A" },
];

export default function HomePage() {
  return (
    <div className="home-page">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-text">
          <div className="hero-eyebrow">🌸 Healthy Smiles for Little Ones</div>
          <h1>Songs, activities &amp; resources for happy teeth!</h1>
          <p className="subtitle">
            DentBloom makes dental health fun, gentle, and memorable for toddlers and preschoolers aged 2–6.
          </p>
          <div className="hero-cta">
            <Link to="/songs" className="btn btn-primary">Explore Songs 🎵</Link>
            <Link to="/activities" className="btn btn-secondary">See Activities</Link>
          </div>
        </div>

        <div className="hero-characters">
          <div className="hero-char-row">
            <div className="hero-char-bubble">
              <AssetImage src="/assets/characters/bloomy.png" alt="Bloomy" width={64} height={64} />
            </div>
            <div className="hero-char-bubble">
              <AssetImage src="/assets/characters/luna.png" alt="Luna" width={64} height={64} />
            </div>
          </div>
          <div className="hero-char-row">
            <div className="hero-char-bubble">
              <AssetImage src="/assets/characters/teo.png" alt="Teo" width={64} height={64} />
            </div>
            <div className="hero-char-bubble">
              <AssetImage src="/assets/characters/lumy-fairy.png" alt="Lumy" width={64} height={64} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Links ── */}
      <section className="section">
        <div className="quick-links">
          {QUICK_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="quick-link" style={{ background: link.color, color: link.text }}>
              <span className="ql-icon">{link.icon}</span>
              <span className="ql-label">{link.label}</span>
              <span className="ql-arrow">›</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Songs ── */}
      <section className="section">
        <div className="section-header">
          <span style={{ fontSize: "1.4rem" }}>🎵</span>
          <h2>Featured Songs</h2>
          <Link to="/songs" className="see-all">See all →</Link>
        </div>
        <div className="grid-3">
          {SONGS.slice(0, 3).map((song) => (
            <Link key={song.id} to={`/songs/${song.slug}`} className="card">
              <div className="card-header-strip" style={{ background: song.color }}>
                <span style={{ fontSize: "3rem" }}>{song.emoji}</span>
              </div>
              <div className="card-body">
                <div className="card-title">{song.title}</div>
                <div className="card-meta">⏱ {song.duration}</div>
                <div className="card-desc">{song.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Activities ── */}
      <section className="section">
        <div className="section-header">
          <span style={{ fontSize: "1.4rem" }}>🎨</span>
          <h2>Activities</h2>
          <Link to="/activities" className="see-all">See all →</Link>
        </div>
        <div className="grid-2">
          {ACTIVITIES.slice(0, 2).map((act) => (
            <Link key={act.id} to={`/activities/${act.id}`} className="card">
              <div className="card-header-strip" style={{ background: act.color }}>
                <span style={{ fontSize: "3rem" }}>{act.emoji}</span>
              </div>
              <div className="card-body">
                <div className="card-title">{act.title}</div>
                <div className="card-meta">👶 {act.ageRange} &nbsp;·&nbsp; ⏱ {act.duration}</div>
                <div className="card-desc">{act.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
