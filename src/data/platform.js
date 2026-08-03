// platform.js
// Central data structure for the entire DentBloom platform.
// Three platform types: Childcare, Dental Clinics, Families
// Every resource lives here and is linked to the correct project.

// ── PLATFORM TYPES ────────────────────────────────────────────
export const PLATFORMS = [
  {
    id: "childcare",
    emoji: "🏫",
    color: "#085a64",
    bgColor: "#C8EFE3",
    label: "Childcare",
    description: "Premium educational resources for early childhood educators.",
    available: true,
  },
  {
    id: "dental",
    emoji: "🦷",
    color: "#3A7EB5",
    bgColor: "#C8E8FF",
    label: "Dental Clinics",
    description: "Patient education and waiting room resources for dental practices.",
    available: false, // coming soon
  },
  {
    id: "family",
    emoji: "👨‍👩‍👧",
    color: "#C25470",
    bgColor: "#FFD6DC",
    label: "Families",
    description: "Access content shared by your child's childcare centre.",
    available: false, // requires access code
  },
];

// ── EDUCATIONAL AREAS ─────────────────────────────────────────
export const EDU_AREAS = [
  "Oral Health", "Healthy Habits", "Gardening", "Cooking",
  "Healthy Eating", "Recycling", "Animals", "Nature", "Water",
  "Social Skills", "Emotional Regulation", "Routines",
  "Early Science", "Literacy", "Numeracy",
];

// ── USER TYPES ────────────────────────────────────────────────
export const USER_TYPES = {
  admin:    { label: "Administrator",  permissions: ["manage", "invite", "generate-codes", "share-content"] },
  educator: { label: "Educator",       permissions: ["browse", "watch", "play", "download"] },
  family:   { label: "Family",         permissions: ["view-shared"] },
};

// ── PROJECT TEMPLATE SECTIONS ─────────────────────────────────
// Every project uses exactly this layout structure.
export const PROJECT_TEMPLATE = [
  { id: "overview",   emoji: "📋", label: "Overview",           labelKey: "overview" },
  { id: "watch",      emoji: "🎬", label: "Watch",              labelKey: "watch" },
  { id: "sing-move",  emoji: "🎵", label: "Sing & Move",        labelKey: "singMove" },
  { id: "explore",    emoji: "🔬", label: "Explore & Learn",    labelKey: "explore" },
  { id: "activities", emoji: "🎨", label: "Activities",         labelKey: "activities" },
  { id: "resources",  emoji: "📚", label: "Educator Resources", labelKey: "resources" },
];

// ── RESOURCE SCHEMA ───────────────────────────────────────────
// Every resource in the platform follows this structure.
// Add new resources by adding entries to RESOURCES array below.
export const RESOURCE_SCHEMA = {
  id:            "string — unique",
  title:         "string",
  description:   "string",
  category:      "string — from EDU_AREAS",
  ageGroup:      "string — e.g. '2–5 years'",
  character:     "string|null — character id",
  thumbnail:     "string — /assets/...",
  premium:       "boolean",
  projectId:     "string — links to a project",
  learningGoals: "string[]",
  materials:     "string[]",
  instructions:  "string[]",
  videoUrl:      "string|null",
  downloadUrl:   "string|null",
  tags:          "string[]",
  language:      "en|es|pt",
  available:     "boolean",
};

