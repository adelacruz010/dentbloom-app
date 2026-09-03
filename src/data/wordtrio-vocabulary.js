// wordtrio-vocabulary.js — REVIEWED FINAL
// ─────────────────────────────────────────────────────────────
// Source of truth: DentBloom_LANGUAGE_MODULE_REVIEWED_FINAL
// All 29 illustrated cards read and transcribed.
// Audio paths: /public/assets/wordtrio/audio/[conceptId]_[lang].mp3
// Card images: /public/assets/wordtrio/cards/[filename].png
// ─────────────────────────────────────────────────────────────

const audio = (id) => ({
  en: `/assets/wordtrio/audio/${id}_en.mp3`,
  es: `/assets/wordtrio/audio/${id}_es.mp3`,
  pt: `/assets/wordtrio/audio/${id}_pt.mp3`,
});

// ── CONCEPT DICTIONARY ────────────────────────────────────────
// Sourced directly from reviewed illustrated cards.
// Every word verified from images — no placeholders.

export const WORD_CONCEPTS = {

  // ── GARDENING ─────────────────────────────────────────────
  tiny: {
    id:"tiny", emoji:"👌",
    imageSrc:"/assets/wordtrio/cards/gardening-m1-tiny-round-long.png",
    en:"Tiny", es:"Pequeño", pt:"Pequeno",
    audio:audio("tiny"), projects:["gardening"],
  },
  round: {
    id:"round", emoji:"⭕",
    imageSrc:"/assets/wordtrio/cards/gardening-m1-tiny-round-long.png",
    en:"Round", es:"Redondo", pt:"Redondo",
    audio:audio("round"), projects:["gardening"],
  },
  long: {
    id:"long", emoji:"📏",
    imageSrc:"/assets/wordtrio/cards/gardening-m1-tiny-round-long.png",
    en:"Long", es:"Largo", pt:"Comprido",
    audio:audio("long"), projects:["gardening"],
  },
  garden: {
    id:"garden", emoji:"🌱",
    imageSrc:"/assets/wordtrio/cards/gardening-m2-garden-smell-print.png",
    en:"Garden", es:"Jardín", pt:"Jardim",
    audio:audio("garden"), projects:["gardening"],
  },
  smell: {
    id:"smell", emoji:"👃",
    imageSrc:"/assets/wordtrio/cards/gardening-m2-garden-smell-print.png",
    en:"Smell", es:"Oler", pt:"Cheirar",
    audio:audio("smell"), projects:["gardening"],
  },
  print_art: {
    id:"print_art", emoji:"🖨️",
    imageSrc:"/assets/wordtrio/cards/gardening-m2-garden-smell-print.png",
    en:"Print", es:"Estampar", pt:"Estampar",
    audio:audio("print_art"), projects:["gardening"],
    note:"Art printing activity, not document printing.",
  },
  leaf: {
    id:"leaf", emoji:"🍃",
    imageSrc:"/assets/wordtrio/cards/gardening-m3-leaf-stem-height.png",
    en:"Leaf", es:"Hoja", pt:"Folha",
    audio:audio("leaf"), projects:["gardening"],
  },
  stem: {
    id:"stem", emoji:"🌿",
    imageSrc:"/assets/wordtrio/cards/gardening-m3-leaf-stem-height.png",
    en:"Stem", es:"Tallo", pt:"Caule",
    audio:audio("stem"), projects:["gardening"],
  },
  height: {
    id:"height", emoji:"📐",
    imageSrc:"/assets/wordtrio/cards/gardening-m3-leaf-stem-height.png",
    en:"Height", es:"Altura", pt:"Altura",
    audio:audio("height"), projects:["gardening"],
  },
  sprout: {
    id:"sprout", emoji:"🌱",
    imageSrc:"/assets/wordtrio/cards/gardening-m4-sprout-root-grow.png",
    en:"Sprout", es:"Brote", pt:"Broto",
    audio:audio("sprout"), projects:["gardening"],
  },
  root: {
    id:"root", emoji:"🌿",
    imageSrc:"/assets/wordtrio/cards/gardening-m4-sprout-root-grow.png",
    en:"Root", es:"Raíz", pt:"Raiz",
    audio:audio("root"), projects:["gardening"],
  },
  grow: {
    id:"grow", emoji:"📈",
    imageSrc:"/assets/wordtrio/cards/gardening-m4-sprout-root-grow.png",
    en:"Grow", es:"Crecer", pt:"Crescer",
    audio:audio("grow"), projects:["gardening"],
  },
  harvest: {
    id:"harvest", emoji:"🌾",
    imageSrc:"/assets/wordtrio/cards/gardening-m6-harvest-care-nature.png",
    en:"Harvest", es:"Cosecha", pt:"Colheita",
    audio:audio("harvest"), projects:["gardening","cooking"],
  },
  care: {
    id:"care", emoji:"💛",
    imageSrc:"/assets/wordtrio/cards/gardening-m6-harvest-care-nature.png",
    en:"Care", es:"Cuidar", pt:"Cuidar",
    audio:audio("care"), projects:["gardening","healthy-body"],
  },
  nature: {
    id:"nature", emoji:"🦋",
    imageSrc:"/assets/wordtrio/cards/gardening-m6-harvest-care-nature.png",
    en:"Nature", es:"Naturaleza", pt:"Natureza",
    audio:audio("nature"), projects:["gardening"],
  },

  // ── RECYCLING ─────────────────────────────────────────────
  paper: {
    id:"paper", emoji:"📄",
    imageSrc:"/assets/wordtrio/cards/recycling-m1-paper-plastic-metal.png",
    en:"Paper", es:"Papel", pt:"Papel",
    audio:audio("paper"), projects:["recycling"],
  },
  plastic: {
    id:"plastic", emoji:"🍶",
    imageSrc:"/assets/wordtrio/cards/recycling-m1-paper-plastic-metal.png",
    en:"Plastic", es:"Plástico", pt:"Plástico",
    audio:audio("plastic"), projects:["recycling"],
  },
  metal: {
    id:"metal", emoji:"🥫",
    imageSrc:"/assets/wordtrio/cards/recycling-m1-paper-plastic-metal.png",
    en:"Metal", es:"Metal", pt:"Metal",
    audio:audio("metal"), projects:["recycling"],
  },
  sort: {
    id:"sort", emoji:"📦",
    imageSrc:"/assets/wordtrio/cards/recycling-m2-sort-tray-piece.png",
    en:"Sort", es:"Clasificar", pt:"Separar",
    audio:audio("sort"), projects:["recycling"],
  },
  tray: {
    id:"tray", emoji:"🗂️",
    imageSrc:"/assets/wordtrio/cards/recycling-m2-sort-tray-piece.png",
    en:"Tray", es:"Bandeja", pt:"Bandeja",
    audio:audio("tray"), projects:["recycling","cooking"],
  },
  piece: {
    id:"piece", emoji:"🧩",
    imageSrc:"/assets/wordtrio/cards/recycling-m2-sort-tray-piece.png",
    en:"Piece", es:"Pieza", pt:"Pedaço",
    audio:audio("piece"), projects:["recycling"],
  },
  smooth: {
    id:"smooth", emoji:"🖐️",
    imageSrc:"/assets/wordtrio/cards/recycling-m3-smooth-rough-shiny.png",
    en:"Smooth", es:"Liso", pt:"Liso",
    audio:audio("smooth"), projects:["recycling"],
  },
  rough: {
    id:"rough", emoji:"🤚",
    imageSrc:"/assets/wordtrio/cards/recycling-m3-smooth-rough-shiny.png",
    en:"Rough", es:"Rugoso", pt:"Áspero",
    audio:audio("rough"), projects:["recycling"],
  },
  shiny: {
    id:"shiny", emoji:"✨",
    imageSrc:"/assets/wordtrio/cards/recycling-m3-smooth-rough-shiny.png",
    en:"Shiny", es:"Brillante", pt:"Brilhante",
    audio:audio("shiny"), projects:["recycling"],
  },
  handle: {
    id:"handle", emoji:"🏺",
    imageSrc:"/assets/wordtrio/cards/recycling-m4-handle-holes-decorate.png",
    en:"Handle", es:"Asa", pt:"Alça",
    audio:audio("handle"), projects:["recycling"],
  },
  holes: {
    id:"holes", emoji:"⚫",
    imageSrc:"/assets/wordtrio/cards/recycling-m4-handle-holes-decorate.png",
    en:"Holes", es:"Agujeros", pt:"Furos",
    audio:audio("holes"), projects:["recycling"],
  },
  decorate: {
    id:"decorate", emoji:"🎨",
    imageSrc:"/assets/wordtrio/cards/recycling-m4-handle-holes-decorate.png",
    en:"Decorate", es:"Decorar", pt:"Decorar",
    audio:audio("decorate"), projects:["recycling","cooking"],
  },
  watering_can: {
    id:"watering_can", emoji:"🚿",
    imageSrc:"/assets/wordtrio/cards/recycling-m5-watering-can-lid-fill.png",
    en:"Watering Can", es:"Regadera", pt:"Regador",
    audio:audio("watering_can"), projects:["recycling","gardening"],
  },
  lid: {
    id:"lid", emoji:"🔵",
    imageSrc:"/assets/wordtrio/cards/recycling-m5-watering-can-lid-fill.png",
    en:"Lid", es:"Tapa", pt:"Tampa",
    audio:audio("lid"), projects:["recycling","cooking"],
    note:"Different concept from cap_cooking below — watering can lid.",
  },
  fill: {
    id:"fill", emoji:"💧",
    imageSrc:"/assets/wordtrio/cards/recycling-m5-watering-can-lid-fill.png",
    en:"Fill", es:"Llenar", pt:"Encher",
    audio:audio("fill"), projects:["recycling","cooking"],
  },
  play_music: {
    id:"play_music", emoji:"▶️",
    imageSrc:"/assets/wordtrio/cards/recycling-m5b-play-stop-sound.png",
    en:"Play", es:"Tocar", pt:"Tocar",
    audio:audio("play_music"), projects:["recycling"],
    note:"Musical play — recycled instruments activity. Different from play_sport.",
  },
  stop: {
    id:"stop", emoji:"⏹️",
    imageSrc:"/assets/wordtrio/cards/recycling-m5b-play-stop-sound.png",
    en:"Stop", es:"Parar", pt:"Parar",
    audio:audio("stop"), projects:["recycling"],
  },
  sound: {
    id:"sound", emoji:"🔊",
    imageSrc:"/assets/wordtrio/cards/recycling-m5b-play-stop-sound.png",
    en:"Sound", es:"Sonido", pt:"Som",
    audio:audio("sound"), projects:["recycling"],
  },
  gallery: {
    id:"gallery", emoji:"🖼️",
    imageSrc:"/assets/wordtrio/cards/recycling-m6-gallery-celebrate-together.png",
    en:"Gallery", es:"Galería", pt:"Galeria",
    audio:audio("gallery"), projects:["recycling"],
  },
  celebrate: {
    id:"celebrate", emoji:"🎉",
    imageSrc:"/assets/wordtrio/cards/recycling-m6-gallery-celebrate-together.png",
    en:"Celebrate", es:"Celebrar", pt:"Celebrar",
    audio:audio("celebrate"), projects:["recycling"],
  },
  together: {
    id:"together", emoji:"🤝",
    imageSrc:"/assets/wordtrio/cards/recycling-m6-gallery-celebrate-together.png",
    en:"Together", es:"Juntos", pt:"Juntos",
    audio:audio("together"), projects:["recycling"],
  },

  // ── COOKING ──────────────────────────────────────────────
  stick_cooking: {
    id:"stick_cooking", emoji:"🟫",
    imageSrc:"/assets/wordtrio/cards/cooking-m3-stick-dip-pattern.png",
    en:"Stick", es:"Palito", pt:"Palito",
    audio:audio("stick_cooking"), projects:["cooking"],
    note:"Crunch stick — cooking/printing tool. Different concept from walking stick etc.",
  },
  dip: {
    id:"dip", emoji:"🥣",
    imageSrc:"/assets/wordtrio/cards/cooking-m3-stick-dip-pattern.png",
    en:"Dip", es:"Mojar", pt:"Mergulhar",
    audio:audio("dip"), projects:["cooking"],
  },
  pattern: {
    id:"pattern", emoji:"🔷",
    imageSrc:"/assets/wordtrio/cards/cooking-m3-stick-dip-pattern.png",
    en:"Pattern", es:"Patrón", pt:"Padrão",
    audio:audio("pattern"), projects:["cooking","recycling"],
  },
  senses: {
    id:"senses", emoji:"👁️",
    imageSrc:"/assets/wordtrio/cards/cooking-m5-senses-touch-food.png",
    en:"Senses", es:"Sentidos", pt:"Sentidos",
    audio:audio("senses"), projects:["cooking","healthy-body"],
  },
  touch: {
    id:"touch", emoji:"🖐️",
    imageSrc:"/assets/wordtrio/cards/cooking-m5-senses-touch-food.png",
    en:"Touch", es:"Tocar", pt:"Tocar",
    audio:audio("touch"), projects:["cooking","healthy-body"],
  },
  food: {
    id:"food", emoji:"🍽️",
    imageSrc:"/assets/wordtrio/cards/cooking-m5-senses-touch-food.png",
    en:"Food", es:"Comida", pt:"Comida",
    audio:audio("food"), projects:["cooking","healthy-body"],
  },
  share: {
    id:"share", emoji:"🤲",
    imageSrc:"/assets/wordtrio/cards/cooking-m6-share-circle-cap.png",
    en:"Share", es:"Compartir", pt:"Compartilhar",
    audio:audio("share"), projects:["cooking"],
  },
  circle: {
    id:"circle", emoji:"⭕",
    imageSrc:"/assets/wordtrio/cards/cooking-m6-share-circle-cap.png",
    en:"Circle", es:"Círculo", pt:"Círculo",
    audio:audio("circle"), projects:["cooking"],
  },
  cap_cooking: {
    id:"cap_cooking", emoji:"🔵",
    imageSrc:"/assets/wordtrio/cards/cooking-m6-share-circle-cap.png",
    en:"Cap", es:"Tapa", pt:"Tampa",
    audio:audio("cap_cooking"), projects:["cooking"],
    note:"Cooking/baking mould cap. Different context from lid_watering_can.",
  },

  // ── HEALTHY SMILE ─────────────────────────────────────────
  mouth: {
    id:"mouth", emoji:"👄",
    imageSrc:"/assets/wordtrio/cards/healthy-smile-m1-mouth-lips-tongue.png",
    en:"Mouth", es:"Boca", pt:"Boca",
    audio:audio("mouth"), projects:["healthy-smile","healthy-body"],
  },
  lips: {
    id:"lips", emoji:"💋",
    imageSrc:"/assets/wordtrio/cards/healthy-smile-m1-mouth-lips-tongue.png",
    en:"Lips", es:"Labios", pt:"Lábios",
    audio:audio("lips"), projects:["healthy-smile"],
  },
  tongue: {
    id:"tongue", emoji:"👅",
    imageSrc:"/assets/wordtrio/cards/healthy-smile-m1-mouth-lips-tongue.png",
    en:"Tongue", es:"Lengua", pt:"Língua",
    audio:audio("tongue"), projects:["healthy-smile","healthy-body"],
  },
  crunchy: {
    id:"crunchy", emoji:"🥒",
    imageSrc:"/assets/wordtrio/cards/healthy-smile-m4-crunchy-soft-juicy.png",
    en:"Crunchy", es:"Crujiente", pt:"Crocante",
    audio:audio("crunchy"), projects:["healthy-smile","cooking"],
  },
  soft: {
    id:"soft", emoji:"🍌",
    imageSrc:"/assets/wordtrio/cards/healthy-smile-m4-crunchy-soft-juicy.png",
    en:"Soft", es:"Blando", pt:"Macio",
    audio:audio("soft"), projects:["healthy-smile","cooking"],
  },
  juicy: {
    id:"juicy", emoji:"🍉",
    imageSrc:"/assets/wordtrio/cards/healthy-smile-m4-crunchy-soft-juicy.png",
    en:"Juicy", es:"Jugoso", pt:"Suculento",
    audio:audio("juicy"), projects:["healthy-smile","cooking"],
  },

  // ── HEALTHY BODY ──────────────────────────────────────────
  tummy: {
    id:"tummy", emoji:"🫄",
    imageSrc:"/assets/wordtrio/cards/healthy-body-m3-tummy-intestines-kidneys.png",
    en:"Tummy", es:"Barriga", pt:"Barriga",
    audio:audio("tummy"), projects:["healthy-body"],
  },
  intestines: {
    id:"intestines", emoji:"🌀",
    imageSrc:"/assets/wordtrio/cards/healthy-body-m3-tummy-intestines-kidneys.png",
    en:"Intestines", es:"Intestinos", pt:"Intestinos",
    audio:audio("intestines"), projects:["healthy-body"],
  },
  kidneys: {
    id:"kidneys", emoji:"🫘",
    imageSrc:"/assets/wordtrio/cards/healthy-body-m3-tummy-intestines-kidneys.png",
    en:"Kidneys", es:"Riñones", pt:"Rins",
    audio:audio("kidneys"), projects:["healthy-body"],
  },
  water: {
    id:"water", emoji:"💧",
    imageSrc:"/assets/wordtrio/cards/healthy-body-m4-water-apple-carrot.png",
    en:"Water", es:"Agua", pt:"Água",
    audio:audio("water"), projects:["healthy-body","gardening","cooking"],
  },
  apple: {
    id:"apple", emoji:"🍎",
    imageSrc:"/assets/wordtrio/cards/healthy-body-m4-water-apple-carrot.png",
    en:"Apple", es:"Manzana", pt:"Maçã",
    audio:audio("apple"), projects:["healthy-body","cooking"],
  },
  carrot: {
    id:"carrot", emoji:"🥕",
    imageSrc:"/assets/wordtrio/cards/healthy-body-m4-water-apple-carrot.png",
    en:"Carrot", es:"Zanahoria", pt:"Cenoura",
    audio:audio("carrot"), projects:["healthy-body","gardening","cooking"],
  },
  rest: {
    id:"rest", emoji:"🌙",
    imageSrc:"/assets/wordtrio/cards/healthy-body-m6-care-rest-play.png",
    en:"Rest", es:"Descansar", pt:"Descansar",
    audio:audio("rest"), projects:["healthy-body"],
  },
  play_sport: {
    id:"play_sport", emoji:"⚽",
    imageSrc:"/assets/wordtrio/cards/healthy-body-m6-care-rest-play.png",
    en:"Play", es:"Jugar", pt:"Brincar",
    audio:audio("play_sport"), projects:["healthy-body"],
    note:"Physical play/sport. Different from play_music (musical play).",
  },
};

