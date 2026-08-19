// WordGardenView.jsx
// Shows Bloomy's Word Garden — all vocabulary flowers the child has encountered.
// Can be embedded in the rewards page or as a standalone view.
// Spec section 17: future profile collection view.

import { useState } from "react";
import { useWordGarden } from "../../data/WordGardenContext";
import { WORD_CONCEPTS } from "../../data/wordtrio-vocabulary";
import "./WordGardenView.css";

const LANG_KEYS   = ["en", "es", "pt"];
const LANG_LABELS = ["EN", "ES", "PT"];

// Single flower for a concept
function WordFlower({ concept, petals, onClick }) {
  const allBloomed   = petals.en && petals.es && petals.pt;
  const anyListened  = petals.en || petals.es || petals.pt;

  return (
    <button
      className={`wg-flower ${allBloomed ? "wg-flower--bloomed" : ""} ${!anyListened ? "wg-flower--unheard" : ""}`}
      onClick={() => onClick(concept)}
      title={`${concept.en} · ${concept.es} · ${concept.pt}`}
    >
      <div className="wg-flower-visual">
        <img
          src={concept.imageSrc} alt={concept.en}
          className="wg-flower-img"
          onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
        />
        <div className="wg-flower-emoji-fb" style={{ display: "none" }}>
          <span>{concept.emoji}</span>
        </div>
        {allBloomed && <div className="wg-flower-bloom-ring" />}
      </div>

      {/* Three petals */}
      <div className="wg-petals">
        {LANG_KEYS.map((lang, i) => (
          <div
            key={lang}
            className={`wg-petal ${petals[lang] ? "wg-petal--lit" : ""}`}
            title={LANG_LABELS[i]}
          >
            {LANG_LABELS[i]}
          </div>
        ))}
      </div>

      {/* Star if challenge complete */}
      {petals.challengeComplete && (
        <div className="wg-star-badge">⭐</div>
      )}

      {/* Word label */}
      <div className="wg-flower-word">{concept.en}</div>
    </button>
  );
}

// Replay panel when a flower is tapped
function FlowerReplay({ concept, petals, onClose }) {
  const [playing, setPlaying] = useState(null);
  const { markListened } = useWordGarden();

  const handlePlay = async (lang) => {
    if (playing) return;
    setPlaying(lang);
    markListened(concept.id, lang);

    const audio = new Audio(concept.audio[lang]);
    audio.onerror = () => {
      if ("speechSynthesis" in window) {
        const u = new SpeechSynthesisUtterance(concept[lang]);
        u.lang = lang === "en" ? "en-AU" : lang === "es" ? "es-419" : "pt-BR";
        u.rate = 0.85;
        u.onend = () => setPlaying(null);
        window.speechSynthesis.speak(u);
      } else { setPlaying(null); }
    };
    audio.onended = () => setPlaying(null);
    audio.play().catch(() => audio.onerror());
  };

  return (
    <div className="wg-replay-panel">
      <button className="wg-replay-close" onClick={onClose}>✕</button>
      <div className="wg-replay-visual">
        <img src={concept.imageSrc} alt={concept.en}
          onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
        />
        <div style={{ display: "none", fontSize: "4rem" }}>{concept.emoji}</div>
      </div>
      <div className="wg-replay-words">
        {LANG_KEYS.map((lang, i) => (
          <button
            key={lang}
            className={`wg-replay-word ${playing === lang ? "playing" : ""} ${petals[lang] ? "heard" : ""}`}
            onClick={() => handlePlay(lang)}
            disabled={!!playing && playing !== lang}
          >
            <span className="wg-replay-lang">{LANG_LABELS[i]}</span>
            <span className="wg-replay-text">{concept[lang]}</span>
            {playing === lang && <span>🔊</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function WordGardenView({ compact = false }) {
  const { garden, bloomCount, getPetals, resetGarden } = useWordGarden();
  const [selected, setSelected] = useState(null);

  const allConcepts = Object.values(WORD_CONCEPTS);
  const encountered = allConcepts.filter(c => {
    const p = getPetals(c.id);
    return p.en || p.es || p.pt;
  });
  const bloomed = encountered.filter(c => getPetals(c.id).bloomed);

  if (compact) {
    return (
      <div className="wg-compact">
        <span className="wg-compact-icon">🌸</span>
        <span className="wg-compact-label">Word Garden</span>
        <span className="wg-compact-count">{bloomCount} bloomed</span>
      </div>
    );
  }

  return (
    <div className="wg-view">
      <div className="wg-header">
        <h2>🌸 Bloomy's Word Garden</h2>
        <p className="subtitle">Tap a flower to hear the word again!</p>
        <div className="wg-stats">
          <span>{encountered.length} words discovered</span>
          <span>·</span>
          <span>{bloomCount} fully bloomed</span>
        </div>
      </div>

      {encountered.length === 0 ? (
        <div className="wg-empty">
          <div style={{ fontSize: "3.5rem", marginBottom: 12 }}>🌱</div>
          <p>Start exploring words inside the Projects to grow your garden!</p>
        </div>
      ) : (
        <>
          <div className="wg-flowers-grid">
            {encountered.map(concept => (
              <WordFlower
                key={concept.id}
                concept={concept}
                petals={getPetals(concept.id)}
                onClick={setSelected}
              />
            ))}
          </div>

          {selected && (
            <FlowerReplay
              concept={selected}
              petals={getPetals(selected.id)}
              onClose={() => setSelected(null)}
            />
          )}
        </>
      )}

      {encountered.length > 0 && (
        <button className="wg-reset" onClick={resetGarden}>
          Reset garden (testing)
        </button>
      )}
    </div>
  );
}
