// APP — DentBloom ECE Platform Router
// Three platform types: Childcare (active), Dental Clinics (structure), Families (structure)
// All existing pages preserved. New pages added.

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { StarsProvider } from "./data/StarsContext";
import { LanguageProvider } from "./i18n/LanguageContext";
import TopNav from "./components/layout/TopNav";
import BottomNav from "./components/layout/BottomNav";

// ── Existing pages (unchanged) ──────────────────────────────
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
import GardenPage from "./pages/garden/GardenPage";
import KitchenPage from "./pages/kitchen/KitchenPage";
import { CharactersPage, CharacterDetailPage } from "./pages/characters/CharactersPage";
import SettingsPage from "./pages/settings/SettingsPage";
import CertificatesHub from "./pages/certificates/CertificatesHub";
import CertificatePage from "./pages/certificates/CertificatePage";
import SavedCertificatesPage from "./pages/certificates/SavedCertificatesPage";

// ── New platform pages ──────────────────────────────────────
import PlatformSelector from "./pages/platform/PlatformSelector";
import { ProjectsPage, ProjectDetailPage } from "./pages/projects/ProjectsPage";
import DentalPlatformPage from "./pages/platform-dental/DentalPlatformPage";
import FamilyPlatformPage from "./pages/platform-family/FamilyPlatformPage";
import AccountPage from "./pages/account/AccountPage";

// Coming soon placeholder — used for unbuilt subsections
function ComingSoon({ title }) {
  return (
    <div className="page" style={{ textAlign: "center", paddingTop: 60, maxWidth: 500 }}>
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

                {/* ── Core ── */}
                <Route path="/"               element={<HomePage />} />
                <Route path="/adventure"      element={<AdventurePage />} />
                <Route path="/rewards"        element={<RewardsPage />} />
                <Route path="/account"        element={<AccountPage />} />
                <Route path="/settings"       element={<SettingsPage />} />
                <Route path="/select-platform" element={<PlatformSelector />} />

                {/* ── Projects (new main section) ── */}
                <Route path="/projects"       element={<ProjectsPage />} />
                <Route path="/projects/:id"   element={<ProjectDetailPage />} />

                {/* ── Existing dental content ── */}
                <Route path="/songs"          element={<SongsPage />} />
                <Route path="/songs/:id"      element={<SongDetailPage />} />
                <Route path="/stories"        element={<StoriesPage />} />
                <Route path="/stories/:id"    element={<StoryDetailPage />} />
                <Route path="/activities"     element={<ActivitiesPage />} />
                <Route path="/activities/:id" element={<ActivityDetailPage />} />
                <Route path="/animals"        element={<AnimalsPage />} />
                <Route path="/animals/:id"    element={<AnimalDetailPage />} />
                <Route path="/parents"        element={<ParentsPage />} />
                <Route path="/educators"      element={<EducatorsPage />} />

                {/* ── Garden & Kitchen (existing) ── */}
                <Route path="/garden"         element={<GardenPage />} />
                <Route path="/garden/*"       element={<ComingSoon title="Magic Garden" />} />
                <Route path="/kitchen"        element={<KitchenPage />} />
                <Route path="/kitchen/*"      element={<ComingSoon title="Bloomy's Kitchen" />} />

                {/* ── Characters (existing) ── */}
                <Route path="/characters"     element={<CharactersPage />} />
                <Route path="/characters/:id" element={<CharacterDetailPage />} />

                {/* ── Certificates (existing) ── */}
                <Route path="/certificates"       element={<CertificatesHub />} />
                <Route path="/certificates/new"   element={<CertificatePage />} />
                <Route path="/certificates/saved" element={<SavedCertificatesPage />} />

                {/* ── Platform stubs ── */}
                <Route path="/platform-dental"  element={<DentalPlatformPage />} />
                <Route path="/platform-family"  element={<FamilyPlatformPage />} />

                {/* ── Fallback ── */}
                <Route path="*" element={<Navigate to="/" replace />} />

              </Routes>
            </main>
            <BottomNav />
          </div>
        </BrowserRouter>
      </StarsProvider>
    </LanguageProvider>
  );
}
