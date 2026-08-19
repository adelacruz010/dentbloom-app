// WordGardenContext.jsx
// Tracks which Word Trio petals have been listened to and which flowers have bloomed.
// Saved to localStorage so children can return to their Word Garden.
// Does NOT collect personal data — only concept interaction booleans.

import { createContext, useContext, useState, useEffect } from "react";

const WordGardenContext = createContext();

const STORAGE_KEY = "db_word_garden";

function loadGarden() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveGarden(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
}

export function WordGardenProvider({ children }) {
  // Structure: { [conceptId]: { en: bool, es: bool, pt: bool, challengeComplete: bool } }
  const [garden, setGarden] = useState(loadGarden);

  // Mark a language petal as listened
  const markListened = (conceptId, lang) => {
    setGarden(prev => {
      const updated = {
        ...prev,
        [conceptId]: { en: false, es: false, pt: false, challengeComplete: false, ...prev[conceptId], [lang]: true },
      };
      saveGarden(updated);
      return updated;
    });
  };

  // Mark Level 2 (Listen & Find) challenge complete for a concept
  const markChallengeComplete = (conceptId) => {
    setGarden(prev => {
      const updated = {
        ...prev,
        [conceptId]: { ...prev[conceptId], challengeComplete: true },
      };
      saveGarden(updated);
      return updated;
    });
  };

  // Check if all 3 petals listened for a concept → flower is fully bloomed
  const isFullyBloomed = (conceptId) => {
    const c = garden[conceptId];
    return c?.en && c?.es && c?.pt;
  };

  // Check if a specific petal has been listened
  const hasPetal = (conceptId, lang) => !!garden[conceptId]?.[lang];

  // Count fully bloomed flowers
  const bloomCount = Object.keys(garden).filter(isFullyBloomed).length;

  // Get petal state for a concept
  const getPetals = (conceptId) => ({
    en: hasPetal(conceptId, "en"),
    es: hasPetal(conceptId, "es"),
    pt: hasPetal(conceptId, "pt"),
    bloomed: isFullyBloomed(conceptId),
    challengeComplete: !!garden[conceptId]?.challengeComplete,
  });

  // Reset (for testing)
  const resetGarden = () => { setGarden({}); saveGarden({}); };

  return (
    <WordGardenContext.Provider value={{
      garden, markListened, markChallengeComplete,
      isFullyBloomed, hasPetal, bloomCount, getPetals, resetGarden,
    }}>
      {children}
    </WordGardenContext.Provider>
  );
}

export const useWordGarden = () => useContext(WordGardenContext);
