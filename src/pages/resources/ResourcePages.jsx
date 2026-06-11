// ============================================================
// RESOURCE PAGES
// Movement Cards, Posters, Parent Resources, Teacher Resources
// Each follows the same simple card-grid + download pattern.
// ============================================================

import { Link } from "react-router-dom";
import { MOVEMENT_CARDS, POSTERS, PARENT_RESOURCES, TEACHER_RESOURCES } from "../../data/content";
import { PDFDownloadButton, SectionTitle, AssetImage } from "../../components/ui/shared";
import "./ResourcePages.css";

// ── Shared Resource Card ──────────────────────────────────────
function ResourceCard({ item, showAge = false }) {
  return (
    <div className="resource-card">
      <div className="resource-card-top" style={{ background: item.color }}>
        {item.thumbnailSrc ? (
          <AssetImage src={item.thumbnailSrc} alt={item.title} width="100%" height={120} />
        ) : (
          <span className="resource-card-icon">{item.icon || item.emoji || "📄"}</span>
        )}
      </div>
      <div className="resource-card-body">
        <div className="resource-card-title">{item.title}</div>
        {showAge && item.ageRange && (
          <div className="resource-card-meta">👶 {item.ageRange}</div>
        )}
        {item.description && (
          <p className="resource-card-desc">{item.description}</p>
        )}
        {item.pdfSrc && (
          <PDFDownloadButton label="Download PDF" file={item.pdfSrc} compact />
        )}
      </div>
    </div>
  );
}

// ── Movement Cards Page ───────────────────────────────────────
export function MovementCardsPage() {
  return (
    <div className="page">
      <div className="breadcrumb">
        <Link to="/">Home</Link><span>›</span><span>Movement Cards</span>
      </div>
      <SectionTitle emoji="💃" title="Movement Cards" count={`${MOVEMENT_CARDS.length} cards`} />
      <p className="subtitle" style={{ marginBottom: 28 }}>
        Printable movement cards for each DentBloom song — great for classroom walls, music corners, or home use.
      </p>
      <div className="grid-3">
        {MOVEMENT_CARDS.map((card) => (
          <ResourceCard key={card.id} item={card} />
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <span className="coming-soon">💃 More movement cards added with each new song</span>
      </div>
    </div>
  );
}

// ── Posters Page ──────────────────────────────────────────────
export function PostersPage() {
  return (
    <div className="page">
      <div className="breadcrumb">
        <Link to="/">Home</Link><span>›</span><span>Posters</span>
      </div>
      <SectionTitle emoji="🖼️" title="Posters" count={`${POSTERS.length} posters`} />
      <p className="subtitle" style={{ marginBottom: 28 }}>
        Colourful, printable posters for classrooms, bathrooms, and waiting rooms.
      </p>
      <div className="grid-3">
        {POSTERS.map((poster) => (
          <ResourceCard key={poster.id} item={poster} />
        ))}
      </div>
    </div>
  );
}

// ── Parent Resources Page ─────────────────────────────────────
export function ParentResourcesPage() {
  return (
    <div className="page">
      <div className="breadcrumb">
        <Link to="/">Home</Link><span>›</span><span>Parent Resources</span>
      </div>
      <SectionTitle emoji="👨‍👩‍👧" title="For Parents" count={`${PARENT_RESOURCES.length} guides`} />
      <p className="subtitle" style={{ marginBottom: 28 }}>
        Practical, friendly guides to help you support your child's dental health at home.
      </p>
      <div className="grid-2">
        {PARENT_RESOURCES.map((r) => (
          <ResourceCard key={r.id} item={r} />
        ))}
      </div>
    </div>
  );
}

// ── Teacher Resources Page ────────────────────────────────────
export function TeacherResourcesPage() {
  return (
    <div className="page">
      <div className="breadcrumb">
        <Link to="/">Home</Link><span>›</span><span>Teacher Resources</span>
      </div>
      <SectionTitle emoji="🏫" title="For Teachers & Educators" count={`${TEACHER_RESOURCES.length} resources`} />
      <p className="subtitle" style={{ marginBottom: 28 }}>
        Lesson plans, curriculum links, and classroom packs for early childhood educators.
      </p>
      <div className="grid-2">
        {TEACHER_RESOURCES.map((r) => (
          <ResourceCard key={r.id} item={r} showAge />
        ))}
      </div>
    </div>
  );
}