// ── PROJECTS ──────────────────────────────────────────────────
// All projects. Each gets the PROJECT_TEMPLATE sections automatically.
export const PROJECTS = [
  // ── Oral Health (existing) ──
  {
    id: "oral-health",
    title: "Oral Health",
    emoji: "🦷",
    color: "#085a64",
    bgColor: "#C8EFE3",
    category: "Oral Health",
    description: "Songs, stories, videos and activities to build healthy brushing habits.",
    characters: ["bloomy", "luna", "teo", "lumy"],
    ageGroup: "2–6 years",
    available: true,
    platform: ["childcare", "dental"],
    tags: ["brushing", "dentist", "oral health", "routines"],
  },
  // ── Animal Adventures (existing) ──
  {
    id: "animal-adventures",
    title: "Animal Adventures",
    emoji: "🐾",
    color: "#C97B63",
    bgColor: "#FFE5C8",
    category: "Animals",
    description: "Meet animal friends and learn through movement, song and discovery.",
    characters: ["bunny", "turtle", "giraffe", "koala", "dolphin", "lion"],
    ageGroup: "2–6 years",
    available: true,
    platform: ["childcare"],
    tags: ["animals", "movement", "nature", "science"],
  },
  // ── Recycling (new Priority 3) ──
  {
    id: "recycling",
    title: "Recycling Project",
    emoji: "♻️",
    color: "#2E7D32",
    bgColor: "#d4f0e8",
    category: "Recycling",
    description: "Reduce, Reuse, Recycle — practical activities using recycled materials.",
    characters: ["cathy-carrot"],
    ageGroup: "2–6 years",
    available: false,
    platform: ["childcare"],
    tags: ["recycling", "environment", "crafts", "sorting"],
    sections: {
      overview: {
        description: "Children learn to sort, reduce, reuse and recycle through hands-on activities.",
        learningGoals: [
          "Understand reduce, reuse, recycle",
          "Sort recyclable materials",
          "Create art from recycled items",
          "Develop environmental responsibility",
        ],
      },
      activities: [
        { id: "plant-pots",       title: "Recycled Plant Pots",    available: false },
        { id: "watering-cans",    title: "Watering Cans",          available: false },
        { id: "garden-labels",    title: "Garden Labels",          available: false },
        { id: "recycled-crafts",  title: "Recycled Crafts",        available: false },
        { id: "sorting-game",     title: "Sorting Materials Game", available: false },
      ],
    },
  },
  // ── Gardening (new Priority 3) ──
  {
    id: "gardening",
    title: "Gardening Project",
    emoji: "🌱",
    color: "#558B2F",
    bgColor: "#DCEDC8",
    category: "Gardening",
    description: "Plant, grow and discover with Cathy Carrot and Ruby Strawberry!",
    characters: ["cathy-carrot", "ruby-strawberry"],
    ageGroup: "2–6 years",
    available: false,
    platform: ["childcare"],
    tags: ["gardening", "nature", "science", "responsibility"],
    relatedProjectId: "recycling", // reuses recycling materials
    sections: {
      overview: {
        description: "Children plant, water and observe as they learn about growth, responsibility and healthy food.",
        learningGoals: [
          "Understand planting and growth cycles",
          "Develop responsibility through caring for plants",
          "Connect food to its source",
          "Build patience and observation skills",
        ],
        workflow: ["Plant", "Water", "Observe", "Measure", "Harvest", "Cook", "Eat", "Brush Teeth"],
      },
    },
  },
  // ── Cooking & Healthy Habits (new Priority 3) ──
  {
    id: "cooking",
    title: "Cooking & Healthy Habits",
    emoji: "🍎",
    color: "#C0392B",
    bgColor: "#FFCDD2",
    category: "Cooking",
    description: "Cook, taste and learn healthy habits with Bloomy's Kitchen!",
    characters: ["cathy-carrot", "ruby-strawberry", "bloomy"],
    ageGroup: "2–6 years",
    available: false,
    platform: ["childcare"],
    tags: ["cooking", "healthy eating", "hygiene", "teamwork"],
    relatedProjectId: "gardening",
    sections: {
      overview: {
        description: "Children learn kitchen safety, hygiene, healthy eating and teamwork through cooking activities.",
        learningGoals: [
          "Practice hand washing and kitchen hygiene",
          "Explore healthy foods and flavours",
          "Develop teamwork and sharing",
          "Follow instructions and sequences",
        ],
        workflow: ["Wash Hands", "Wash Ingredients", "Prepare Together", "Share Jobs", "Taste Together", "Clean Up", "Brush Teeth"],
      },
    },
  },
  // ── Bloomy's Magic Garden (existing) ──
  {
    id: "magic-garden",
    title: "Bloomy's Magic Garden",
    emoji: "🌸",
    color: "#7c8d09",
    bgColor: "#F0F4C3",
    category: "Gardening",
    description: "Explore the magical garden world with Bloomy!",
    characters: ["bloomy"],
    ageGroup: "2–6 years",
    available: false,
    platform: ["childcare"],
    tags: ["garden", "nature", "magic", "exploration"],
  },
  // ── Australian Animals (existing) ──
  {
    id: "australian-animals",
    title: "Australian Animals",
    emoji: "🦘",
    color: "#C97B63",
    bgColor: "#FFE0B2",
    category: "Animals",
    description: "Discover amazing Australian animals!",
    characters: [],
    ageGroup: "2–6 years",
    available: false,
    platform: ["childcare"],
    tags: ["animals", "australia", "nature", "science"],
  },
  // ── Ocean Ecosystem (existing) ──
  {
    id: "ocean",
    title: "Ocean Ecosystem",
    emoji: "🌊",
    color: "#0277BD",
    bgColor: "#B3E5FC",
    category: "Nature",
    description: "Dive into the ocean and explore marine life!",
    characters: [],
    ageGroup: "2–6 years",
    available: false,
    platform: ["childcare"],
    tags: ["ocean", "water", "animals", "science"],
  },
  // ── Dinosaurs (existing) ──
  {
    id: "dinosaurs",
    title: "Dinosaurs",
    emoji: "🦕",
    color: "#558B2F",
    bgColor: "#DCEDC8",
    category: "Early Science",
    description: "Travel back in time and discover the world of dinosaurs!",
    characters: [],
    ageGroup: "3–6 years",
    available: false,
    platform: ["childcare"],
    tags: ["dinosaurs", "science", "history", "animals"],
  },
];

