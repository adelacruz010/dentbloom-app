// BLOOMY'S KITCHEN PAGE
import { Link } from "react-router-dom";
import useT from "../../i18n/useT";
import { KITCHEN_WORKFLOW } from "../../data/characters";
import "./KitchenPage.css";

const SUBSECTIONS = (t) => [
  { to: "/kitchen/recipes",      icon: "🍽️", label: t.kitchen.recipes,      color: "#ffd6dc" },
  { to: "/kitchen/videos",       icon: "🎬", label: t.kitchen.videos,       color: "#cce8f4" },
  { to: "/kitchen/cards",        icon: "📇", label: t.kitchen.cards,        color: "#fff8e6" },
  { to: "/kitchen/snacks",       icon: "🍎", label: t.kitchen.snacks,       color: "#d4f0e8" },
  { to: "/kitchen/safety",       icon: "🛡️", label: t.kitchen.safety,       color: "#face8f" },
  { to: "/kitchen/handwashing",  icon: "🙌", label: t.kitchen.handWashing,  color: "#cce8f4" },
  { to: "/kitchen/habits",       icon: "💛", label: t.kitchen.habits,       color: "#fff8e6" },
  { to: "/kitchen/songs",        icon: "🎵", label: t.kitchen.songs,        color: "#ffd6dc" },
  { to: "/kitchen/printables",   icon: "📄", label: t.kitchen.printables,   color: "#e8e0f8" },
  { to: "/kitchen/certificates", icon: "🏅", label: t.kitchen.certificates, color: "#face8f" },
  { to: "/kitchen/teachers",     icon: "🏫", label: t.kitchen.teacher,      color: "#cce8f4" },
  { to: "/kitchen/parents",      icon: "👨‍👩‍👧", label: t.kitchen.parent,      color: "#d4f0e8" },
];

export default function KitchenPage() {
  const t = useT();
  const sections = SUBSECTIONS(t);

  return (
    <div className="page kitchen-page">
      <Link to="/" className="back-btn">{t.btn.back}</Link>

      <div className="kitchen-hero">
        <div className="kitchen-hero-emoji">🍎</div>
        <div>
          <h1>{t.kitchen.title}</h1>
          <p className="subtitle">{t.kitchen.subtitle}</p>
        </div>
      </div>

      {/* Kitchen workflow strip */}
      <div className="kitchen-workflow-strip">
        <div className="workflow-title">{t.kitchen.workflow}</div>
        <div className="workflow-steps-row">
          {KITCHEN_WORKFLOW.map((step, i) => (
            <div key={step.step} className="kitchen-workflow-step">
              <div className="kitchen-step-emoji">{step.emoji}</div>
              <div className="kitchen-step-label">{t.kitchen[`step${step.step}`] || step.label}</div>
              {i < KITCHEN_WORKFLOW.length - 1 && <div className="workflow-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="kitchen-grid">
        {sections.map((sec) => (
          <Link key={sec.to} to={sec.to} className="kitchen-tile" style={{ background: sec.color }}>
            <span className="kitchen-tile-icon">{sec.icon}</span>
            <span className="kitchen-tile-label">{sec.label}</span>
            <span className="coming-soon" style={{ fontSize: "0.6rem", padding: "2px 8px" }}>Coming Soon</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
