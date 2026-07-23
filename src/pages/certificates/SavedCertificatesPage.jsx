// SAVED CERTIFICATES PAGE
// Shows all certificates the user has saved (stored in localStorage).
// Each can be reopened, downloaded, or deleted.

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useT from "../../i18n/useT";
import { CERT_CHARACTERS, CERT_TYPES } from "../../data/certificates";
import "./SavedCertificatesPage.css";

const STORAGE_KEY = "db_saved_certificates";

// Helper to load saved certificates from localStorage
export function loadSavedCerts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

// Helper to save a new certificate
export function saveCertificate(cert) {
  try {
    const existing = loadSavedCerts();
    const newCert = { ...cert, id: Date.now(), savedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([newCert, ...existing]));
    return newCert;
  } catch { return null; }
}

// Helper to delete a certificate by id
export function deleteCertificate(id) {
  try {
    const existing = loadSavedCerts().filter(c => c.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch {}
}

export default function SavedCertificatesPage() {
  const t = useT();
  const tc = t.certificates;
  const navigate = useNavigate();
  const [certs, setCerts] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(null);

  useEffect(() => {
    setCerts(loadSavedCerts());
  }, []);

  const handleDelete = (id) => {
    deleteCertificate(id);
    setCerts(loadSavedCerts());
    setConfirmDelete(null);
  };

  return (
    <div className="page saved-certs-page">
      <div className="saved-certs-header">
        <Link to="/certificates" className="back-btn">{t.btn.back}</Link>
        <Link to="/certificates/new" className="btn btn-primary btn-sm">{tc.newCert}</Link>
      </div>

      <h1>{tc.savedCerts}</h1>
      <p className="subtitle" style={{ marginBottom: 24 }}>{tc.subtitle}</p>

      {certs.length === 0 ? (
        <div className="saved-empty">
          <div style={{ fontSize: "4rem", marginBottom: 12 }}>🏅</div>
          <p className="subtitle" style={{ marginBottom: 20 }}>{tc.noSaved}</p>
          <Link to="/certificates/new" className="btn btn-primary btn-bounce">
            {tc.create}
          </Link>
        </div>
      ) : (
        <div className="saved-certs-grid">
          {certs.map((cert) => {
            const character = CERT_CHARACTERS.find(c => c.id === cert.characterId);
            const certType  = CERT_TYPES.find(c => c.id === cert.certTypeId);
            if (!character || !certType) return null;

            return (
              <div
                key={cert.id}
                className="saved-cert-card"
                style={{ background: certType.bgColor, borderColor: certType.accentColor }}
              >
                {/* Mini certificate preview */}
                <div className="saved-cert-preview">
                  <div className="saved-cert-emoji" style={{ background: certType.accentColor }}>
                    {certType.emoji}
                  </div>
                  <div className="saved-cert-char-emoji">{character.emoji}</div>
                </div>

                <div className="saved-cert-info">
                  <div className="saved-cert-name" style={{ color: certType.accentColor }}>
                    {cert.childName}
                  </div>
                  <div className="saved-cert-type">{certType.label}</div>
                  <div className="saved-cert-date">
                    {new Date(cert.savedAt).toLocaleDateString()}
                  </div>
                </div>

                <div className="saved-cert-actions">
                  <Link
                    to={`/certificates/view/${cert.id}`}
                    className="btn btn-teal btn-sm"
                  >
                    Open
                  </Link>
                  <button
                    className="btn btn-white btn-sm"
                    onClick={() => setConfirmDelete(cert.id)}
                    style={{ color: "var(--coral)" }}
                  >
                    {tc.deleteCert}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Delete confirmation */}
      {confirmDelete && (
        <div className="consent-overlay" onClick={() => setConfirmDelete(null)}>
          <div className="consent-modal" onClick={(e) => e.stopPropagation()}>
            <div className="consent-icon">🗑️</div>
            <h2 className="consent-title">{tc.confirmDelete}</h2>
            <div className="consent-btns">
              <button className="btn btn-primary" style={{ background: "var(--coral)" }}
                onClick={() => handleDelete(confirmDelete)}>
                Yes, delete
              </button>
              <button className="btn btn-white" onClick={() => setConfirmDelete(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
