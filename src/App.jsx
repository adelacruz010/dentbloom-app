// APP — Main Router
// Add new pages here by importing and adding a <Route>

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { StarsProvider } from "./data/StarsContext";
import TopNav from "./components/layout/TopNav";
import BottomNav from "./components/layout/BottomNav";

// Pages
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

export default function App() {
  return (
    <StarsProvider>
      <BrowserRouter>
        <div className="app-shell">
          <TopNav />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/"                    element={<HomePage />} />
              <Route path="/adventure"           element={<AdventurePage />} />
              <Route path="/rewards"             element={<RewardsPage />} />
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
              <Route path="*"                    element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
      </BrowserRouter>
    </StarsProvider>
  );
}