// ── MISSION VOCABULARY MAP ─────────────────────────────────────
// Sourced directly from reviewed illustrated cards.
// Each entry references a card image via cardImageSrc.

export const MISSION_VOCABULARY = {

  // GARDENING
  "gardening-mission-1": {
    missionTitle:"Seed Explorer",
    projectId:"gardening",
    cardImageSrc:"/assets/wordtrio/cards/gardening-m1-tiny-round-long.png",
    concepts:["tiny","round","long"],
  },
  "gardening-mission-2": {
    missionTitle:"Garden to Table",
    projectId:"gardening",
    cardImageSrc:"/assets/wordtrio/cards/gardening-m2-garden-smell-print.png",
    concepts:["garden","smell","print_art"],
  },
  "gardening-mission-3": {
    missionTitle:"Garden Scientist",
    projectId:"gardening",
    cardImageSrc:"/assets/wordtrio/cards/gardening-m3-leaf-stem-height.png",
    concepts:["leaf","stem","height"],
  },
  "gardening-mission-4": {
    missionTitle:"Plant Scientist",
    projectId:"gardening",
    cardImageSrc:"/assets/wordtrio/cards/gardening-m4-sprout-root-grow.png",
    concepts:["sprout","root","grow"],
  },
  "gardening-mission-6": {
    missionTitle:"Harvest Hero",
    projectId:"gardening",
    cardImageSrc:"/assets/wordtrio/cards/gardening-m6-harvest-care-nature.png",
    concepts:["harvest","care","nature"],
  },

  // RECYCLING
  "recycling-mission-1": {
    missionTitle:"Material Finder",
    projectId:"recycling",
    cardImageSrc:"/assets/wordtrio/cards/recycling-m1-paper-plastic-metal.png",
    concepts:["paper","plastic","metal"],
  },
  "recycling-mission-2": {
    missionTitle:"Sorting Star",
    projectId:"recycling",
    cardImageSrc:"/assets/wordtrio/cards/recycling-m2-sort-tray-piece.png",
    concepts:["sort","tray","piece"],
  },
  "recycling-mission-3": {
    missionTitle:"Recycling Detective",
    projectId:"recycling",
    cardImageSrc:"/assets/wordtrio/cards/recycling-m3-smooth-rough-shiny.png",
    concepts:["smooth","rough","shiny"],
  },
  "recycling-mission-4": {
    missionTitle:"Pot Maker",
    projectId:"recycling",
    cardImageSrc:"/assets/wordtrio/cards/recycling-m4-handle-holes-decorate.png",
    concepts:["handle","holes","decorate"],
  },
  "recycling-mission-5a": {
    missionTitle:"Watering Can Maker",
    projectId:"recycling",
    cardImageSrc:"/assets/wordtrio/cards/recycling-m5-watering-can-lid-fill.png",
    concepts:["watering_can","lid","fill"],
  },
  "recycling-mission-5b": {
    missionTitle:"Garden Musician",
    projectId:"recycling",
    cardImageSrc:"/assets/wordtrio/cards/recycling-m5b-play-stop-sound.png",
    concepts:["play_music","stop","sound"],
  },
  "recycling-mission-6": {
    missionTitle:"Our Recycling Gallery",
    projectId:"recycling",
    cardImageSrc:"/assets/wordtrio/cards/recycling-m6-gallery-celebrate-together.png",
    concepts:["gallery","celebrate","together"],
  },

  // COOKING
  "cooking-mission-3": {
    missionTitle:"Little Chef — Crunch Stick Printing",
    projectId:"cooking",
    cardImageSrc:"/assets/wordtrio/cards/cooking-m3-stick-dip-pattern.png",
    concepts:["stick_cooking","dip","pattern"],
  },
  "cooking-mission-5": {
    missionTitle:"Taste Explorer",
    projectId:"cooking",
    cardImageSrc:"/assets/wordtrio/cards/cooking-m5-senses-touch-food.png",
    concepts:["senses","touch","food"],
  },
  "cooking-mission-6": {
    missionTitle:"Junior Chef",
    projectId:"cooking",
    cardImageSrc:"/assets/wordtrio/cards/cooking-m6-share-circle-cap.png",
    concepts:["share","circle","cap_cooking"],
  },

  // HEALTHY SMILE
  "healthy-smile-mission-1": {
    missionTitle:"Open & Explore My Mouth",
    projectId:"healthy-smile",
    cardImageSrc:"/assets/wordtrio/cards/healthy-smile-m1-mouth-lips-tongue.png",
    concepts:["mouth","lips","tongue"],
  },
  "healthy-smile-mission-4": {
    missionTitle:"Smile Snack Sensory Lab",
    projectId:"healthy-smile",
    cardImageSrc:"/assets/wordtrio/cards/healthy-smile-m4-crunchy-soft-juicy.png",
    concepts:["crunchy","soft","juicy"],
  },

  // HEALTHY BODY
  "healthy-body-mission-3": {
    missionTitle:"Organ Explorer",
    projectId:"healthy-body",
    cardImageSrc:"/assets/wordtrio/cards/healthy-body-m3-tummy-intestines-kidneys.png",
    concepts:["tummy","intestines","kidneys"],
  },
  "healthy-body-mission-4": {
    missionTitle:"Body Fuel Helper",
    projectId:"healthy-body",
    cardImageSrc:"/assets/wordtrio/cards/healthy-body-m4-water-apple-carrot.png",
    concepts:["water","apple","carrot"],
  },
  "healthy-body-mission-6": {
    missionTitle:"Healthy Body Hero",
    projectId:"healthy-body",
    cardImageSrc:"/assets/wordtrio/cards/healthy-body-m6-care-rest-play.png",
    concepts:["care","rest","play_sport"],
  },
};

