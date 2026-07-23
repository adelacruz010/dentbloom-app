// BLOOMY'S MAGIC GARDEN PAGE
import { Link } from "react-router-dom";
import useT from "../../i18n/useT";
import { GARDEN_WORKFLOW } from "../../data/characters";
import "./GardenPage.css";

const SUBSECTIONS = (t) => [
  { to: "/garden/characters", icon: "🌟", label: t.garden.characters, color: "#C8EFE3" },
  { to: "/garden/adventures", icon: "🌱", label: t.garden.adventures, color: "#d4f0e8" },
  { to: "/garden/journal",    icon: "📔", label: t.garden.journal,    color: "#fff8e6" },
  { to: "/garden/experiments",icon: "🔬", label: t.garden.experiments,color: "#e8e0f8" },
  { to: "/garden/nature",     icon: "🍃", label: t.garden.nature,     color: "#C8EFE3" },
  { to: "/garden/harvest",    icon: "🌾", label: t.garden.harvest,    color: "#face8f" },
  { to: "/garden/food",       icon: "🥗", label: t.garden.healthyFood,color: "#d4f0e8" },
  { to: "/garden/printables", icon: "📄", label: t.garden.printables, color: "#cce8f4" },
  { to: "/garden/songs",      icon: "🎵", label: t.garden.songs,      color: "#ffd6dc" },
  { to: "/garden/videos",     icon: "🎬", label: t.garden.videos,     color: "#e8e0f8" },
  { to: "/garden/teachers",   icon: "🏫", label: t.garden.teacher,    color: "#cce8f4" },
  { to: "/garden/parents",    icon: "👨‍👩‍👧", label: t.garden.parent,    color: "#fff8e6" },
];

export default function GardenPage() {
  const t = useT();
  const sections = SUBSECTIONS(t);

  return (
    <div className="page garden-page">
      <Link to="/" className="back-btn">{t.btn.back}</Link>

      <div className="garden-hero">
        <div className="garden-hero-emoji">🌱</div>
        <div>
          <h1>{t.garden.title}</h1>
          <p className="subtitle">{t.garden.subtitle}</p>
        </div>
      </div>

      {/* Garden workflow strip */}
      <div className="workflow-strip">
        {GARDEN_WORKFLOW.map((step) => (
          <div key={step.step} className="workflow-step">
            <div className="workflow-emoji">{step.emoji}</div>
            <div className="workflow-label">{step.label}</div>
          </div>
        ))}
      </div>

      <div className="garden-grid">
        {sections.map((sec) => (
          <Link key={sec.to} to={sec.to} className="garden-tile" style={{ background: sec.color }}>
            <span className="garden-tile-icon">{sec.icon}</span>
            <span className="garden-tile-label">{sec.label}</span>
            <span className="coming-soon" style={{ fontSize: "0.6rem", padding: "2px 8px" }}>Coming Soon</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
