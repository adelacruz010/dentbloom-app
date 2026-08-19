// ListenAndFind.jsx
// ============================================================
// Level 2 — optional Listen & Find mini-game.
// Spec compliance:
//   - AUDIO → PICTURE (not audio → written word, per section 9)
//   - Max 3 rounds, under 1 minute (section 11)
//   - No red X, no "WRONG", gentle "Let's listen again!" (section 12)
//   - Does NOT block mission progress (section 13)
//   - Optional — educator can enable/disable (section 10)
//   - Completing awards ⭐ to the Word Flower (section 15)
// ============================================================

import { useState, useEffect, useRef } from "react";
import { useWordGarden } from "../../data/WordGardenContext";
import "./ListenAndFind.css";

// Play audio with TTS fallback (same as WordTrio)
function playAudio(audioSrc, word, lang) {
  return new Promise((resolve) => {
    const audio = new Audio(audioSrc);
    audio.onended = resolve;
    audio.onerror = () => {
      if ("speechSynthesis" in window) {
        const u = new SpeechSynthesisUtterance(word);
        u.lang  = lang === "en" ? "en-AU" : lang === "es" ? "es-419" : "pt-BR";
        u.rate  = 0.85;
        u.pitch = 1.1;
        u.onend = resolve;
        window.speechSynthesis.speak(u);
      } else { resolve(); }
    };
    audio.play().catch(() => audio.onerror());
  });
}

// Shuffle array helper
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

// Pick a random language for the challenge audio
const pickLang = () => ["en", "es", "pt"][Math.floor(Math.random() * 3)];

export default function ListenAndFind({ concepts = [], missionId, onClose }) {
  const { markChallengeComplete } = useWordGarden();

  const [round,       setRound]       = useState(0);
  const [lang,        setLang]        = useState(() => pickLang());
  const [choices,     setChoices]     = useState([]);
  const [selected,    setSelected]    = useState(null);
  const [correct,     setCorrect]     = useState(null);
  const [playing,     setPlaying]     = useState(false);
  const [done,        setDone]        = useState(false);
  const [attempts,    setAttempts]    = useState(0);
  const targetRef = useRef(null);

  const TOTAL_ROUNDS = Math.min(concepts.length, 3);
  const currentConcept = concepts[round];

  // Prepare shuffled choices for this round
  useEffect(() => {
    if (!currentConcept) return;
    setChoices(shuffle(concepts));
    setSelected(null);
    setCorrect(null);
    setAttempts(0);
    // Auto-play the word when the round starts
    handlePlay();
  }, [round]);

  const handlePlay = async () => {
    if (!currentConcept || playing) return;
    setPlaying(true);
    await playAudio(currentConcept.audio[lang], currentConcept[lang], lang);
    setPlaying(false);
  };

  const handleChoice = async (concept) => {
    if (playing || selected) return;
    setSelected(concept.id);

    const isCorrect = concept.id === currentConcept.id;
    setCorrect(isCorrect);
    setAttempts(a => a + 1);

    if (isCorrect) {
      // Brief pause then move to next round
      setTimeout(() => {
        if (round + 1 >= TOTAL_ROUNDS) {
          // All rounds complete — award star
          concepts.forEach(c => markChallengeComplete(c.id));
          setDone(true);
        } else {
          setRound(r => r + 1);
          setLang(pickLang()); // vary language each round
        }
      }, 900);
    } else {
      // Gentle: replay the word after a moment
      setTimeout(async () => {
        setSelected(null);
        setCorrect(null);
        await playAudio(currentConcept.audio[lang], currentConcept[lang], lang);
      }, 800);
    }
  };

  // ── Done screen ──
  if (done) {
    return (
      <div className="laf-wrapper">
        <div className="laf-done">
          <div className="laf-done-star">⭐</div>
          <h3>Amazing listening!</h3>
          <p>You found all the words!</p>
          <div className="laf-flowers">
            {concepts.map(c => (
              <div key={c.id} className="laf-flower-chip">
                <span>{c.emoji}</span>
                <span className="laf-flower-star">⭐</span>
              </div>
            ))}
          </div>
          <button className="btn btn-primary" onClick={onClose} style={{ marginTop: 16 }}>
            Back to Mission 🌱
          </button>
          <button className="btn btn-white btn-sm" onClick={() => { setRound(0); setDone(false); setLang(pickLang()); }}
            style={{ marginTop: 8 }}>
            Play Again
          </button>
        </div>
      </div>
    );
  }

  if (!currentConcept) return null;

  return (
    <div className="laf-wrapper">

      {/* Header */}
      <div className="laf-header">
        <span className="laf-title">🎵 Listen &amp; Find</span>
        <span className="laf-progress">{round + 1} / {TOTAL_ROUNDS}</span>
        <button className="laf-close" onClick={onClose}>✕</button>
      </div>

      {/* Progress dots */}
      <div className="laf-dots">
        {Array.from({ length: TOTAL_ROUNDS }).map((_, i) => (
          <div key={i} className={`laf-dot ${i < round ? "done" : i === round ? "active" : ""}`} />
        ))}
      </div>

      {/* Play button — audio first */}
      <button className={`laf-play-btn ${playing ? "laf-play-btn--playing" : ""}`} onClick={handlePlay} disabled={playing}>
        <span className="laf-play-icon">{playing ? "🔊" : "▶"}</span>
        <span className="laf-play-word">
          {playing ? "Listening…" : `Tap to hear in ${lang.toUpperCase()}`}
        </span>
      </button>

      {/* Gentle prompt */}
      <p className="laf-prompt">Which picture matches what you heard?</p>

      {/* Picture choices — AUDIO → PICTURE (not text) per spec section 9 */}
      <div className="laf-choices">
        {choices.map((choice) => {
          const isSelected = selected === choice.id;
          const isCorrectChoice = isSelected && correct === true;
          const isWrongChoice   = isSelected && correct === false;

          return (
            <button
              key={choice.id}
              className={`laf-choice ${isCorrectChoice ? "laf-choice--correct" : ""} ${isWrongChoice ? "laf-choice--gentle" : ""}`}
              onClick={() => handleChoice(choice)}
              disabled={!!selected || playing}
            >
              {/* Image first — reading NOT required */}
              <div className="laf-choice-visual">
                <img
                  src={choice.imageSrc}
                  alt={choice.en}
                  className="laf-choice-img"
                  onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                />
                <div className="laf-choice-emoji-fb" style={{ display: "none" }}>
                  <span>{choice.emoji}</span>
                </div>
              </div>
              {/* Result indicator */}
              {isCorrectChoice && <div className="laf-choice-result laf-choice-result--correct">✓</div>}
              {isWrongChoice   && <div className="laf-choice-result laf-choice-result--gentle">🎵</div>}
            </button>
          );
        })}
      </div>

      {/* Gentle wrong-answer message */}
      {correct === false && (
        <p className="laf-gentle-msg">Let's listen again! 🎵</p>
      )}

    </div>
  );
}
