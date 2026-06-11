// FOOTER
// Simple footer with brand info and links.
// Designed to grow — later can add links to membership, contact, social.

import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">🌸 DentBloom</span>
          <p>Healthy smiles for little ones.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <div className="footer-col-title">Content</div>
            <Link to="/songs">Songs</Link>
            <Link to="/activities">Activities</Link>
            <Link to="/resources/movement-cards">Movement Cards</Link>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Resources</div>
            <Link to="/resources/parents">For Parents</Link>
            <Link to="/resources/teachers">For Teachers</Link>
            <Link to="/about">About Bloomy</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} DentBloom. All rights reserved.</span>
      </div>
    </footer>
  );
}
