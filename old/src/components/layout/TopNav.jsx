// TOP NAVIGATION BAR — Phase 2
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useStars } from "../../data/StarsContext";
import LanguageSelector from "../ui/LanguageSelector";
import useT from "../../i18n/useT";

const getLinks = (t) => [
  { to: "/",           label: t.nav.home,       end: true },
  { to: "/songs",      label: t.nav.songs },
  { to: "/stories",    label: t.nav.stories },
  { to: "/activities", label: t.nav.activities },
  { to: "/animals",    label: t.nav.animals },
  { to: "/garden",     label: t.nav.garden },
  { to: "/kitchen",    label: t.nav.kitchen },
  { to: "/characters", label: t.nav.characters },
  { to: "/parents",    label: t.nav.parents },
  { to: "/educators",  label: t.nav.educators },
  { to: "/settings",   label: "⚙️ " + t.nav.settings },
];

export default function TopNav() {
  const { stars } = useStars();
  const t = useT();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = getLinks(t);

  return (
    <nav className="top-nav">
      <div className="top-nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <img src="/assets/logo/dentbloom-logo.png" alt="DentBloom"
            className="nav-logo-img"
            onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
          />
          <span className="nav-logo-text" style={{ display: "none" }}>Dent<span style={{color:"var(--coral)"}}>Bloom</span></span>
        </Link>

        <div className="nav-links">
          {links.slice(0, 6).map(l => (
            <NavLink key={l.to} to={l.to} end={l.end}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-right">
          <LanguageSelector size="small" />
          <Link to="/rewards" className="nav-star">⭐ {stars}</Link>
          <button className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="nav-dropdown">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.end}
              className={({ isActive }) => `nav-dropdown-link ${isActive ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <div style={{ padding: "10px 16px 14px", borderTop: "1px solid var(--border)" }}>
            <LanguageSelector size="small" />
          </div>
        </div>
      )}
    </nav>
  );
}
