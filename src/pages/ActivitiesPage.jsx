// ACTIVITIES PAGE
// Lists all DentBloom activities.

import { Link } from "react-router-dom";
import { ACTIVITIES } from "../data/content";
import { SectionTitle } from "../components/ui/shared";

export default function ActivitiesPage() {
  return (
    <div className="page">
      <SectionTitle emoji="🎨" title="Activities" count={`${ACTIVITIES.length} activities`} />
      <p className="subtitle" style={{ marginBottom: 28 }}>
        Hands-on activities that make dental health learning fun and memorable.
      </p>

      <div className="grid-2">
        {ACTIVITIES.map((act) => (
          <Link key={act.id} to={`/activities/${act.id}`} className="card">
            <div className="card-header-strip" style={{ background: act.color }}>
              <span style={{ fontSize: "3rem" }}>{act.emoji}</span>
            </div>
            <div className="card-body">
              <div className="card-title">{act.title}</div>
              <div className="card-meta">👶 {act.ageRange} &nbsp;·&nbsp; ⏱ {act.duration}</div>
              <div className="card-desc">{act.description}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                {act.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 24 }}>
        <span className="coming-soon">🎨 More activities coming soon!</span>
      </div>
    </div>
  );
}
