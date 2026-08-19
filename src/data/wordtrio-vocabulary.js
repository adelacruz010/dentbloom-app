// wordtrio-vocabulary.js
// ============================================================
// ALL Word Trio vocabulary for DentBloom.
// Rules from spec:
//   - Concept-based IDs (plant_pot vs cooking_pot — same word, different concept)
//   - All three languages always present
//   - Audio paths are placeholders — add real files to /public/assets/audio/wordtrio/
//   - Translations MUST be reviewed with Florencia before audio production
//   - 2–3 concepts per mission max
//   - Only use vocabulary visually present in the mission
// ============================================================

// ── AUDIO ASSET CONVENTION ────────────────────────────────────
// /public/assets/audio/wordtrio/{conceptId}_en.mp3
// /public/assets/audio/wordtrio/{conceptId}_es.mp3
// /public/assets/audio/wordtrio/{conceptId}_pt.mp3
//
// For MVP: use browser SpeechSynthesis as fallback when audio file not found.

const audio = (id) => ({
  en: `/assets/audio/wordtrio/${id}_en.mp3`,
  es: `/assets/audio/wordtrio/${id}_es.mp3`,
  pt: `/assets/audio/wordtrio/${id}_pt.mp3`,
});

// ── CONCEPT DICTIONARY ────────────────────────────────────────
// Each concept:
//   id         — unique concept ID (never just the raw word)
//   emoji      — visual fallback when no image available
//   imageSrc   — preferred image from existing mission artwork
//   en/es/pt   — written words (PENDING FLORENCIA REVIEW)
//   audio      — audio file paths
//   projects   — which project(s) this concept appears in
//   note       — translation notes flagged for review

