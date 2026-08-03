// ProjectsPage.jsx + ProjectDetailPage.jsx
// Every project uses the same PROJECT_TEMPLATE layout:
//   Overview | Watch | Sing & Move | Explore & Learn | Activities | Educator Resources

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECTS, PROJECT_TEMPLATE, PROJECT_CONNECTIONS } from "../../data/platform";
import useT from "../../i18n/useT";
import "./ProjectsPage.css";

// ── Projects Hub ──────────────────────────────────────────────
export function ProjectsPage() {
  const t = useT();
  const [filter, setFilter] = useState("all"); // all | available | coming-soon
  const tp = t.projects || {};

  const filtered = PROJECTS.filter(p =>
    filter === "all"         ? true :
    filter === "available"   ? p.available :
    !p.available
  );

  // Project connection flow
  const CONNECTION_FLOW = [
    { emoji: "♻️", label: "Recycle",        id: "recycling" },
    { emoji: "🌱", label: "Garden",          id: "gardening" },
    { emoji: "🍎", label: "Cook",            id: "cooking" },
    { emoji: "🪥", label: "Healthy Habits",  id: "oral-health" },
  ];

  return (
    <div className="page projects-page">
      <h1>{tp.title || "Projects"}</h1>
      <p className="subtitle" style={{ marginBottom: 20 }}>{tp.subtitle || "Explore all DentBloom educational projects"}</p>

      {/* Connection flow strip */}
      <div className="project-flow-strip">
        {CONNECTION_FLOW.map((item, i, arr) => (
          <div key={item.id} className="pflow-item">
            <Link to={`/projects/${item.id}`} className="pflow-chip">
              <span>{item.emoji}</span>
              <span>{item.label}</span>
            </Link>
            {i < arr.length - 1 && <span className="pflow-arrow">→</span>}
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div className="project-filter-tabs">
        {["all", "available", "coming-soon"].map(f => (
          <button
            key={f}
            className={`project-filter-tab ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f === "all" ? "All" : f === "available" ? "✅ Available" : "🔜 Coming Soon"}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="projects-grid">
        {filtered.map(project => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className={`project-card ${!project.available ? "project-card--soon" : ""}`}
            style={{ borderColor: project.color }}
          >
            <div className="project-card-top" style={{ background: project.bgColor }}>
              <span className="project-card-emoji">{project.emoji}</span>
              {!project.available && (
                <span className="project-coming-badge">Coming Soon</span>
              )}
            </div>
            <div className="project-card-body">
              <div className="project-card-title" style={{ color: project.color }}>{project.title}</div>
              <div className="project-card-category">{project.category}</div>
              <div className="project-card-desc">{project.description}</div>
              <div className="project-card-meta">
                <span>👶 {project.ageGroup}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── Project Detail — reusable template ───────────────────────
export function ProjectDetailPage() {
  const { id } = useParams();
  const t = useT();
  const tp = t.projects || {};
  const project = PROJECTS.find(p => p.id === id);
  const [activeSection, setActiveSection] = useState("overview");

  if (!project) return (
    <div className="page">
      <Link to="/projects" className="back-btn">← Projects</Link>
      <h2>Project not found</h2>
    </div>
  );

  const relatedProject = project.relatedProjectId
    ? PROJECTS.find(p => p.id === project.relatedProjectId)
    : null;

  return (
    <div className="page project-detail-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link><span>›</span>
        <Link to="/projects">Projects</Link><span>›</span>
        <span>{project.title}</span>
      </div>

      {/* Project hero */}
      <div className="project-hero" style={{ background: project.bgColor, borderColor: project.color }}>
        <div className="project-hero-emoji">{project.emoji}</div>
        <div className="project-hero-text">
          <h1 style={{ color: project.color }}>{project.title}</h1>
          <div className="project-hero-meta">
            <span className="tag" style={{ background: project.bgColor, color: project.color }}>
              {project.category}
            </span>
            <span style={{ fontWeight: 700, fontSize: "0.85rem", color: project.color }}>
              👶 {project.ageGroup}
            </span>
          </div>
          <p className="subtitle" style={{ marginTop: 8 }}>{project.description}</p>
          {!project.available && (
            <span className="coming-soon" style={{ marginTop: 8, display: "inline-flex" }}>
              🔜 Coming Soon
            </span>
          )}
        </div>
      </div>

      {/* Section tabs — the reusable template */}
      <div className="project-tabs">
        {PROJECT_TEMPLATE.map(section => (
          <button
            key={section.id}
            className={`project-tab ${activeSection === section.id ? "active" : ""}`}
            style={activeSection === section.id ? { borderBottomColor: project.color, color: project.color } : {}}
            onClick={() => setActiveSection(section.id)}
          >
            <span>{section.emoji}</span>
            <span>{tp[section.labelKey] || section.label}</span>
          </button>
        ))}
      </div>

      {/* Section content */}
      <div className="project-section-content">
        {activeSection === "overview" && (
          <OverviewSection project={project} relatedProject={relatedProject} t={tp} />
        )}
        {activeSection !== "overview" && (
          <ComingSoonSection
            section={PROJECT_TEMPLATE.find(s => s.id === activeSection)}
            available={project.available}
          />
        )}
      </div>
    </div>
  );
}

// ── Overview section ──────────────────────────────────────────
function OverviewSection({ project, relatedProject, t }) {
  const sectionData = project.sections?.overview;

  return (
    <div className="overview-section">
      {sectionData?.description && (
        <div className="overview-desc">
          <p>{sectionData.description}</p>
        </div>
      )}

      {/* Learning goals */}
      {sectionData?.learningGoals?.length > 0 && (
        <div className="overview-goals">
          <h3>🎯 {t.learningGoals || "Learning Goals"}</h3>
          <ul className="goals-list">
            {sectionData.learningGoals.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Workflow if present */}
      {sectionData?.workflow && (
        <div className="overview-workflow">
          <h3>🔄 Project Workflow</h3>
          <div className="workflow-chips">
            {sectionData.workflow.map((step, i, arr) => (
              <div key={i} className="wf-item">
                <span className="wf-chip">{step}</span>
                {i < arr.length - 1 && <span className="wf-arrow">→</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Activities list if present */}
      {project.sections?.activities?.length > 0 && (
        <div className="overview-activities">
          <h3>🎨 Activities</h3>
          <div className="activity-chips">
            {project.sections.activities.map(act => (
              <div key={act.id} className={`activity-chip ${!act.available ? "activity-chip--soon" : ""}`}>
                <span>{act.title}</span>
                {!act.available && <span className="chip-soon">Soon</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Characters */}
      {project.characters?.length > 0 && (
        <div className="overview-characters">
          <h3>👋 Characters</h3>
          <div className="char-chips">
            {project.characters.map(c => (
              <span key={c} className="char-chip">{c.replace(/-/g, " ")}</span>
            ))}
          </div>
        </div>
      )}

      {/* Related project connection */}
      {relatedProject && (
        <div className="overview-related">
          <h3>🔗 Connects to</h3>
          <Link to={`/projects/${relatedProject.id}`} className="related-project-card"
            style={{ borderColor: relatedProject.color, background: relatedProject.bgColor }}>
            <span style={{ fontSize: "2rem" }}>{relatedProject.emoji}</span>
            <div>
              <div style={{ fontFamily: "var(--font-display)", color: relatedProject.color }}>{relatedProject.title}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-mid)", fontWeight: 600 }}>{relatedProject.description.slice(0, 60)}…</div>
            </div>
            <span style={{ marginLeft: "auto", color: relatedProject.color, fontSize: "1.4rem" }}>›</span>
          </Link>
        </div>
      )}

      {!project.available && (
        <div className="overview-coming-soon">
          <div style={{ fontSize: "3rem", marginBottom: 10 }}>🌱</div>
          <h3>This project is being developed</h3>
          <p>Full content — videos, songs, activities and educator resources — will be available soon.</p>
        </div>
      )}
    </div>
  );
}

// ── Coming soon section ───────────────────────────────────────
function ComingSoonSection({ section, available }) {
  return (
    <div className="coming-soon-section">
      <div style={{ fontSize: "3.5rem", marginBottom: 12 }}>{section.emoji}</div>
      <h3>{section.label}</h3>
      <p className="subtitle">
        {available
          ? "Content for this section is being added — check back soon!"
          : "This section will be available when the project launches."}
      </p>
      <span className="coming-soon" style={{ marginTop: 16 }}>🔜 Coming Soon</span>
    </div>
  );
}
