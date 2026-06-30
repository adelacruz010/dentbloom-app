// ============================================================
// Content Pages: Songs, Stories, Activities, Parents, Educators
// ============================================================

import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { SONGS, STORIES, ACTIVITIES, PARENT_RESOURCES, EDUCATOR_RESOURCES } from "../data/content";
import { VideoEmbed, PDFBtn, EarnStarBtn } from "../components/ui/shared";
import { useStars } from "../data/StarsContext";
import CelebrationPopup from "../components/ui/CelebrationPopup";
import "./ContentPages.css";

// ── SONGS LIST ────────────────────────────────────────────────
export function SongsPage() {
  return (
    <div className="page">
      <Link to="/" className="back-btn">← Home</Link>
      <h1>Songs 🎵</h1>
      <p className="subtitle" style={{ marginBottom: 24 }}>Sing along to make brushing and dental health fun every day!</p>
      <div className="grid-2">
        {SONGS.map(song => (
          <Link key={song.id} to={`/songs/${song.id}`} className="card">
            <div style={{ height: 80, background: song.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.8rem" }}>
              {song.emoji}
            </div>
            <div className="card-body">
              <div className="card-title">{song.title}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-light)", fontWeight: 700, marginBottom: 4 }}>⏱ {song.duration}</div>
              <div className="card-desc">{song.description}</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
                {song.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── SONG DETAIL ───────────────────────────────────────────────
export function SongDetailPage() {
  const { id } = useParams();
  const song = SONGS.find(s => s.id === id);
  const { addStar } = useStars();
  const [starred, setStarred] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  if (!song) return <div className="page"><Link to="/songs" className="back-btn">← Songs</Link><h2>Song not found</h2></div>;

  const handleEarn = () => {
    if (!starred) {
      addStar();
      setStarred(true);
      setShowCelebration(true);
    }
  };

  return (
    <div className="page content-detail-page">
      <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/songs">Songs</Link><span>›</span><span>{song.title}</span></div>

      <div className="content-hero" style={{ background: song.color }}>
        <span style={{ fontSize: "3.5rem" }}>{song.emoji}</span>
        <div>
          <h1 style={{ color: "white" }}>{song.title}</h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>{song.description}</p>
        </div>
      </div>

      <div className="detail-layout">
        <div>
          <section className="detail-section">
            <h2>🎬 Video</h2>
            <VideoEmbed videoUrl={song.videoUrl} title={song.title} />
          </section>

          {song.audioSrc && (
            <section className="detail-section">
              <h2>🎵 Listen</h2>
              <audio controls style={{ width: "100%", borderRadius: "var(--r-sm)" }}>
                <source src={song.audioSrc} type="audio/mpeg" />
              </audio>
            </section>
          )}

          <section className="detail-section">
            <h2>📝 Lyrics</h2>
            <div className="lyrics-box">
              {song.lyrics.map((line, i) => <p key={i} style={{ fontWeight: 700, lineHeight: 2.2, color: "var(--teal)" }}>{line}</p>)}
            </div>
          </section>

          <section className="detail-section">
            <h2>💃 Movement Guide</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {song.movementGuide.map(s => (
                <div key={s.step} className="step-row">
                  <div className="step-circle">{s.step}</div>
                  <span style={{ fontWeight: 700 }}>{s.action}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="detail-sidebar">
          <div style={{ background: "var(--white)", borderRadius: "var(--r-lg)", padding: 20, boxShadow: "var(--shadow-sm)", border: "2px solid var(--border)" }}>
            <h3 style={{ marginBottom: 14 }}>📄 Downloads</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {song.pdfs.length > 0 ? song.pdfs.map(pdf => (
                <PDFBtn key={pdf.file} label={pdf.label} file={pdf.file} compact />
              )) : <p style={{ fontSize: "0.85rem", color: "var(--text-light)", fontWeight: 700 }}>PDFs coming soon</p>}
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            {!starred ? (
              <EarnStarBtn onEarn={handleEarn} label="⭐ I sang along!" />
            ) : (
              <div className="star-earned">⭐ Star earned!</div>
            )}
          </div>
          <Link to="/songs" className="back-btn" style={{ width: "100%", textAlign: "center", justifyContent: "center", display: "flex" }}>← All Songs</Link>
        </aside>
      </div>

      <CelebrationPopup show={showCelebration} onClose={() => setShowCelebration(false)} message="Wonderful!" />
    </div>
  );
}

// ── STORIES LIST ──────────────────────────────────────────────
export function StoriesPage() {
  return (
    <div className="page">
      <Link to="/" className="back-btn">← Home</Link>
      <h1>Stories 📖</h1>
      <p className="subtitle" style={{ marginBottom: 24 }}>Fun stories to prepare children for dental visits and healthy habits.</p>
      <div className="grid-2">
        {STORIES.map(story => (
          <Link key={story.id} to={`/stories/${story.id}`} className="card">
            <div style={{ height: 80, background: story.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.8rem" }}>
              {story.emoji}
            </div>
            <div className="card-body">
              <div className="card-title">{story.title}</div>
              <div className="card-desc">{story.description}</div>
              <div style={{ marginTop: 8 }}><span className="tag">{story.steps.length} steps</span></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── STORY DETAIL ──────────────────────────────────────────────
export function StoryDetailPage() {
  const { id } = useParams();
  const story = STORIES.find(s => s.id === id);
  const [stepIndex, setStepIndex] = useState(0);
  const { addStar, stars } = useStars();
  const [starred, setStarred] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  if (!story) return <div className="page"><Link to="/stories" className="back-btn">← Stories</Link><h2>Not found</h2></div>;

  const s = story.steps[stepIndex];
  const isLast = stepIndex === story.steps.length - 1;

  const handleEarn = () => {
    if (!starred) {
      addStar();
      setStarred(true);
      setShowCelebration(true);
    }
  };

  // ── Completed state: full, visually-rich finish screen (fixes empty space) ──
  if (starred) {
    return (
      <div className="page content-detail-page">
        <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/stories">Stories</Link><span>›</span><span>{story.title}</span></div>

        <div className="story-complete-card">
          <div className="story-complete-emoji">🌟</div>
          <h1 style={{ marginBottom: 8 }}>Story Complete!</h1>
          <p className="subtitle" style={{ marginBottom: 20 }}>You finished "{story.title}" — Bloomy is proud of you!</p>

          <div className="story-complete-recap">
            {story.steps.map((step, i) => (
              <div key={i} className="recap-chip" style={{ background: step.bg }}>
                <span style={{ fontSize: "1.6rem" }}>{step.emoji}</span>
              </div>
            ))}
          </div>

          <div className="star-earned" style={{ margin: "24px auto" }}>⭐ {stars} total stars</div>

          <div className="adv-nav-row" style={{ justifyContent: "center" }}>
            <Link to="/stories" className="btn btn-white">More Stories 📖</Link>
            <Link to="/rewards" className="btn btn-teal">See My Stars ⭐</Link>
            <Link to="/" className="btn btn-primary">Home 🏠</Link>
          </div>
        </div>

        <CelebrationPopup show={showCelebration} onClose={() => setShowCelebration(false)} message="You did it!" />
      </div>
    );
  }

  return (
    <div className="page content-detail-page">
      <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/stories">Stories</Link><span>›</span><span>{story.title}</span></div>
      <h1 style={{ marginBottom: 16 }}>{story.title}</h1>

      <div className="story-dots" style={{ marginBottom: 20 }}>
        {story.steps.map((_, i) => (
          <div key={i} className={`story-dot ${i === stepIndex ? "active" : i < stepIndex ? "done" : ""}`} />
        ))}
      </div>

      <div className="story-card" style={{ background: s.bg }}>
        <div style={{ fontSize: "4rem", marginBottom: 14 }}>{s.emoji}</div>
        <h2 style={{ marginBottom: 10 }}>{s.title}</h2>
        <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", fontWeight: 700 }}>{s.desc}</p>
      </div>

      <div className="adv-nav-row" style={{ marginTop: 20 }}>
        {stepIndex > 0 && <button className="btn btn-white" onClick={() => setStepIndex(i => i - 1)}>← Back</button>}
        {!isLast
          ? <button className="btn btn-teal" onClick={() => setStepIndex(i => i + 1)}>Next →</button>
          : <EarnStarBtn onEarn={handleEarn} label="⭐ I finished the story!" />
        }
      </div>
    </div>
  );
}

// ── ACTIVITIES LIST ───────────────────────────────────────────
export function ActivitiesPage() {
  return (
    <div className="page">
      <Link to="/" className="back-btn">← Home</Link>
      <h1>Activities 🎨</h1>
      <p className="subtitle" style={{ marginBottom: 24 }}>Hands-on activities that make dental health fun to learn!</p>
      <div className="grid-2">
        {ACTIVITIES.map(act => (
          <Link key={act.id} to={`/activities/${act.id}`} className="card">
            <div style={{ height: 80, background: act.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.8rem" }}>
              {act.emoji}
            </div>
            <div className="card-body">
              <div className="card-title">{act.title}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-light)", fontWeight: 700, marginBottom: 4 }}>👶 {act.ageRange} · ⏱ {act.duration}</div>
              <div className="card-desc">{act.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── ACTIVITY DETAIL ───────────────────────────────────────────
export function ActivityDetailPage() {
  const { id } = useParams();
  const act = ACTIVITIES.find(a => a.id === id);
  const { addStar } = useStars();
  const [starred, setStarred] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  if (!act) return <div className="page"><Link to="/activities" className="back-btn">← Activities</Link><h2>Not found</h2></div>;

  const handleEarn = () => {
    if (!starred) {
      addStar();
      setStarred(true);
      setShowCelebration(true);
    }
  };

  return (
    <div className="page content-detail-page">
      <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><Link to="/activities">Activities</Link><span>›</span><span>{act.title}</span></div>

      <div className="content-hero" style={{ background: act.color }}>
        <span style={{ fontSize: "3.5rem" }}>{act.emoji}</span>
        <div>
          <h1 style={{ color: "var(--teal)" }}>{act.title}</h1>
          <p style={{ color: "var(--text-mid)", fontWeight: 700 }}>👶 {act.ageRange} · ⏱ {act.duration}</p>
        </div>
      </div>

      <section className="detail-section">
        <h2>📋 How to do it</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {act.instructions.map((inst, i) => (
            <div key={i} className="step-row">
              <div className="step-circle">{i + 1}</div>
              <span style={{ fontWeight: 700 }}>{inst}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Fills the empty space below instructions with a visual "you'll need" + actions panel */}
      <section className="detail-section activity-bottom-panel">
        <div className="activity-bottom-card">
          <div style={{ fontSize: "2.2rem" }}>{act.emoji}</div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", color: "var(--teal)", fontSize: "1rem" }}>Ready to play?</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-mid)", fontWeight: 700 }}>Grab your materials and let's go!</div>
          </div>
        </div>

        <div className="activity-actions-row">
          <PDFBtn label="Download Activity Sheet" file={act.pdfSrc} />
          {!starred
            ? <EarnStarBtn onEarn={handleEarn} label="⭐ I did this activity!" />
            : <div className="star-earned">⭐ Star earned!</div>
          }
        </div>
      </section>

      <CelebrationPopup show={showCelebration} onClose={() => setShowCelebration(false)} message="Amazing job!" />
    </div>
  );
}

// ── PARENTS PAGE ──────────────────────────────────────────────
export function ParentsPage() {
  return (
    <div className="page">
      <Link to="/" className="back-btn">← Home</Link>
      <h1>For Parents 👨‍👩‍👧</h1>
      <p className="subtitle" style={{ marginBottom: 24 }}>Practical guides to support your child's dental health at home.</p>
      <div className="grid-2">
        {PARENT_RESOURCES.map(r => (
          <div key={r.id} className="resource-card" style={{ borderColor: r.color }}>
            <div className="resource-card-top" style={{ background: r.color }}>
              <span style={{ fontSize: "3rem" }}>{r.icon}</span>
            </div>
            <div className="card-body">
              <div className="card-title">{r.title}</div>
              <div className="card-desc">{r.desc}</div>
              <div style={{ marginTop: 12 }}>
                <PDFBtn label="Download" file={r.pdfSrc} compact />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── EDUCATORS PAGE ────────────────────────────────────────────
export function EducatorsPage() {
  return (
    <div className="page">
      <Link to="/" className="back-btn">← Home</Link>
      <h1>For Educators 🏫</h1>
      <p className="subtitle" style={{ marginBottom: 24 }}>Lesson plans, posters, certificates and activity packs for early childhood settings.</p>
      <div className="grid-2">
        {EDUCATOR_RESOURCES.map(r => (
          <div key={r.id} className="resource-card" style={{ borderColor: r.color }}>
            <div className="resource-card-top" style={{ background: r.color }}>
              <span style={{ fontSize: "3rem" }}>{r.icon}</span>
            </div>
            <div className="card-body">
              <div className="card-title">{r.title}</div>
              <div className="card-desc">{r.desc}</div>
              <div style={{ marginTop: 12 }}>
                <PDFBtn label="Download" file={r.pdfSrc} compact />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
