// HOME PAGE — Childcare platform home
// Reflects the expanded Early Childhood Education vision.
// Keeps all existing sections + adds Projects as primary nav.

import { Link } from "react-router-dom";
import { useStars } from "../data/StarsContext";
import { AssetImg } from "../components/ui/shared";
import LanguageSelector from "../components/ui/LanguageSelector";
import useT from "../i18n/useT";
import { PROJECTS } from "../data/platform";
import "./HomePage.css";

export default function HomePage() {
  const { stars } = useStars();
  const t = useT();

  // The 4 main feature tiles — most important first
  const MAIN_TILES = [
    { to: "/projects",   label: t.mainNav?.projects    || "Projects",       emoji: "📚", color: "#085a64" },
    { to: "/songs",      label: t.mainNav?.songsVideos || "Songs & Videos", emoji: "🎵", color: "#fd5946" },
    { to: "/activities", label: t.mainNav?.cards       || "Activities",     emoji: "🎨", color: "#7c8d09" },
    { to: "/rewards",    label: t.home.myStars,                             emoji: "⭐", color: "#b8860b" },
  ];

  // Available projects (shown on home for quick access)
  const availableProjects = PROJECTS.filter(p => p.available);
  const comingProjects    = PROJECTS.filter(p => !p.available).slice(0, 4);

  return (
    <div className="home-page page">

      {/* ── Header ── */}
      <div className="home-header">
        <div className="home-logo-wrap">
          <img src="/assets/logo/dentbloom-logo.png" alt="DentBloom" className="home-logo"
            onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
          />
          <div className="home-logo-fallback" style={{ display: "none" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--teal)" }}>
              Dent<span style={{ color: "var(--coral)" }}>Bloom</span>
            </span>
            <span style={{ fontSize: "0.65rem", color: "var(--text-light)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {t.home.tagline}
            </span>
          </div>
        </div>
        <div className="home-header-right">
          <LanguageSelector size="small" />
          {stars > 0 && (
            <Link to="/rewards" className="home-stars-badge">
              ⭐ <span className="stars-text">{stars} {stars !== 1 ? t.home.stars : t.home.star}</span>
            </Link>
          )}
        </div>
      </div>

      {/* ── Characters ── */}
      <div className="home-characters">
        <div className="char-bubble">
          <AssetImg src="/assets/characters/luna.png" alt="Luna" width={70} height={70} />
        </div>
        <div className="char-bubble char-bubble-large">
          <AssetImg src="/assets/characters/bloomy.png" alt="Bloomy" width={90} height={90} />
        </div>
        <div className="char-bubble">
          <AssetImg src="/assets/characters/teo.png" alt="Teo" width={70} height={70} />
        </div>
      </div>

      {/* ── Platform subtitle ── */}
      <div className="home-platform-badge">
        <span>Early Childhood Education Platform</span>
      </div>

      {/* ── Today's Adventure CTA ── */}
      <Link to="/adventure" className="adventure-btn btn-bounce">
        <span className="adventure-icon">🌟</span>
        <div>
          <div className="adventure-title">{t.home.adventure}</div>
          <div className="adventure-sub">{t.home.adventureSub}</div>
        </div>
        <span className="adventure-arrow">›</span>
      </Link>

      {/* ── Main feature tiles ── */}
      <div className="home-tiles home-tiles-4">
        {MAIN_TILES.map((tile) => (
          <Link key={tile.to} to={tile.to} className="big-tile"
            style={{ background: `linear-gradient(140deg, ${tile.color}, ${tile.color}cc)` }}>
            <span className="big-tile-icon">{tile.emoji}</span>
            <span className="big-tile-label">{tile.label}</span>
          </Link>
        ))}
      </div>

      {/* ── Available projects ── */}
      {availableProjects.length > 0 && (
        <div className="home-projects-section">
          <div className="home-section-header">
            <h2>📚 Projects</h2>
            <Link to="/projects" className="see-all-link">See all →</Link>
          </div>
          <div className="home-projects-row">
            {availableProjects.map(p => (
              <Link key={p.id} to={`/projects/${p.id}`} className="home-project-chip"
                style={{ background: p.bgColor, borderColor: p.color, color: p.color }}>
                <span>{p.emoji}</span>
                <span>{p.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ── Coming soon projects ── */}
      {comingProjects.length > 0 && (
        <div className="home-projects-section">
          <div className="home-section-header">
            <h2>🔜 Coming Soon</h2>
            <Link to="/projects" className="see-all-link">View all →</Link>
          </div>
          <div className="home-projects-row">
            {comingProjects.map(p => (
              <Link key={p.id} to={`/projects/${p.id}`} className="home-project-chip home-project-chip--soon"
                style={{ borderColor: p.color, color: p.color }}>
                <span>{p.emoji}</span>
                <span>{p.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ── Secondary links ── */}
      <div className="home-secondary">
        <Link to="/animals"      className="secondary-link"><span>🐾</span> {t.home.animalFriends}</Link>
        <Link to="/characters"   className="secondary-link"><span>🌟</span> {t.nav.characters}</Link>
        <Link to="/certificates" className="secondary-link"><span>🏅</span> Certificates</Link>
        <Link to="/platform-dental" className="secondary-link"><span>🦷</span> Dental Clinics</Link>
        <Link to="/platform-family" className="secondary-link"><span>👨‍👩‍👧</span> Families</Link>
        <Link to="/account"      className="secondary-link"><span>👤</span> Account</Link>
      </div>

    </div>
  );
}
