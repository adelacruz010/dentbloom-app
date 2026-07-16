// APP — Phase 2 Router
// i18n + new collections: Garden, Kitchen, Characters, Settings

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { StarsProvider } from "./data/StarsContext";
import { LanguageProvider } from "./i18n/LanguageContext";
import TopNav from "./components/layout/TopNav";
import BottomNav from "./components/layout/BottomNav";

// Existing pages
import HomePage from "./pages/HomePage";
import AdventurePage from "./pages/adventure/AdventurePage";
import RewardsPage from "./pages/rewards/RewardsPage";
import { AnimalsPage, AnimalDetailPage } from "./pages/animals/AnimalsPage";
import {
  SongsPage, SongDetailPage,
  StoriesPage, StoryDetailPage,
  ActivitiesPage, ActivityDetailPage,
  ParentsPage, EducatorsPage,
} from "./pages/ContentPages";

// New Phase 2 pages
import GardenPage from "./pages/garden/GardenPage";
import KitchenPage from "./pages/kitchen/KitchenPage";
import { CharactersPage, CharacterDetailPage } from "./pages/characters/CharactersPage";
import SettingsPage from "./pages/settings/SettingsPage";

// Coming soon placeholder
function ComingSoon({ title }) {
  return (
    <div className="page" style={{ textAlign: "center", paddingTop: 60 }}>
      <div style={{ fontSize: "4rem", marginBottom: 16 }}>🌱</div>
      <h2 style={{ marginBottom: 8 }}>{title}</h2>
      <p className="subtitle">This section is being planted — check back soon!</p>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <StarsProvider>
        <BrowserRouter>
          <div className="app-shell">
            <TopNav />
            <main style={{ flex: 1 }}>
              <Routes>
                {/* Core */}
                <Route path="/"                    element={<HomePage />} />
                <Route path="/adventure"           element={<AdventurePage />} />
                <Route path="/rewards"             element={<RewardsPage />} />

                {/* Dental content */}
                <Route path="/songs"               element={<SongsPage />} />
                <Route path="/songs/:id"           element={<SongDetailPage />} />
                <Route path="/stories"             element={<StoriesPage />} />
                <Route path="/stories/:id"         element={<StoryDetailPage />} />
                <Route path="/activities"          element={<ActivitiesPage />} />
                <Route path="/activities/:id"      element={<ActivityDetailPage />} />
                <Route path="/animals"             element={<AnimalsPage />} />
                <Route path="/animals/:id"         element={<AnimalDetailPage />} />
                <Route path="/parents"             element={<ParentsPage />} />
                <Route path="/educators"           element={<EducatorsPage />} />

                {/* Phase 2 — Garden */}
                <Route path="/garden"              element={<GardenPage />} />
                <Route path="/garden/*"            element={<ComingSoon title="Magic Garden" />} />

                {/* Phase 2 — Kitchen */}
                <Route path="/kitchen"             element={<KitchenPage />} />
                <Route path="/kitchen/*"           element={<ComingSoon title="Bloomy's Kitchen" />} />

                {/* Phase 2 — Characters */}
                <Route path="/characters"          element={<CharactersPage />} />
                <Route path="/characters/:id"      element={<CharacterDetailPage />} />

                {/* Phase 2 — Settings */}
                <Route path="/settings"            element={<SettingsPage />} />

                {/* Fallback */}
                <Route path="*"                    element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <BottomNav />
          </div>
        </BrowserRouter>
      </StarsProvider>
    </LanguageProvider>
  );
}
