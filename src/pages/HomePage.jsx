// HOME PAGE
// Simple, immediate, child-friendly.
// 4 big colourful tiles + Today's Smile Adventure button.

import { Link } from "react-router-dom";
import { useStars } from "../data/StarsContext";
import { AssetImg } from "../components/ui/shared";
import "./HomePage.css";

const TILES = [
  { to: "/songs",      label: "Songs",          emoji: "🎵", color: "#085a64" },
  { to: "/stories",    label: "Stories",         emoji: "📖", color: "#fd5946" },
  { to: "/activities", label: "Activities",      emoji: "🎨", color: "#7c8d09" },
  { to: "/rewards",    label: "My Stars",        emoji: "⭐", color: "#b8860b" },
];

export default function HomePage() {
  const { stars } = useStars();

  return (
    <div className="home-page page">

      {/* Logo + greeting */}
      <div className="home-header">
        <div className="home-logo-wrap">
          <img
            src="/assets/logo/dentbloom-logo.png"
            alt="DentBloom"
            className="home-logo"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="home-logo-fallback" style={{ display: "none" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--teal)" }}>
              Dent<span style={{ color: "var(--coral)" }}>Bloom</span>
            </span>
            <span style={{ fontSize: "0.7rem", color: "var(--text-light)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Smiles · Routines · Confidence
            </span>
          </div>
        </div>

        {/* Star count */}
        {stars > 0 && (
          <Link to="/rewards" className="home-stars-badge">
            ⭐ {stars} star{stars !== 1 ? "s" : ""}
          </Link>
        )}
      </div>

      {/* Characters strip */}
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

      {/* Today's Smile Adventure CTA */}
      <Link to="/adventure" className="adventure-btn">
        <span className="adventure-icon">🌟</span>
        <div>
          <div className="adventure-title">Today's Smile Adventure</div>
          <div className="adventure-sub">Song → Story → Activity → Reward</div>
        </div>
        <span className="adventure-arrow">›</span>
      </Link>

      {/* 4 Main tiles */}
      <div className="home-tiles">
        {TILES.map((tile) => (
          <Link
            key={tile.to}
            to={tile.to}
            className="big-tile"
            style={{ background: `linear-gradient(140deg, ${tile.color}, ${tile.color}dd)` }}
          >
            <span className="big-tile-icon">{tile.emoji}</span>
            <span className="big-tile-label">{tile.label}</span>
          </Link>
        ))}
      </div>

      {/* Secondary links */}
      <div className="home-secondary">
        <Link to="/animals" className="secondary-link">
          <span>🐾</span> Animal Friends
        </Link>
        <Link to="/parents" className="secondary-link">
          <span>👨‍👩‍👧</span> For Parents
        </Link>
        <Link to="/educators" className="secondary-link">
          <span>🏫</span> For Educators
        </Link>
      </div>

    </div>
  );
}
