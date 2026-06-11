// TOP NAVIGATION BAR
// Appears on every page. Shows the DentBloom logo and main nav links.
// On mobile, collapses to a hamburger menu.

import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./TopNav.css";

const NAV_LINKS = [
  { to: "/",           label: "Home",             icon: "🏠" },
  { to: "/songs",      label: "Songs",             icon: "🎵" },
  { to: "/activities", label: "Activities",        icon: "🎨" },
  { to: "/resources/movement-cards", label: "Movement Cards", icon: "💃" },
  { to: "/resources/parents",  label: "Parents",   icon: "👨‍👩‍👧" },
  { to: "/resources/teachers", label: "Teachers",  icon: "🏫" },
  { to: "/about",      label: "About Bloomy",      icon: "🌸" },
];

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="top-nav">
      <div className="nav-inner">

        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img
            src="/assets/logo/dentbloom-logo.png"
            alt="DentBloom"
            className="nav-logo-img"
            onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
          />
          <span className="nav-logo-fallback">🌸 DentBloom</span>
        </Link>

        {/* Desktop nav links */}
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Hamburger (mobile) */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `mobile-link ${isActive ? "active" : ""}`}
              onClick={closeMenu}
            >
              <span className="mobile-link-icon">{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
