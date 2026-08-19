// WordTrioMissionDemo.jsx
// Shows WordTrio embedded inside a mission — exactly how it will
// appear in production. Visit /word-trio or /word-trio/:missionId
// to see any mission's vocabulary live.

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import WordTrio from "../../components/wordtrio/WordTrio";
import { getMissionConcepts, MISSION_VOCABULARY } from "../../data/wordtrio-vocabulary";
import "./WordTrioMissionDemo.css";

export default function WordTrioMissionDemo() {
  const { missionId } = useParams();
  const id          = missionId || "gardening-mission-1";
  const missionData = MISSION_VOCABULARY[id];
  const concepts    = getMissionConcepts(id);

  if (!missionData) {
    return (
      <div className="page">
        <Link to="/projects" className="back-btn">← Projects</Link>
        <h2>Mission not found</h2>
        <p className="subtitle">Available: /word-trio/gardening-mission-1</p>
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
        {missionData.projectId} Project
      </p>

      {/* Simulated mission content — replace with real content */}
      <div className="wt-demo-content-area">
        <span style={{ fontSize: "3rem" }}>🌱</span>
        <p>Mission content — illustrations, video, activity — goes here.</p>
      </div>

      {/* WordTrio embedded naturally after the activity */}
      <WordTrio concepts={concepts} missionId={id} />

      {/* Mission switcher for testing */}
      <div className="wt-mission-switcher">
        <div className="wt-switcher-label">Try another mission:</div>
        <div className="wt-switcher-list">
          {Object.entries(MISSION_VOCABULARY).map(([mid, m]) => (
            <Link
              key={mid}
              to={`/word-trio/${mid}`}
              className={`wt-switcher-chip ${mid === id ? "active" : ""}`}
            >
              {m.missionTitle}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