// ── DENTAL CLINIC SECTIONS ────────────────────────────────────
export const DENTAL_SECTIONS = [
  { id: "patient-education",   emoji: "📚", label: "Patient Education",     available: false },
  { id: "waiting-room",        emoji: "📺", label: "Waiting Room Videos",   available: false },
  { id: "story-library",       emoji: "📖", label: "Story Library",         available: false },
  { id: "oral-health-resources",emoji: "🦷",label: "Oral Health Resources", available: false },
  { id: "behaviour",           emoji: "💛", label: "Behaviour Management",  available: false },
  { id: "parent-education",    emoji: "👨‍👩‍👧",label: "Parent Education",      available: false },
  { id: "printable-activities",emoji: "📄", label: "Printable Activities",  available: false },
  { id: "certificates",        emoji: "🏅", label: "Certificates",          available: false },
  { id: "rewards",             emoji: "⭐", label: "Rewards",               available: false },
  { id: "interactive",         emoji: "🎮", label: "Interactive Resources", available: false },
];

// ── FAMILY PLATFORM SECTIONS ──────────────────────────────────
export const FAMILY_SECTIONS = [
  { id: "shared-projects",  emoji: "📚", label: "Projects",      desc: "Content shared by your childcare" },
  { id: "shared-videos",    emoji: "🎬", label: "Videos",        desc: "Videos shared by your childcare" },
  { id: "shared-songs",     emoji: "🎵", label: "Songs",         desc: "Songs shared by your childcare" },
  { id: "shared-stories",   emoji: "📖", label: "Stories",       desc: "Stories shared by your childcare" },
  { id: "shared-printables",emoji: "📄", label: "Printables",    desc: "Optional printables shared by your childcare" },
];

// ── PROJECT CONNECTIONS ───────────────────────────────────────
// Shows how projects connect to each other
export const PROJECT_CONNECTIONS = [
  { from: "recycling", to: "gardening",  label: "Reuse materials" },
  { from: "gardening", to: "cooking",    label: "Harvest & cook" },
  { from: "cooking",   to: "oral-health",label: "Brush after eating" },
];
