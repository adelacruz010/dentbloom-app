// WordTrioMissionDemo.jsx
// Shows WordTrio embedded in a mission + the reviewed card image + Discovery Lab

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import WordTrio from "../../components/wordtrio/WordTrio";
import {
  getMissionConcepts, getMissionCard,
  MISSION_VOCABULARY, DISCOVERY_LAB_CARDS
} from "../../data/wordtrio-vocabulary";
import "./WordTrioMissionDemo.css";

export default function WordTrioMissionDemo() {
  const { missionId } = useParams();
  const id          = missionId || "gardening-mission-1";
  const missionData = MISSION_VOCABULARY[id];
  const concepts    = getMissionConcepts(id);
  const cardImage   = getMissionCard(id);
  const [showCard, setShowCard] = useState(false);

  if (!missionData) {
    return (
      <div className="page">
        <Link to="/projects" className="back-btn">← Projects</Link>
        <h2>Mission not found</h2>
      </div>
    );
  }

  return (
    <div className="page wt-demo-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link><span>›</span>
        <Link to="/projects">Projects</Link><span>›</span>
        <span>{missionData.missionTitle}</span>
      </div>

      <h1>{missionData.missionTitle}</h1>
      <p className="subtitle" style={{ marginBottom: 20, textTransform: "capitalize" }}>
        {missionData.projectId.replace(/-/g," ")} · Mission {id.split("-").pop()}
      </p>

      {/* Simulated mission content area */}
      <div className="wt-demo-content-area">
        <span style={{ fontSize: "3rem" }}>🌱</span>
        <p>Mission activity content goes here — illustrations, video, instructions.</p>
      </div>

      {/* WordTrio widget — embedded naturally */}
      <WordTrio concepts={concepts} missionId={id} />

      {/* Printable card toggle */}
      {cardImage && (
        <div className="wt-card-section">
          <div className="wt-card-header">
            <span className="wt-card-label">📄 Printable Word Trio Card</span>
            <div className="wt-card-btns">
              <button className="btn btn-white btn-sm" onClick={() => setShowCard(v => !v)}>
                {showCard ? "Hide Card" : "Preview Card"}
              </button>
              <button className="btn btn-primary btn-sm" onClick={() => window.print()}>
                🖨 Print
              </button>
            </div>
          </div>
          {showCard && (
            <div className="wt-card-preview">
              <img src={cardImage} alt={`${missionData.missionTitle} Word Trio Card`} className="wt-card-img" />
            </div>
          )}
        </div>
      )}

      {/* Discovery Lab cards */}
      {DISCOVERY_LAB_CARDS.length > 0 && (
        <div className="wt-discovery-section">
          <h2 style={{ marginBottom: 14 }}>🔬 Discovery Lab</h2>
          <div className="wt-discovery-grid">
            {DISCOVERY_LAB_CARDS.map(card => (
              <div key={card.id} className="wt-discovery-card">
                <img src={card.cardImageSrc} alt={card.title} className="wt-discovery-img" />
                <div className="wt-discovery-info">
                  <div className="wt-discovery-title">{card.title}</div>
                  {card.safetyNote && (
                    <div className="wt-discovery-safety">⚠️ {card.safetyNote}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mission switcher */}
      <div className="wt-mission-switcher">
        <div className="wt-switcher-label">All missions:</div>
        <div className="wt-switcher-list">
          {Object.entries(MISSION_VOCABULARY).map(([mid, m]) => (
            <Link key={mid} to={`/word-trio/${mid}`}
              className={`wt-switcher-chip ${mid === id ? "active" : ""}`}>
              {m.missionTitle}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
