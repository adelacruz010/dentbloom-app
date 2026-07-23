// CHARACTERS PAGES
// CharactersPage — lists all characters
// CharacterDetailPage — shows the full auto-generated structure for each character
import { Link, useParams } from "react-router-dom";
import { CHARACTERS, CHARACTER_SECTIONS } from "../../data/characters";
import { AssetImg } from "../../components/ui/shared";
import useT from "../../i18n/useT";
import "./CharactersPage.css";

// ── Characters List ───────────────────────────────────────────
export function CharactersPage() {
  const t = useT();
  return (
    <div className="page">
      <Link to="/" className="back-btn">{t.btn.back}</Link>
      <h1>{t.characters.title}</h1>
      <p className="subtitle" style={{ marginBottom: 28 }}>{t.characters.subtitle}</p>
      <div className="characters-grid">
        {CHARACTERS.map(char => (
          <Link key={char.id} to={`/characters/${char.id}`} className="char-card" style={{ borderColor: char.color }}>
            <div className="char-card-top" style={{ background: char.color + "33" }}>
              <div className="char-card-emoji">{char.emoji}</div>
              <AssetImg src={char.imageSrc} alt={char.name} width={100} height={100}
                style={{ position: "absolute", bottom: 0 }} />
            </div>
            <div className="char-card-body">
              <div className="char-card-name">{char.name}</div>
              <div className="char-card-desc">{char.description.slice(0, 55)}…</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── Character Detail ──────────────────────────────────────────
export function CharacterDetailPage() {
  const { id } = useParams();
  const t = useT();
  const char = CHARACTERS.find(c => c.id === id);

  if (!char) return (
    <div className="page">
      <Link to="/characters" className="back-btn">{t.btn.back}</Link>
      <h2>Character not found</h2>
    </div>
  );

  return (
    <div className="page character-detail-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link><span>›</span>
        <Link to="/characters">{t.characters.title}</Link><span>›</span>
        <span>{char.name}</span>
      </div>

      {/* Character hero */}
      <div className="char-hero" style={{ background: char.color + "33", borderColor: char.color }}>
        <div className="char-hero-emoji">{char.emoji}</div>
        <div className="char-hero-text">
          <h1 style={{ color: char.textColor }}>{char.name}</h1>
          <p className="subtitle" style={{ marginTop: 6 }}>{char.description}</p>
          {/* Milestone tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
            {char.milestones?.map(m => (
              <span key={m} className="tag">{m.replace("-", " ")}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Auto-generated section grid */}
      <h2 style={{ marginBottom: 16 }}>Learning Materials</h2>
      <div className="char-sections-grid">
        {CHARACTER_SECTIONS.map(section => {
          const available = char.content?.[section.id]?.available;
          return (
            <div key={section.id}
              className={`char-section-tile ${available ? "available" : "coming-soon-tile"}`}
              style={{ borderColor: available ? char.color : "var(--border)" }}>
              <span className="char-section-emoji">{section.emoji}</span>
              <span className="char-section-label">
                {t.characters[section.labelKey] || section.labelKey}
              </span>
              {!available && (
                <span className="char-section-soon">Coming Soon</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Related animals */}
      {char.relatedAnimals?.length > 0 && (
        <div className="char-related">
          <h3>🐾 Related Animals</h3>
          <div className="char-related-list">
            {char.relatedAnimals.map(a => (
              <span key={a} className="char-related-chip">{a}</span>
            ))}
          </div>
        </div>
      )}

      {/* Content connections */}
      <div className="char-connections">
        <h3>🔗 Learning Journey</h3>
        <div className="connections-flow">
          {[
            { emoji: char.emoji, label: char.name },
            { emoji: "🌱", label: "Growing Adventure" },
            { emoji: "📔", label: "Garden Journal" },
            { emoji: "🍳", label: "Kitchen Recipe" },
            { emoji: "💛", label: "Healthy Habit" },
            { emoji: "🪥", label: "Brush Teeth" },
          ].map((item, i, arr) => (
            <div key={i} className="conn-item">
              <div className="conn-emoji">{item.emoji}</div>
              <div className="conn-label">{item.label}</div>
              {i < arr.length - 1 && <div className="conn-arrow">↓</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