export const WORD_CONCEPTS = {

  // ── GARDENING ─────────────────────────────────────────────
  seed: {
    id: "seed",
    emoji: "🌱",
    imageSrc: "/assets/projects/gardening/seed.png",
    en: "seed",
    es: "semilla",        // ⚠️ REVIEW: confirm LATAM usage
    pt: "semente",        // ⚠️ REVIEW: confirm Brazilian PT
    audio: audio("seed"),
    projects: ["gardening", "recycling"],
    note: "Core gardening concept. Appears in multiple missions.",
  },

  water_garden: {
    id: "water_garden",
    emoji: "💧",
    imageSrc: "/assets/projects/gardening/water.png",
    en: "water",
    es: "agua",
    pt: "água",
    audio: audio("water_garden"),
    projects: ["gardening", "cooking", "recycling"],
    note: "Same word reusable across projects per spec section 18.",
  },

  sun: {
    id: "sun",
    emoji: "☀️",
    imageSrc: "/assets/projects/gardening/sun.png",
    en: "sun",
    es: "sol",
    pt: "sol",
    audio: audio("sun"),
    projects: ["gardening"],
    note: "Same in all three — straightforward.",
  },

  soil: {
    id: "soil",
    emoji: "🪱",
    imageSrc: "/assets/projects/gardening/soil.png",
    en: "soil",
    es: "tierra",         // ⚠️ REVIEW: tierra vs suelo — regional variation
    pt: "terra",          // ⚠️ REVIEW: terra vs solo
    audio: audio("soil"),
    projects: ["gardening"],
    note: "Regional variation possible — review with Florencia.",
  },

  plant_pot: {
    id: "plant_pot",
    emoji: "🪴",
    imageSrc: "/assets/projects/gardening/plant-pot.png",
    en: "pot",
    es: "maceta",         // ⚠️ REVIEW: maceta is standard LATAM
    pt: "vaso",           // ⚠️ REVIEW: vaso is Brazilian PT
    audio: audio("plant_pot"),
    projects: ["gardening", "recycling"],
    note: "DIFFERENT from cooking_pot — must keep separate IDs per spec section 19.",
  },

  leaf: {
    id: "leaf",
    emoji: "🍃",
    imageSrc: "/assets/projects/gardening/leaf.png",
    en: "leaf",
    es: "hoja",
    pt: "folha",
    audio: audio("leaf"),
    projects: ["gardening"],
    note: "",
  },

  root: {
    id: "root",
    emoji: "🌿",
    imageSrc: "/assets/projects/gardening/root.png",
    en: "root",
    es: "raíz",
    pt: "raiz",
    audio: audio("root"),
    projects: ["gardening"],
    note: "",
  },

  carrot: {
    id: "carrot",
    emoji: "🥕",
    imageSrc: "/assets/characters/garden/cathy-carrot.png",
    en: "carrot",
    es: "zanahoria",
    pt: "cenoura",
    audio: audio("carrot"),
    projects: ["gardening", "cooking"],
    note: "Cathy Carrot character — use character image.",
  },

  strawberry: {
    id: "strawberry",
    emoji: "🍓",
    imageSrc: "/assets/characters/garden/ruby-strawberry.png",
    en: "strawberry",
    es: "fresa",          // ⚠️ REVIEW: fresa vs frutilla — LATAM varies by country
    pt: "morango",
    audio: audio("strawberry"),
    projects: ["gardening", "cooking"],
    note: "⚠️ LATAM VARIATION: fresa (Mexico/Colombia) vs frutilla (Argentina/Chile) — confirm target region.",
  },

  harvest: {
    id: "harvest",
    emoji: "🌾",
    imageSrc: "/assets/projects/gardening/harvest.png",
    en: "harvest",
    es: "cosecha",
    pt: "colheita",
    audio: audio("harvest"),
    projects: ["gardening"],
    note: "⚠️ REVIEW with Florencia — age-appropriate term for 2–5 year olds.",
  },

  grow: {
    id: "grow",
    emoji: "📏",
    imageSrc: "/assets/projects/gardening/grow.png",
    en: "grow",
    es: "crecer",
    pt: "crescer",
    audio: audio("grow"),
    projects: ["gardening"],
    note: "⚠️ REVIEW: taller/bigger may be better for young children.",
  },

  // ── RECYCLING ────────────────────────────────────────────
  recycle_bin: {
    id: "recycle_bin",
    emoji: "🗑️",
    imageSrc: "/assets/projects/recycling/bin.png",
    en: "bin",            // ⚠️ REVIEW: bin vs trash can — confirm EN localisation (AU English)
    es: "contenedor",     // ⚠️ REVIEW: basurero vs contenedor vs tacho — regional variation
    pt: "lixeira",
    audio: audio("recycle_bin"),
    projects: ["recycling"],
    note: "⚠️ REVIEW: 'bin' is Australian English. Spanish has strong regional variation.",
  },

  bottle: {
    id: "bottle",
    emoji: "🍶",
    imageSrc: "/assets/projects/recycling/bottle.png",
    en: "bottle",
    es: "botella",
    pt: "garrafa",
    audio: audio("bottle"),
    projects: ["recycling"],
    note: "Spec section 18 — may reuse across projects.",
  },

  paper: {
    id: "paper",
    emoji: "📄",
    imageSrc: "/assets/projects/recycling/paper.png",
    en: "paper",
    es: "papel",
    pt: "papel",
    audio: audio("paper"),
    projects: ["recycling"],
    note: "",
  },

  sort: {
    id: "sort",
    emoji: "📦",
    imageSrc: "/assets/projects/recycling/sort.png",
    en: "sort",
    es: "separar",        // ⚠️ REVIEW: clasificar vs separar
    pt: "separar",
    audio: audio("sort"),
    projects: ["recycling"],
    note: "⚠️ REVIEW: age-appropriate term.",
  },

  // ── COOKING ──────────────────────────────────────────────
  cooking_pot: {
    id: "cooking_pot",
    emoji: "🍲",
    imageSrc: "/assets/projects/cooking/pot.png",
    en: "pot",
    es: "olla",           // ⚠️ REVIEW: DIFFERENT from plant_pot (maceta)
    pt: "panela",         // ⚠️ REVIEW: DIFFERENT from plant_pot (vaso)
    audio: audio("cooking_pot"),
    projects: ["cooking"],
    note: "DIFFERENT concept from plant_pot — separate ID per spec section 19.",
  },

  bowl: {
    id: "bowl",
    emoji: "🥣",
    imageSrc: "/assets/projects/cooking/bowl.png",
    en: "bowl",
    es: "tazón",          // ⚠️ REVIEW: tazón vs bol vs cuenco — regional variation
    pt: "tigela",         // ⚠️ REVIEW: tigela vs bowl
    audio: audio("bowl"),
    projects: ["cooking"],
    note: "⚠️ REVIEW: regional variation in Spanish.",
  },

  wash_hands: {
    id: "wash_hands",
    emoji: "🙌",
    imageSrc: "/assets/projects/cooking/wash-hands.png",
    en: "wash hands",
    es: "lavar las manos",
    pt: "lavar as mãos",
    audio: audio("wash_hands"),
    projects: ["cooking"],
    note: "Phrase rather than single word — short enough for display.",
  },

  vegetable: {
    id: "vegetable",
    emoji: "🥦",
    imageSrc: "/assets/projects/cooking/vegetable.png",
    en: "vegetable",
    es: "verdura",        // ⚠️ REVIEW: verdura vs vegetal vs hortaliza
    pt: "legume",         // ⚠️ REVIEW: legume vs vegetal — context matters in PT
    audio: audio("vegetable"),
    projects: ["cooking", "gardening"],
    note: "⚠️ REVIEW: significant regional variation. Flagged in spec section 31.",
  },

  taste: {
    id: "taste",
    emoji: "😋",
    imageSrc: "/assets/projects/cooking/taste.png",
    en: "taste",
    es: "probar",         // ⚠️ REVIEW: probar vs saborear vs gustar
    pt: "experimentar",   // ⚠️ REVIEW: experimentar vs provar
    audio: audio("taste"),
    projects: ["cooking"],
    note: "⚠️ REVIEW flagged in spec section 31.",
  },

  // ── ORAL HEALTH (future expansion) ────────────────────────
  tooth: {
    id: "tooth",
    emoji: "🦷",
    imageSrc: "/assets/characters/bloomy.png",
    en: "tooth",
    es: "diente",
    pt: "dente",
    audio: audio("tooth"),
    projects: ["oral-health"],
    note: "Spec section 30 — oral health is future expansion after gardening/cooking/recycling.",
  },

  toothbrush: {
    id: "toothbrush",
    emoji: "🪥",
    imageSrc: "/assets/projects/oral-health/toothbrush.png",
    en: "toothbrush",
    es: "cepillo de dientes",
    pt: "escova de dentes",
    audio: audio("toothbrush"),
    projects: ["oral-health"],
    note: "",
  },
};

