// PROGRESS BAR
// Visual bar showing progress toward the next reward milestone.
// Used on the Rewards page and can be reused on Home.

export default function ProgressBar({ current, target, color = "var(--teal)" }) {
  const pct = Math.min(100, (current / target) * 100);
  return (
    <div className="progress-bar-track">
      <div className="progress-bar-fill" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}
