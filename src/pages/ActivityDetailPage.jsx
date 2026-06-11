// ACTIVITY DETAIL PAGE
// Full view of a single DentBloom activity.

import { useParams, Link } from "react-router-dom";
import { ACTIVITIES } from "../data/content";
import { PDFDownloadButton, TagList } from "../components/ui/shared";
import "./ActivityDetailPage.css";

export default function ActivityDetailPage() {
  const { id } = useParams();
  const act = ACTIVITIES.find((a) => a.id === id);

  if (!act) {
    return (
      <div className="page">
        <Link to="/activities" className="back-btn">← Back to Activities</Link>
        <h1>Activity not found</h1>
      </div>
    );
  }

  return (
    <div className="page">

      <div className="breadcrumb">
        <Link to="/">Home</Link><span>›</span>
        <Link to="/activities">Activities</Link><span>›</span>
        <span>{act.title}</span>
      </div>

      {/* Header */}
      <div className="activity-hero" style={{ background: act.color }}>
        <span style={{ fontSize: "4rem" }}>{act.emoji}</span>
        <div>
          <h1 style={{ color: act.textColor }}>{act.title}</h1>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
            <span style={{ fontWeight: 800, color: act.textColor, fontSize: "0.88rem" }}>👶 {act.ageRange}</span>
            <span style={{ fontWeight: 800, color: act.textColor, fontSize: "0.88rem" }}>⏱ {act.duration}</span>
          </div>
          <p style={{ color: act.textColor, opacity: 0.8, fontWeight: 700, marginTop: 8 }}>{act.description}</p>
        </div>
      </div>

      <div className="activity-layout">
        <div className="activity-main">

          {/* Instructions */}
          <section style={{ marginBottom: 28 }}>
            <h2>📋 Instructions</h2>
            <ol className="instructions-list">
              {act.instructions.map((step, i) => (
                <li key={i} className="instruction-step">
                  <span className="step-num">{i + 1}</span>
                  <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Materials */}
          <section style={{ marginBottom: 28 }}>
            <h2>🧰 You'll need</h2>
            <ul className="materials-list">
              {act.materials.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </section>

          <TagList tags={act.tags} />
        </div>

        {/* Sidebar */}
        <aside className="activity-sidebar">
          <div className="sidebar-card">
            <h3>📄 Download</h3>
            <PDFDownloadButton label="Activity PDF" file={act.pdfSrc} />
          </div>
          <Link to="/activities" className="back-btn" style={{ width: "100%", justifyContent: "center" }}>
            ← All Activities
          </Link>
        </aside>
      </div>
    </div>
  );
}
