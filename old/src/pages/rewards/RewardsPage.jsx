// REWARDS PAGE - Star counter, progress bar, and milestone tracker
import { Link } from "react-router-dom";
import { useStars, MILESTONES } from "../../data/StarsContext";
import ProgressBar from "../../components/ui/ProgressBar";
import "./RewardsPage.css";

export default function RewardsPage() {
  const { stars, resetStars } = useStars();
  const next = MILESTONES.find(m => m.stars > stars);
  const starsToNext = next ? next.stars - stars : 0;
  const prevMilestone = [...MILESTONES].reverse().find(m => m.stars <= stars);
  const rangeStart = prevMilestone ? prevMilestone.stars : 0;
  const rangeEnd = next ? next.stars : stars || 1;

  return (
    <div className="page rewards-page">
      <Link to="/" className="back-btn">← Home</Link>
      <h1>My Stars ⭐</h1>
      <p className="subtitle" style={{ marginBottom: 24 }}>Keep brushing, singing, and learning to earn more stars!</p>

      {/* Big star count */}
      <div className="star-count-card">
        <div className="star-count-number">{stars}</div>
        <div className="star-count-label">Stars Earned</div>

        {/* Progress bar toward next milestone */}
        {next ? (
          <div className="progress-section">
            <ProgressBar current={stars - rangeStart} target={rangeEnd - rangeStart} color="var(--teal)" />
            <div className="progress-caption">
              {stars} / {next.stars} stars earned
            </div>
            <div className="next-reward-indicator">
              <span style={{ fontSize: "1.3rem" }}>{next.emoji}</span>
              <span>{starsToNext} more star{starsToNext !== 1 ? "s" : ""} to unlock <strong>{next.label}</strong></span>
            </div>
          </div>
        ) : (
          <div className="next-reward-indicator" style={{ marginTop: 12 }}>
            <span style={{ fontSize: "1.3rem" }}>🏆</span>
            <span>All rewards unlocked — you're a Super Smiler!</span>
          </div>
        )}
      </div>

      {/* Simple star row visual: ☆☆★★★ style */}
      {stars > 0 && next && (
        <div className="star-row-display">
          <span className="star-row">
            {Array.from({ length: next.stars }).map((_, i) => (
              <span key={i} className={i < stars ? "star-filled" : "star-empty"}>★</span>
            ))}
          </span>
        </div>
      )}

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
          <Link to="/adventure" className="btn btn-primary btn-bounce" style={{ marginTop: 20 }}>
            Start Today's Adventure 🌟
          </Link>
        </div>
      )}

      {/* Milestone tracker */}
      <h2 style={{ marginTop: 36, marginBottom: 16 }}>Rewards to unlock</h2>
      <div className="milestones-list">
        {MILESTONES.map((m) => {
          const unlocked = stars >= m.stars;
          const isNext = next && m.stars === next.stars;
          const milestonePct = Math.min(100, (stars / m.stars) * 100);
          return (
            <div key={m.stars} className={`milestone-card ${unlocked ? "unlocked" : ""} ${isNext ? "is-next" : ""}`} style={{ borderColor: unlocked ? m.color : isNext ? "var(--teal)" : "var(--border)" }}>
              <div className="milestone-emoji" style={{ background: unlocked ? m.color : "var(--cream-dark)" }}>
                {unlocked ? m.emoji : "🔒"}
              </div>
              <div style={{ flex: 1 }}>
                <div className="milestone-label">
                  {m.label}
                  {isNext && <span className="next-badge">Next!</span>}
                </div>
                <div className="milestone-stars">⭐ {m.stars} stars {unlocked ? "— Unlocked!" : `— ${Math.max(0, m.stars - stars)} to go`}</div>
                {!unlocked && (
                  <div className="milestone-mini-progress">
                    <ProgressBar current={stars} target={m.stars} color={isNext ? "var(--teal)" : "var(--border-mid)"} />
                  </div>
                )}
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
