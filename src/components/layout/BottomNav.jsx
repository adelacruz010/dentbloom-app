// MOBILE BOTTOM NAV
import { NavLink } from "react-router-dom";
import { useStars } from "../../data/StarsContext";

const ITEMS = [
  { to: "/",          icon: "🏠", label: "Home",    end: true },
  { to: "/songs",     icon: "🎵", label: "Songs" },
  { to: "/animals",   icon: "🐾", label: "Animals" },
  { to: "/rewards",   icon: "⭐", label: "Stars" },
  { to: "/parents",   icon: "👨‍👩‍👧", label: "Parents" },
];

export default function BottomNav() {
  const { stars } = useStars();
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-inner">
        {ITEMS.map(item => (
          <NavLink key={item.to} to={item.to} end={item.end}
            className={({ isActive }) => `bnav-btn ${isActive ? "active" : ""}`}>
            <span className="bnav-icon">
              {item.to === "/rewards" ? `${item.icon} ${stars}` : item.icon}
            </span>
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
