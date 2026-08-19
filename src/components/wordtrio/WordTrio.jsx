// WordTrio.jsx — Phase 1
// ─────────────────────────────────────────────────────────────
// One reusable component. Takes one concept, shows it, plays it.
// Sits inside an existing mission — not a new section or page.
//
// Props:
//   concepts  — array of concept objects (see data shape below)
//   missionId — string, for future garden tracking (not used yet)
//   compact   — boolean, optional smaller layout
//
// Data shape per concept (swap vocabulary.js later, touch nothing here):
//   {
//     id:       "seed",
//     emoji:    "🌱",
//     imageSrc: "/assets/projects/gardening/seed.png",
//     en:       "seed",
//     es:       "semilla",
//     pt:       "semente",
//     audio: {
//       en: "/assets/audio/wordtrio/seed_en.mp3",
//       es: "/assets/audio/wordtrio/seed_es.mp3",
//       pt: "/assets/audio/wordtrio/seed_pt.mp3",
//     }
//   }
//
// Audio: plays the .mp3 file. Falls back to browser TTS if file
// not found — so the component works in prototype with no audio
// files at all.
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import "./WordTrio.css";

// Language labels — never flags (spec §6)
const LANGS = [
  { key: "en", label: "EN", ttsLang: "en-AU"  },
  { key: "es", label: "ES", ttsLang: "es-419" },
  { key: "pt", label: "PT", ttsLang: "pt-BR"  },
];

// ── Play audio, fall back to TTS ──────────────────────────────
function speak(src, word, ttsLang) {
  return new Promise((resolve) => {
    const a = new Audio(src);
    a.onended = resolve;
    a.onerror = () => {
      if ("speechSynthesis" in window) {
        const u     = new SpeechSynthesisUtterance(word);
        u.lang      = ttsLang;
        u.rate      = 0.85;
        u.pitch     = 1.1;
        u.onend     = resolve;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(u);
      } else {
        resolve();
      }
    };
    a.play().catch(() => a.onerror());
  });
}

// ── Single concept card ───────────────────────────────────────
function ConceptCard({ concept }) {
  const [active,  setActive]  = useState(null);   // which lang button is playing
  const [heard,   setHeard]   = useState({});      // which langs have been heard
  const [playing, setPlaying] = useState(false);

  const handleTap = async (lang) => {
    if (playing) return;
    setActive(lang.key);
    setPlaying(true);
    setHeard(h => ({ ...h, [lang.key]: true }));
    await speak(concept.audio[lang.key], concept[lang.key], lang.ttsLang);
    setPlaying(false);
    setTimeout(() => setActive(null), 600);
  };

  return (
    <div className="wt-card">

      {/* Image — always visible, reading not required */}
      <div className="wt-img-wrap">
        <img
          src={concept.imageSrc}
          alt={concept.en}
          className="wt-img"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        {/* Emoji fallback when image file not yet available */}
        <div className="wt-emoji-fb" style={{ display: "none" }}>
          {concept.emoji}
        </div>
      </div>

      {/* Word buttons — one per language, always all three */}
      <div className="wt-words">
        {LANGS.map((lang) => {
          const isActive = active === lang.key;
          const wasHeard = !!heard[lang.key];
          return (
            <button
              key={lang.key}
              className={[
                "wt-btn",
                isActive  ? "wt-btn--active" : "",
                wasHeard  ? "wt-btn--heard"  : "",
              ].join(" ").trim()}
              onClick={() => handleTap(lang)}
              disabled={playing && active !== lang.key}
              aria-label={`Hear "${concept[lang.key]}" in ${lang.label}`}
            >
              {/* Language label — small, secondary */}
              <span className="wt-lang">{lang.label}</span>

              {/* The word itself — largest element */}
              <span className="wt-word">{concept[lang.key]}</span>

              {/* Speaker icon while playing */}
              {isActive  && <span className="wt-icon wt-icon--playing">🔊</span>}
              {/* Dot when heard but not playing */}
              {!isActive && wasHeard && <span className="wt-icon wt-icon--heard">·</span>}
            </button>
          );
        })}
      </div>

    </div>
  );
}

// ── Main widget — accepts array of concepts ───────────────────
export default function WordTrio({ concepts = [], missionId, compact = false }) {
  if (!concepts.length) return null;

  return (
    <div className={`wt-widget${compact ? " wt-widget--compact" : ""}`}>

      {/* Unobtrusive header */}
      <div className="wt-header">
        <span className="wt-header-flower">🌸</span>
        <span className="wt-header-title">Bloomy's Word Trio</span>
        <span className="wt-header-hint">Tap a word to hear it!</span>
      </div>

      {/* One card per concept (max 3 per spec) */}
      <div className="wt-cards">
        {concepts.map((c) => (
          <ConceptCard key={c.id} concept={c} />
        ))}
      </div>

    </div>
  );
}
