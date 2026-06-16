// Stars Context
// Manages the child's star count across the whole app.
// Stars are saved in localStorage so they persist between visits.

import { createContext, useContext, useState, useEffect } from "react";

const StarsContext = createContext();

export function StarsProvider({ children }) {
  const [stars, setStars] = useState(() => {
    try { return parseInt(localStorage.getItem("db_stars") || "0"); }
    catch { return 0; }
  });

  const addStar = () => {
    setStars((s) => {
      const next = s + 1;
      try { localStorage.setItem("db_stars", next); } catch {}
      return next;
    });
  };

  const resetStars = () => {
    setStars(0);
    try { localStorage.setItem("db_stars", "0"); } catch {}
  };

  return (
    <StarsContext.Provider value={{ stars, addStar, resetStars }}>
      {children}
    </StarsContext.Provider>
  );
}

export const useStars = () => useContext(StarsContext);

// Milestones
export const MILESTONES = [
  { stars: 5,  label: "Bloomy Certificate",  emoji: "🏅", color: "#face8f" },
  { stars: 10, label: "Animal Friend Badge",  emoji: "🐾", color: "#d4f0e8" },
  { stars: 20, label: "Super Smiler Award",   emoji: "🌟", color: "#fd5946" },
];
