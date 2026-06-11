// ABOUT BLOOMY PAGE
// Introduces the DentBloom characters and brand story.

import { Link } from "react-router-dom";
import { ABOUT_BLOOMY } from "../data/content";
import { AssetImage, SectionTitle } from "../components/ui/shared";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="page">

      <SectionTitle emoji="🌸" title="About Bloomy" />

      {/* Brand intro */}
      <div className="about-hero">
        <div className="about-hero-text">
          <h2>{ABOUT_BLOOMY.tagline}</h2>
          <p className="subtitle">{ABOUT_BLOOMY.description}</p>
          <Link to="/songs" className="btn btn-primary" style={{ marginTop: 16 }}>
            Explore Songs 🎵
          </Link>
        </div>
        <div className="about-hero-char">
          <AssetImage src="/assets/characters/bloomy.png" alt="Bloomy" width={180} height={180} />
        </div>
      </div>

      {/* Characters */}
      <section style={{ marginTop: 40 }}>
        <SectionTitle emoji="👋" title="Meet the Characters" />
        <div className="characters-grid">
          {ABOUT_BLOOMY.characters.map((char) => (
            <div key={char.id} className="character-card">
              <AssetImage src={char.imageSrc} alt={char.name} width={120} height={120} className="char-portrait" />
              <h3>{char.name}</h3>
              <p className="char-role">{char.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand values */}
      <section style={{ marginTop: 40 }}>
        <SectionTitle emoji="💛" title="Our Approach" />
        <div className="values-grid">
          {[
            { icon: "🌱", title: "Montessori-Inspired", desc: "Calm, child-led learning through play and repetition." },
            { icon: "🎵", title: "Music & Movement",    desc: "Songs and dance make healthy habits stick." },
            { icon: "💛", title: "Gentle & Positive",   desc: "No fear. Just joy, warmth, and confidence building." },
            { icon: "👨‍👩‍👧", title: "Family & Classroom", desc: "Resources for home, childcare, and early education settings." },
          ].map((v) => (
            <div key={v.title} className="value-card">
              <span className="value-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