// ── DISCOVERY LAB (non-vocabulary cards) ──────────────────────
// These are educator-led science experiments, not Word Trio cards.
// Stored here for reference — displayed as resources, not in WordTrio widget.
export const DISCOVERY_LAB_CARDS = [
  {
    id:"muddy-water",
    title:"Can Muddy Water Look Clearer?",
    project:"recycling",
    cardImageSrc:"/assets/wordtrio/cards/discovery-lab-muddy-water.png",
    type:"educator-demo",
    safetyNote:"For observation only — never drink the water.",
  },
  {
    id:"tooth-drinks",
    title:"What Happens to a Tooth?",
    project:"healthy-smile",
    cardImageSrc:"/assets/wordtrio/cards/discovery-lab-tooth-drinks.png",
    type:"educator-demo",
    safetyNote:"Eggshell is an observation model only. Not the same as tooth enamel.",
  },
  {
    id:"sticky-slippery",
    title:"Sticky or Slippery?",
    project:"healthy-smile",
    cardImageSrc:"/assets/wordtrio/cards/discovery-lab-sticky-slippery.png",
    type:"educator-demo",
    safetyNote:"Honey not suitable for under 12 months. For observation only.",
  },
];

// ── HELPERS ───────────────────────────────────────────────────
export function getMissionConcepts(missionId) {
  const mission = MISSION_VOCABULARY[missionId];
  if (!mission) return [];
  return mission.concepts.map(id => WORD_CONCEPTS[id]).filter(Boolean);
}

export function getMissionCard(missionId) {
  return MISSION_VOCABULARY[missionId]?.cardImageSrc || null;
}

export function getProjectMissions(projectId) {
  return Object.entries(MISSION_VOCABULARY)
    .filter(([_, m]) => m.projectId === projectId)
    .map(([id, m]) => ({ id, ...m }));
}

export function getProjectConcepts(projectId) {
  return Object.values(MISSION_VOCABULARY)
    .filter(m => m.projectId === projectId)
    .flatMap(m => m.concepts)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map(id => WORD_CONCEPTS[id])
    .filter(Boolean);
}
