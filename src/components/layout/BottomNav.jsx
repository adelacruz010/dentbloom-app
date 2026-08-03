// MOBILE BOTTOM NAV — main 5 sections per spec
import { NavLink } from "react-router-dom";
import { useStars } from "../../data/StarsContext";
import useT from "../../i18n/useT";

export default function BottomNav() {
  const { stars } = useStars();
  const t = useT();

  const ITEMS = [
    { to: "/",           icon: "🏠", label: t.mainNav?.home        || "Home",     end: true },
    { to: "/projects",   icon: "📚", label: t.mainNav?.projects    || "Projects" },
    { to: "/songs",      icon: "🎵", label: t.mainNav?.songsVideos || "Songs" },
    { to: "/activities", icon: "🎨", label: t.mainNav?.cards       || "Activities" },
    { to: "/account",    icon: "👤", label: t.account?.title       || "Account" },
  ];

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-inner">
        {ITEMS.map(item => (
          <NavLink key={item.to} to={item.to} end={item.end}
            className={({ isActive }) => `bnav-btn ${isActive ? "active" : ""}`}>
            <span className="bnav-icon">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
