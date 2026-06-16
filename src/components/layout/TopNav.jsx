// TOP NAVIGATION BAR
import { NavLink, Link } from "react-router-dom";
import { useStars } from "../../data/StarsContext";

const LINKS = [
  { to: "/",          label: "Home",       end: true },
  { to: "/songs",     label: "Songs" },
  { to: "/stories",   label: "Stories" },
  { to: "/activities",label: "Activities" },
  { to: "/animals",   label: "Animal Friends" },
  { to: "/parents",   label: "For Parents" },
  { to: "/educators", label: "For Educators" },
];

export default function TopNav() {
  const { stars } = useStars();
  return (
    <nav className="top-nav">
      <div className="top-nav-inner">
        <Link to="/" className="nav-logo">
          <img src="/assets/logo/dentbloom-logo.png" alt="DentBloom"
            className="nav-logo-img"
            onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "inline"; }}
          />
          <span className="nav-logo-text" style={{ display: "none" }}>Dent<span>Bloom</span></span>
        </Link>

        <div className="nav-links">
          {LINKS.map(l => (
            <NavLink key={l.to} to={l.to} end={l.end}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <Link to="/rewards" className="nav-star">⭐ {stars}</Link>
      </div>
    </nav>
  );
}
