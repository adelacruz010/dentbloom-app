// CELEBRATION POPUP
// A reusable full-screen popup shown after completing a song, story, or activity.
// Shows confetti, a bouncing star, and an encouraging message from Bloomy.

import { useEffect, useState } from "react";
import "./CelebrationPopup.css";

const MESSAGES = [
  "Wonderful!",
  "Amazing job!",
  "You did it!",
  "Fantastic!",
  "Super smile!",
];

// Generates random confetti pieces
function ConfettiPiece({ i }) {
  const colors = ["#fd5946", "#face8f", "#7c8d09", "#085a64", "#ffd6dc", "#cce8f4"];
  const left = Math.random() * 100;
  const delay = Math.random() * 0.4;
  const duration = 1.6 + Math.random() * 1;
  const color = colors[i % colors.length];
  const size = 8 + Math.random() * 8;
  const rotate = Math.random() * 360;

  return (
    <div
      className="confetti-piece"
      style={{
        left: `${left}%`,
        background: color,
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        transform: `rotate(${rotate}deg)`,
      }}
    />
  );
}

export default function CelebrationPopup({ show, onClose, message }) {
  const [displayMsg] = useState(() => message || MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);

  // Auto-dismiss isn't forced — child taps to continue
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="celebration-overlay" onClick={onClose}>
      {/* Confetti layer */}
      <div className="confetti-layer">
        {Array.from({ length: 40 }).map((_, i) => <ConfettiPiece key={i} i={i} />)}
      </div>

      {/* Popup card */}
      <div className="celebration-popup" onClick={(e) => e.stopPropagation()}>
        <div className="celeb-star">⭐</div>
        <div className="celeb-plus-one">+1</div>
        <h2 className="celeb-message">{displayMsg}</h2>
        <p className="celeb-sub">Bloomy is proud of you! 🌸</p>
        <button className="btn btn-primary celeb-continue" onClick={onClose}>
          Continue →
        </button>
      </div>
    </div>
  );
}
