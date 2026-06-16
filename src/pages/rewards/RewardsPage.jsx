// REWARDS PAGE - Star counter and milestones
import { Link } from "react-router-dom";
import { useStars, MILESTONES } from "../../data/StarsContext";
import "./RewardsPage.css";

export default function RewardsPage() {
  const { stars, resetStars } = useStars();
  const next = MILESTONES.find(m => m.stars > stars);
  const starsToNext = next ? next.stars - stars : 0;

  return (
    <div className="page rewards-page">
      <Link to="/" className="back-btn">← Home</Link>
      <h1>My Stars ⭐</h1>
      <p className="subtitle" style={{ marginBottom: 28 }}>Keep brushing, singing, and learning to earn more stars!</p>

      {/* Big star count */}
      <div className="star-count-card">
        <div className="star-count-number">{stars}</div>
        <div className="star-count-label">Stars Earned</div>
        {next && (
          <div className="star-count-next">
            {starsToNext} more to earn: <strong>{next.label} {next.emoji}</strong>
          </div>
        )}
      </div>

      {/* Star grid */}
      {stars > 0 && (
        <div className="stars-grid">
          {Array.from({ length: stars }).map((_, i) => (
            <div key={i} className="star-item" style={{ animationDelay: `${i * 0.05}s` }}>⭐</div>
          ))}
        </div>
      )}

      {stars === 0 && (
        <div className="no-stars">
          <div style={{ fontSize: "3rem", marginBottom: 12 }}>🌱</div>
          <p>Complete songs, stories, and activities to earn your first star!</p>
          <Link to="/adventure" className="btn btn-primary" style={{ marginTop: 20 }}>
            Start Today's Adventure 🌟
          </Link>
        </div>
      )}

      {/* Milestones */}
      <h2 style={{ marginTop: 36, marginBottom: 16 }}>Rewards to unlock</h2>
      <div className="milestones-list">
        {MILESTONES.map((m) => {
          const unlocked = stars >= m.stars;
          return (
            <div key={m.stars} className={`milestone-card ${unlocked ? "unlocked" : ""}`} style={{ borderColor: unlocked ? m.color : "var(--border)" }}>
              <div className="milestone-emoji" style={{ background: unlocked ? m.color : "var(--cream-dark)" }}>
                {unlocked ? m.emoji : "🔒"}
              </div>
              <div>
                <div className="milestone-label">{m.label}</div>
                <div className="milestone-stars">⭐ {m.stars} stars {unlocked ? "— Unlocked!" : `— ${Math.max(0, m.stars - stars)} to go`}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* How to earn */}
      <div className="earn-ways">
        <h3>How to earn stars</h3>
        <div className="earn-grid">
          {[
            { emoji: "🎵", label: "Complete a Song" },
            { emoji: "📖", label: "Finish a Story" },
            { emoji: "🎨", label: "Do an Activity" },
            { emoji: "🐾", label: "Visit an Animal Friend" },
            { emoji: "🌟", label: "Complete the Daily Adventure" },
          ].map(e => (
            <div key={e.label} className="earn-chip">
              <span>{e.emoji}</span>
              <span>{e.label}</span>
            </div>
          ))}
        </div>
      </div>

      {stars > 0 && (
        <button onClick={resetStars} style={{ background: "none", border: "none", color: "var(--text-light)", fontSize: "0.75rem", cursor: "pointer", marginTop: 24 }}>
          Reset stars (for testing)
        </button>
      )}
    </div>
  );
}