// ── MISSION VOCABULARY MAP ─────────────────────────────────────
// Maps each project+mission to its 2–3 Word Trio concepts.
// Max 3 per mission. Use only what is visually present.
// ⚠️ Review each mission's visual content before finalising.

export const MISSION_VOCABULARY = {

  // ── GARDENING ─────────────────────────────────────────────
  "gardening-mission-1": {
    missionTitle: "Getting Started",
    projectId: "gardening",
    concepts: ["seed", "soil", "plant_pot"],
    note: "Mission 1 — introduction to planting",
  },
  "gardening-mission-2": {
    missionTitle: "Water & Sun",
    projectId: "gardening",
    concepts: ["water_garden", "sun"],
    note: "Mission 2 — only 2 concepts, both clearly visual",
  },
  "gardening-mission-3": {
    missionTitle: "Watching It Grow",
    projectId: "gardening",
    concepts: ["leaf", "root", "grow"],
    note: "Mission 3 — observation",
  },
  "gardening-mission-4": {
    missionTitle: "Our Garden Friends",
    projectId: "gardening",
    concepts: ["carrot", "strawberry"],
    note: "Mission 4 — characters",
  },
  "gardening-mission-5": {
    missionTitle: "Harvest Time",
    projectId: "gardening",
    concepts: ["harvest", "vegetable"],
    note: "Mission 5",
  },
  "gardening-mission-6": {
    missionTitle: "From Garden to Table",
    projectId: "gardening",
    concepts: ["carrot", "water_garden"],
    note: "Mission 6 — intentional repetition per spec section 18",
  },

  // ── RECYCLING ─────────────────────────────────────────────
  "recycling-mission-1": {
    missionTitle: "What Is Recycling?",
    projectId: "recycling",
    concepts: ["recycle_bin", "bottle"],
    note: "Mission 1",
  },
  "recycling-mission-2": {
    missionTitle: "Sorting Materials",
    projectId: "recycling",
    concepts: ["paper", "bottle", "sort"],
    note: "Mission 2",
  },
  "recycling-mission-3": {
    missionTitle: "Recycled Plant Pots",
    projectId: "recycling",
    concepts: ["plant_pot", "seed"],
    note: "Mission 3 — reuse from gardening per spec",
  },
  "recycling-mission-4": {
    missionTitle: "Watering Cans",
    projectId: "recycling",
    concepts: ["water_garden", "bottle"],
    note: "Mission 4",
  },
  "recycling-mission-5": {
    missionTitle: "Garden Labels",
    projectId: "recycling",
    concepts: ["seed", "carrot"],
    note: "Mission 5",
  },
  "recycling-mission-6": {
    missionTitle: "Recycled Crafts",
    projectId: "recycling",
    concepts: ["paper", "bottle"],
    note: "Mission 6",
  },

  // ── COOKING ──────────────────────────────────────────────
  "cooking-mission-1": {
    missionTitle: "Kitchen Safety",
    projectId: "cooking",
    concepts: ["cooking_pot", "bowl"],
    note: "Mission 1",
  },
  "cooking-mission-2": {
    missionTitle: "Washing Up",
    projectId: "cooking",
    concepts: ["wash_hands", "water_garden"],
    note: "Mission 2 — water reused from gardening",
  },
  "cooking-mission-3": {
    missionTitle: "Healthy Ingredients",
    projectId: "cooking",
    concepts: ["vegetable", "carrot", "strawberry"],
    note: "Mission 3",
  },
  "cooking-mission-4": {
    missionTitle: "Prepare Together",
    projectId: "cooking",
    concepts: ["bowl", "vegetable"],
    note: "Mission 4",
  },
  "cooking-mission-5": {
    missionTitle: "Taste & Share",
    projectId: "cooking",
    concepts: ["taste", "vegetable"],
    note: "Mission 5 — taste flagged for review",
  },
  "cooking-mission-6": {
    missionTitle: "Clean Up & Brush",
    projectId: "cooking",
    concepts: ["wash_hands", "tooth"],
    note: "Mission 6 — natural bridge to oral health",
  },
};

// ── HELPER — get concepts for a mission ───────────────────────
export function getMissionConcepts(missionId) {
  const mission = MISSION_VOCABULARY[missionId];
  if (!mission) return [];
  return mission.concepts
    .map(id => WORD_CONCEPTS[id])
    .filter(Boolean);
}

// ── HELPER — get all concepts for a project ───────────────────
export function getProjectConcepts(projectId) {
  return Object.values(MISSION_VOCABULARY)
    .filter(m => m.projectId === projectId)
    .flatMap(m => m.concepts)
    .filter((v, i, a) => a.indexOf(v) === i) // deduplicate
    .map(id => WORD_CONCEPTS[id])
    .filter(Boolean);
}
