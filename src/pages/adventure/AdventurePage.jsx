// TODAY'S SMILE ADVENTURE
// Guides the child through: Song → Story → Activity → Reward
// Each step earns a star at the end.

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStars } from "../../data/StarsContext";
import { SONGS, STORIES, ACTIVITIES } from "../../data/content";
import { VideoEmbed } from "../../components/ui/shared";
import "./AdventurePage.css";

const STEPS = ["intro", "song", "story", "activity", "reward"];

export default function AdventurePage() {
  const [step, setStep] = useState("intro");
  const [storyIndex, setStoryIndex] = useState(0);
  const { addStar, stars } = useStars();
  const navigate = useNavigate();

  // Use first song, first story, first activity for the adventure
  const song     = SONGS[0];
  const story    = STORIES[0];
  const activity = ACTIVITIES[0];

  const next = () => {
    const i = STEPS.indexOf(step);
    if (i < STEPS.length - 1) setStep(STEPS[i + 1]);
  };

  const finishAdventure = () => {
    addStar();
    setStep("reward");
  };

  // ── Intro ──
  if (step === "intro") return (
    <div className="page adv-page">
      <Link to="/" className="back-btn">← Home</Link>
      <div className="adv-intro">
        <div className="adv-intro-emoji">🌟</div>
        <h1>Today's Smile Adventure!</h1>
        <p className="subtitle" style={{ margin: "12px 0 28px" }}>
          Complete all 3 steps and earn a star for your collection!
        </p>
        <div className="adv-steps-preview">
          {[{ emoji: "🎵", label: "Sing a Song" }, { emoji: "📖", label: "Read a Story" }, { emoji: "🎨", label: "Do an Activity" }].map((s, i) => (
            <div key={i} className="adv-step-chip">
              <span>{s.emoji}</span>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <button className="btn btn-primary" style={{ fontSize: "1.3rem", padding: "18px 48px", marginTop: 8 }} onClick={next}>
          Let's Go! 🚀
        </button>
      </div>
    </div>
  );

  // ── Song ──
  if (step === "song") return (
    <div className="page adv-page">
      <div className="adv-progress">
        <div className="adv-prog-step done">🎵</div>
        <div className="adv-prog-line" />
        <div className="adv-prog-step">📖</div>
        <div className="adv-prog-line" />
        <div className="adv-prog-step">🎨</div>
        <div className="adv-prog-line" />
        <div className="adv-prog-step">⭐</div>
      </div>
      <h2 style={{ marginBottom: 8 }}>🎵 {song.title}</h2>
      <p className="subtitle" style={{ marginBottom: 20 }}>{song.description}</p>
      <VideoEmbed videoUrl={song.videoUrl} title={song.title} />
      {song.audioSrc && (
        <audio controls style={{ width: "100%", marginTop: 16, borderRadius: "var(--r-sm)" }}>
          <source src={song.audioSrc} type="audio/mpeg" />
        </audio>
      )}
      <div className="adv-lyrics">
        {song.lyrics.map((line, i) => <p key={i} style={{ fontWeight: 700, lineHeight: 2.2, color: "var(--teal)" }}>{line}</p>)}
      </div>
      <button className="btn btn-teal adv-next-btn" onClick={next}>
        Finished singing! Next → 📖
      </button>
    </div>
  );

  // ── Story ──
  if (step === "story") {
    const s = story.steps[storyIndex];
    const isLast = storyIndex === story.steps.length - 1;
    return (
      <div className="page adv-page">
        <div className="adv-progress">
          <div className="adv-prog-step done">🎵</div>
          <div className="adv-prog-line done" />
          <div className="adv-prog-step done">📖</div>
          <div className="adv-prog-line" />
          <div className="adv-prog-step">🎨</div>
          <div className="adv-prog-line" />
          <div className="adv-prog-step">⭐</div>
        </div>
        <h2 style={{ marginBottom: 4 }}>📖 {story.title}</h2>
        <div className="story-dots">
          {story.steps.map((_, i) => (
            <div key={i} className={`story-dot ${i === storyIndex ? "active" : i < storyIndex ? "done" : ""}`} />
          ))}
        </div>
        <div className="story-card" style={{ background: s.bg }}>
          <div className="story-card-emoji">{s.emoji}</div>
          <h3 className="story-card-title">{s.title}</h3>
          <p className="story-card-desc">{s.desc}</p>
        </div>
        <div className="adv-nav-row">
          {storyIndex > 0 && (
            <button className="btn btn-white" onClick={() => setStoryIndex(i => i - 1)}>← Back</button>
          )}
          {!isLast ? (
            <button className="btn btn-teal" onClick={() => setStoryIndex(i => i + 1)}>Next →</button>
          ) : (
            <button className="btn btn-primary" onClick={() => { setStoryIndex(0); next(); }}>
              On to the Activity! 🎨
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── Activity ──
  if (step === "activity") return (
    <div className="page adv-page">
      <div className="adv-progress">
        <div className="adv-prog-step done">🎵</div>
        <div className="adv-prog-line done" />
        <div className="adv-prog-step done">📖</div>
        <div className="adv-prog-line done" />
        <div className="adv-prog-step done">🎨</div>
        <div className="adv-prog-line" />
        <div className="adv-prog-step">⭐</div>
      </div>
      <h2 style={{ marginBottom: 8 }}>🎨 {activity.title}</h2>
      <p className="subtitle" style={{ marginBottom: 20 }}>{activity.description}</p>
      <div className="activity-instructions">
        {activity.instructions.map((inst, i) => (
          <div key={i} className="act-step">
            <div className="act-step-num">{i + 1}</div>
            <span style={{ fontWeight: 700 }}>{inst}</span>
          </div>
        ))}
      </div>
      <button className="btn btn-primary adv-next-btn" onClick={finishAdventure}>
        I did it! Claim my star ⭐
      </button>
    </div>
  );

  // ── Reward ──
  if (step === "reward") return (
    <div className="page adv-page">
      <div className="celebration-card">
        <div style={{ fontSize: "5rem", marginBottom: 12 }}>🌟</div>
        <h1 style={{ color: "var(--teal)", marginBottom: 8 }}>Amazing job!</h1>
        <p style={{ fontSize: "1.1rem", color: "var(--text-mid)", fontWeight: 700, marginBottom: 20 }}>
          You completed Today's Smile Adventure!
        </p>
        <div style={{ background: "white", borderRadius: "var(--r-lg)", padding: "16px 28px", display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24, boxShadow: "var(--shadow-sm)" }}>
          <span style={{ fontSize: "2rem" }}>⭐</span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--teal)" }}>
            {stars} star{stars !== 1 ? "s" : ""} earned!
          </span>
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/rewards" className="btn btn-teal">See My Stars 🌟</Link>
          <Link to="/" className="btn btn-white">Back to Home 🏠</Link>
        </div>
      </div>
    </div>
  );
}
