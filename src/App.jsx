// APP.JSX — Main Router
// This file defines every URL/page in the app.
// To add a new page: import it here and add a <Route> below.
//
// URL Structure:
//   /                         → Home
//   /songs                    → Songs list
//   /songs/:slug              → Individual song page
//   /activities               → Activities list
//   /activities/:id           → Individual activity
//   /resources/movement-cards → Movement Cards
//   /resources/posters        → Posters
//   /resources/parents        → Parent resources
//   /resources/teachers       → Teacher resources
//   /about                    → About Bloomy

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TopNav from "./components/layout/TopNav";
import Footer from "./components/layout/Footer";
import BottomNav from "./components/layout/BottomNav";

// Pages
import HomePage from "./pages/HomePage";
import SongsPage from "./pages/songs/SongsPage";
import SongDetailPage from "./pages/songs/SongDetailPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ActivityDetailPage from "./pages/ActivityDetailPage";
import AboutPage from "./pages/AboutPage";

import {
  MovementCardsPage,
  PostersPage,
  ParentResourcesPage,
  TeacherResourcesPage,
} from "./pages/resources/ResourcePages";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">

        {/* Navigation — always visible at the top */}
        <TopNav />

        {/* Main page content — changes based on the URL */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/"                          element={<HomePage />} />
            <Route path="/songs"                     element={<SongsPage />} />
            <Route path="/songs/:slug"               element={<SongDetailPage />} />
            <Route path="/activities"                element={<ActivitiesPage />} />
            <Route path="/activities/:id"            element={<ActivityDetailPage />} />
            <Route path="/resources/movement-cards"  element={<MovementCardsPage />} />
            <Route path="/resources/posters"         element={<PostersPage />} />
            <Route path="/resources/parents"         element={<ParentResourcesPage />} />
            <Route path="/resources/teachers"        element={<TeacherResourcesPage />} />
            <Route path="/about"                     element={<AboutPage />} />

            {/* Fallback: redirect unknown URLs to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer — visible on desktop */}
        <Footer />

        {/* Bottom nav — visible on mobile only */}
        <BottomNav />

      </div>
    </BrowserRouter>
  );
}
