// ANIMAL FRIENDS PAGE + Individual animal pages
import { Link, useParams } from "react-router-dom";
import { ANIMALS } from "../data/content";
import { AssetImg, EarnStarBtn } from "../components/ui/shared";
import { useStars } from "../data/StarsContext";
import { useState } from "react";
import "./AnimalsPage.css";

// ── Animals list ──────────────────────────────────────────────
export function AnimalsPage() {
  return (
    <div className="page">
      <Link to="/" className="back-btn">← Home</Link>
      <h1>Animal Friends 🐾</h1>
      <p className="subtitle" style={{ marginBottom: 28 }}>
        Meet our animal friends — each one has a fun movement activity and loves healthy teeth!
      </p>
      <div className="animals-grid">
        {ANIMALS.map((animal) => (
          <Link key={animal.id} to={`/animals/${animal.id}`} className="animal-card" style={{ borderColor: animal.color }}>
            <div className="animal-card-top" style={{ background: animal.color }}>
              <div className="animal-emoji-ph">{animal.emoji}</div>
              <AssetImg src={animal.imageSrc} alt={animal.name} width={90} height={90} style={{ position: "absolute", bottom: 0 }} />
            </div>
            <div className="animal-card-body">
              <div className="animal-name">{animal.name}</div>
              <div className="animal-desc">{animal.description.slice(0, 60)}…</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── Individual animal ─────────────────────────────────────────
export function AnimalDetailPage() {
  const { id } = useParams();
  const animal = ANIMALS.find(a => a.id === id);
  const { addStar } = useStars();
  const [starred, setStarred] = useState(false);

  if (!animal) return <div className="page"><Link to="/animals" className="back-btn">← Animals</Link><h2>Not found</h2></div>;

  const handleEarn = () => {
    if (!starred) { addStar(); setStarred(true); }
  };

  return (
    <div className="page animal-detail-page">
      <Link to="/animals" className="back-btn">← Animal Friends</Link>

      <div className="animal-hero" style={{ background: animal.color }}>
        <div className="animal-hero-emoji">{animal.emoji}</div>
        <h1>{animal.name}</h1>
        <p style={{ fontWeight: 700, color: "var(--text-mid)", marginTop: 6 }}>{animal.description}</p>
      </div>

      <div className="animal-fact">
        <span style={{ fontSize: "1.5rem" }}>🦷</span>
        <div>
          <div style={{ fontFamily: "var(--font-display)", color: "var(--teal)", fontSize: "0.9rem", marginBottom: 3 }}>Fun Tooth Fact!</div>
          <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{animal.funFact}</div>
        </div>
      </div>

      <div className="animal-movement">
        <h2>💃 Movement Activity</h2>
        <p className="subtitle" style={{ marginBottom: 16 }}>{animal.movement}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {animal.movementSteps.map((s) => (
            <div key={s.step} style={{ display: "flex", alignItems: "center", gap: 14, background: "var(--white)", borderRadius: "var(--r-md)", padding: "14px 18px", boxShadow: "var(--shadow-sm)", border: "2px solid var(--border)" }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--teal)", color: "white", fontFamily: "var(--font-display)", fontSize: "1.1rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {s.step}
              </div>
              <span style={{ fontWeight: 700 }}>{s.action}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 32 }}>
        {!starred ? (
          <EarnStarBtn onEarn={handleEarn} label={`⭐ I did the ${animal.name} move!`} />
        ) : (
          <div className="starred-confirm">
            <div style={{ fontSize: "3rem" }}>⭐</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--teal)" }}>Star earned! Amazing!</div>
            <Link to="/animals" className="btn btn-white" style={{ marginTop: 16 }}>See more animals</Link>
          </div>
        )}
      </div>
    </div>
  );
}
