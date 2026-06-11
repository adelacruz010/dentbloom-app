// BOTTOM NAV — mobile only
// Fixed to the bottom of the screen on phones and small tablets.
// Shows the 5 most important sections. Hidden on desktop.

import { NavLink } from "react-router-dom";

const ITEMS = [
  { to: "/",           icon: "🏠", label: "Home"     },
  { to: "/songs",      icon: "🎵", label: "Songs"    },
  { to: "/activities", icon: "🎨", label: "Activities" },
  { to: "/resources/movement-cards", icon: "💃", label: "Cards" },
  { to: "/about",      icon: "🌸", label: "About"    },
];

export default function BottomNav() {
  return (
    <nav className="mobile-bottom-nav" role="navigation" aria-label="Main navigation">
      <div className="mobile-bottom-nav-inner">
        {ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) => `mob-nav-btn ${isActive ? "active" : ""}`}
          >
            <span className="mob-icon">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
