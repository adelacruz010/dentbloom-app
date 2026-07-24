// HOME PAGE — Phase 2 with i18n and new collections
import { Link } from "react-router-dom";
import { useStars } from "../data/StarsContext";
import { AssetImg } from "../components/ui/shared";
import LanguageSelector from "../components/ui/LanguageSelector";
import useT from "../i18n/useT";
import "./HomePage.css";

export default function HomePage() {
  const { stars } = useStars();
  const t = useT();

  const TILES = [
    { to: "/songs",      label: t.home.songs,       emoji: "🎵", color: "#085a64" },
    { to: "/stories",    label: t.home.stories,      emoji: "📖", color: "#fd5946" },
    { to: "/activities", label: t.home.activities,   emoji: "🎨", color: "#7c8d09" },
    { to: "/rewards",    label: t.home.myStars,      emoji: "⭐", color: "#b8860b" },
    { to: "/garden",     label: t.home.magicGarden,  emoji: "🌱", color: "#2e7d32" },
    { to: "/kitchen",    label: t.home.kitchen,      emoji: "🍎", color: "#c0392b" },
  ];

  return (
    <div className="home-page page">

      {/* Header row */}
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

      {/* Characters */}
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

      {/* Adventure button */}
      <Link to="/adventure" className="adventure-btn btn-bounce">
        <span className="adventure-icon">🌟</span>
        <div>
          <div className="adventure-title">{t.home.adventure}</div>
          <div className="adventure-sub">{t.home.adventureSub}</div>
        </div>
        <span className="adventure-arrow">›</span>
      </Link>

      {/* 6 main tiles */}
      <div className="home-tiles home-tiles-6">
        {TILES.map((tile) => (
          <Link key={tile.to} to={tile.to} className="big-tile"
            style={{ background: `linear-gradient(140deg, ${tile.color}, ${tile.color}dd)` }}>
            <span className="big-tile-icon">{tile.emoji}</span>
            <span className="big-tile-label">{tile.label}</span>
          </Link>
        ))}
      </div>

      {/* Secondary links */}
      <div className="home-secondary">
        <Link to="/animals"        className="secondary-link"><span>🐾</span> {t.home.animalFriends}</Link>
        <Link to="/characters"     className="secondary-link"><span>🌟</span> {t.nav.characters}</Link>
        <Link to="/certificates"   className="secondary-link"><span>🏅</span> Certificates</Link>
        <Link to="/parents"        className="secondary-link"><span>👨‍👩‍👧</span> {t.home.forParents}</Link>
        <Link to="/educators"      className="secondary-link"><span>🏫</span> {t.home.forEducators}</Link>
        <Link to="/settings"       className="secondary-link"><span>⚙️</span> {t.nav.settings}</Link>
      </div>

    </div>
  );
}
