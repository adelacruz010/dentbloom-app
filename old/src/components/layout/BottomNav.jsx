// MOBILE BOTTOM NAV — Phase 2
import { NavLink } from "react-router-dom";
import { useStars } from "../../data/StarsContext";
import useT from "../../i18n/useT";

export default function BottomNav() {
  const { stars } = useStars();
  const t = useT();

  const ITEMS = [
    { to: "/",          icon: "🏠", label: t.nav.home,       end: true },
    { to: "/songs",     icon: "🎵", label: t.nav.songs },
    { to: "/garden",    icon: "🌱", label: "Garden" },
    { to: "/kitchen",   icon: "🍎", label: "Kitchen" },
    { to: "/rewards",   icon: "⭐", label: t.nav.stars, stars: true },
  ];

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-inner">
        {ITEMS.map(item => (
          <NavLink key={item.to} to={item.to} end={item.end}
            className={({ isActive }) => `bnav-btn ${isActive ? "active" : ""}`}>
            <span className="bnav-icon">
              {item.stars ? `${item.icon} ${stars}` : item.icon}
            </span>
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
