// ============================================================
// DentBloom Content Data
// ============================================================
// This is the single source of truth for all app content.
// To add a new song, activity, or resource — just add an entry here.
// No code changes needed elsewhere.
//
// ASSET PATHS: All files go in /public/assets/
// When you add a real file, replace the placeholder path with the real one.
// ============================================================

// ── SONGS ────────────────────────────────────────────────────
export const SONGS = [
  {
    id: "brush-brush-brush",
    title: "Brush Brush Brush!",
    slug: "brush-brush-brush",
    emoji: "🪥",
    color: "#C8EFE3",
    textColor: "#2E8B72",
    description: "Our most popular brushing song to make 2 minutes fly by!",
    duration: "2:00",
    // Replace with real asset paths once files are added:
    videoUrl: null,                          // e.g. "https://www.youtube.com/embed/XXXXXXX"
    audioSrc: "/assets/songs/brush-brush-brush.mp3",
    coverSrc: "/assets/songs/covers/brush-brush-brush.jpg",
    // Lyrics: add real lyrics line by line
    lyrics: [
      "Brush, brush, brush your teeth,",
      "Brush them every day!",
      "Up and down and all around,",
      "Keep the bugs away!",
      // Add more lines here...
    ],
    // Movement guide: step by step actions
    movementGuide: [
      { step: 1, action: "Stand up tall and hold your toothbrush up high" },
      { step: 2, action: "Move your arm up and down like a toothbrush" },
      { step: 3, action: "Wiggle your whole body side to side" },
      { step: 4, action: "Open your mouth wide and say 'Ahhh!'" },
    ],
    // PDF resources for this song
    pdfs: [
      { label: "Movement Card", file: "/assets/pdfs/songs/brush-brush-brush-movement-card.pdf" },
      { label: "Lyrics Sheet", file: "/assets/pdfs/songs/brush-brush-brush-lyrics.pdf" },
      { label: "Activity Sheet", file: "/assets/pdfs/songs/brush-brush-brush-activity.pdf" },
    ],
    // Activity linked to this song
    activityId: "brush-and-draw",
    tags: ["brushing", "toddler", "popular"],
  },
  {
    id: "toothbrushing-countdown",
    title: "Toothbrushing Countdown",
    slug: "toothbrushing-countdown",
    emoji: "⏳",
    color: "#FFD6DC",
    textColor: "#C25470",
    description: "Count down from 10 while brushing — perfect for little ones learning routine!",
    duration: "2:00",
    videoUrl: null,
    audioSrc: "/assets/songs/toothbrushing-countdown.mp3",
    coverSrc: "/assets/songs/covers/toothbrushing-countdown.jpg",
    lyrics: [
      "Ten, nine, eight — we're brushing great!",
      "Seven, six, five — it's good to be alive!",
      "Four, three, two — our teeth are new!",
      "One — we're done! That was so fun!",
    ],
    movementGuide: [
      { step: 1, action: "Hold up 10 fingers and count them down" },
      { step: 2, action: "Brush in big circles for each number" },
      { step: 3, action: "Jump once when you reach number one!" },
    ],
    pdfs: [
      { label: "Movement Card", file: "/assets/pdfs/songs/countdown-movement-card.pdf" },
      { label: "Lyrics Sheet", file: "/assets/pdfs/songs/countdown-lyrics.pdf" },
    ],
    activityId: null,
    tags: ["brushing", "counting", "routine"],
  },
  {
    id: "healthy-drinks",
    title: "Healthy Drinks",
    slug: "healthy-drinks",
    emoji: "💧",
    color: "#C8E8FF",
    textColor: "#3A7EB5",
    description: "Learn which drinks are good for our teeth and which ones to avoid.",
    duration: "1:50",
    videoUrl: null,
    audioSrc: "/assets/songs/healthy-drinks.mp3",
    coverSrc: "/assets/songs/covers/healthy-drinks.jpg",
    lyrics: [
      "Water, water, drink it up!",
      "Pour it in your favourite cup!",
      "Milk is great for teeth so strong,",
      "Drink them up and sing along!",
    ],
    movementGuide: [
      { step: 1, action: "Pretend to pour a glass of water" },
      { step: 2, action: "Drink it up with big gulps!" },
      { step: 3, action: "Give your teeth a big smile" },
    ],
    pdfs: [
      { label: "Movement Card", file: "/assets/pdfs/songs/healthy-drinks-movement-card.pdf" },
      { label: "Activity Sheet", file: "/assets/pdfs/songs/healthy-drinks-activity.pdf" },
    ],
    activityId: "drinks-sorting",
    tags: ["nutrition", "drinks", "dental health"],
  },
  {
    id: "good-morning-smiles",
    title: "Good Morning Smiles",
    slug: "good-morning-smiles",
    emoji: "🌅",
    color: "#FFF3C4",
    textColor: "#B58C1A",
    description: "Start the day right with a morning brushing routine song.",
    duration: "1:45",
    videoUrl: null,
    audioSrc: "/assets/songs/good-morning-smiles.mp3",
    coverSrc: "/assets/songs/covers/good-morning-smiles.jpg",
    lyrics: [
      "Good morning, good morning, time to rise!",
      "Open up those sleepy eyes!",
      "Grab your brush and paste so white,",
      "Brush your teeth — they'll shine so bright!",
    ],
    movementGuide: [
      { step: 1, action: "Stretch your arms up high like waking up" },
      { step: 2, action: "Rub your eyes and yawn BIG" },
      { step: 3, action: "Mime picking up a toothbrush" },
      { step: 4, action: "Show off your biggest smile!" },
    ],
    pdfs: [
      { label: "Movement Card", file: "/assets/pdfs/songs/good-morning-movement-card.pdf" },
      { label: "Lyrics Sheet", file: "/assets/pdfs/songs/good-morning-lyrics.pdf" },
    ],
    activityId: null,
    tags: ["morning", "routine", "brushing"],
  },
  {
    id: "bedtime-routine",
    title: "Bedtime Routine",
    slug: "bedtime-routine",
    emoji: "🌙",
    color: "#E0D4F5",
    textColor: "#6A4DB5",
    description: "Wind down the day with a gentle bedtime brushing routine.",
    duration: "2:05",
    videoUrl: null,
    audioSrc: "/assets/songs/bedtime-routine.mp3",
    coverSrc: "/assets/songs/covers/bedtime-routine.jpg",
    lyrics: [
      "The moon is up, the stars are bright,",
      "Time to brush our teeth goodnight!",
      "Softly, gently, all around,",
      "Lay your toothbrush gently down.",
    ],
    movementGuide: [
      { step: 1, action: "Make your hands into a moon shape" },
      { step: 2, action: "Brush very slowly and gently" },
      { step: 3, action: "Tiptoe quietly like it's bedtime" },
      { step: 4, action: "Put hands together like going to sleep" },
    ],
    pdfs: [
      { label: "Movement Card", file: "/assets/pdfs/songs/bedtime-movement-card.pdf" },
      { label: "Lyrics Sheet", file: "/assets/pdfs/songs/bedtime-lyrics.pdf" },
    ],
    activityId: null,
    tags: ["bedtime", "routine", "calm"],
  },
];

// ── ACTIVITIES ───────────────────────────────────────────────
export const ACTIVITIES = [
  {
    id: "brush-and-draw",
    title: "Brush & Draw",
    emoji: "🎨",
    color: "#C8EFE3",
    textColor: "#2E8B72",
    ageRange: "2–5 years",
    duration: "10–15 min",
    description: "Children draw their own toothbrush and decorate it with their favourite colours.",
    instructions: [
      "Print or hand out the toothbrush outline sheet",
      "Ask children to colour their toothbrush",
      "Talk about what colour toothbrush they have at home",
      "Count the bristles together!",
    ],
    materials: ["Toothbrush outline printout", "Crayons or markers", "Optional: glitter glue for bristles"],
    pdfSrc: "/assets/pdfs/activities/brush-and-draw.pdf",
    thumbnailSrc: "/assets/activities/brush-and-draw-thumb.jpg",
    tags: ["art", "fine motor", "brushing"],
  },
  {
    id: "drinks-sorting",
    title: "Healthy & Unhealthy Drinks Sort",
    emoji: "🥤",
    color: "#C8E8FF",
    textColor: "#3A7EB5",
    ageRange: "3–6 years",
    duration: "15–20 min",
    description: "Children sort picture cards into 'good for teeth' and 'not so good for teeth' groups.",
    instructions: [
      "Print and cut out the drink picture cards",
      "Lay out two sorting mats: Happy Tooth and Sad Tooth",
      "Children take turns placing cards on the correct mat",
      "Discuss why sugary drinks can hurt teeth",
    ],
    materials: ["Drink sorting cards (printout)", "Two sorting mats", "Scissors (adult use)"],
    pdfSrc: "/assets/pdfs/activities/drinks-sorting.pdf",
    thumbnailSrc: "/assets/activities/drinks-sorting-thumb.jpg",
    tags: ["sorting", "nutrition", "dental health"],
  },
  {
    id: "sugar-bug-game",
    title: "Catch the Sugar Bugs",
    emoji: "🦠",
    color: "#E0D4F5",
    textColor: "#6A4DB5",
    ageRange: "2–5 years",
    duration: "5–10 min",
    description: "An active movement game where children chase and catch pretend sugar bugs.",
    instructions: [
      "Children pretend their hands are toothbrushes",
      "Teacher calls out body parts where the sugar bugs are hiding",
      "Children use their 'toothbrush hands' to brush the bugs away",
      "Celebrate with a big smile at the end!",
    ],
    materials: ["Open floor space", "Optional: printed sugar bug cards to stick on walls"],
    pdfSrc: "/assets/pdfs/activities/sugar-bug-game.pdf",
    thumbnailSrc: "/assets/activities/sugar-bug-game-thumb.jpg",
    tags: ["movement", "game", "brushing"],
  },
];

// ── MOVEMENT CARDS ────────────────────────────────────────────
export const MOVEMENT_CARDS = [
  {
    id: "mc-brush-brush-brush",
    title: "Brush Brush Brush",
    songId: "brush-brush-brush",
    pdfSrc: "/assets/pdfs/movement-cards/brush-brush-brush.pdf",
    thumbnailSrc: "/assets/movement-cards/brush-brush-brush-thumb.jpg",
    color: "#C8EFE3",
  },
  {
    id: "mc-countdown",
    title: "Toothbrushing Countdown",
    songId: "toothbrushing-countdown",
    pdfSrc: "/assets/pdfs/movement-cards/countdown.pdf",
    thumbnailSrc: "/assets/movement-cards/countdown-thumb.jpg",
    color: "#FFD6DC",
  },
  {
    id: "mc-healthy-drinks",
    title: "Healthy Drinks",
    songId: "healthy-drinks",
    pdfSrc: "/assets/pdfs/movement-cards/healthy-drinks.pdf",
    thumbnailSrc: "/assets/movement-cards/healthy-drinks-thumb.jpg",
    color: "#C8E8FF",
  },
];

// ── POSTERS ───────────────────────────────────────────────────
export const POSTERS = [
  {
    id: "poster-brushing-steps",
    title: "How to Brush Your Teeth",
    description: "A colourful step-by-step poster for classroom or bathroom walls.",
    pdfSrc: "/assets/pdfs/posters/how-to-brush.pdf",
    thumbnailSrc: "/assets/posters/how-to-brush-thumb.jpg",
    color: "#C8EFE3",
  },
  {
    id: "poster-healthy-drinks",
    title: "Healthy Drinks for Happy Teeth",
    description: "Visual guide to tooth-friendly drinks.",
    pdfSrc: "/assets/pdfs/posters/healthy-drinks.pdf",
    thumbnailSrc: "/assets/posters/healthy-drinks-thumb.jpg",
    color: "#C8E8FF",
  },
  {
    id: "poster-sugar-bugs",
    title: "Goodbye Sugar Bugs!",
    description: "Explains what sugar bugs are in a fun, child-friendly way.",
    pdfSrc: "/assets/pdfs/posters/sugar-bugs.pdf",
    thumbnailSrc: "/assets/posters/sugar-bugs-thumb.jpg",
    color: "#FFD6DC",
  },
];

// ── PARENT RESOURCES ──────────────────────────────────────────
export const PARENT_RESOURCES = [
  {
    id: "pr-first-dentist-visit",
    title: "Preparing for Your Child's First Dentist Visit",
    description: "A gentle guide for parents on making the first dental visit a positive experience.",
    pdfSrc: "/assets/pdfs/parents/first-dentist-visit.pdf",
    thumbnailSrc: null,
    icon: "🦷",
    color: "#C8E8FF",
  },
  {
    id: "pr-brushing-guide",
    title: "Toothbrushing Guide for Toddlers",
    description: "Age-by-age guide on how to help your child brush effectively.",
    pdfSrc: "/assets/pdfs/parents/brushing-guide.pdf",
    thumbnailSrc: null,
    icon: "🪥",
    color: "#C8EFE3",
  },
  {
    id: "pr-healthy-snacks",
    title: "Tooth-Friendly Snacks Guide",
    description: "Simple snack ideas that are good for little teeth.",
    pdfSrc: "/assets/pdfs/parents/healthy-snacks.pdf",
    thumbnailSrc: null,
    icon: "🍎",
    color: "#FFF3C4",
  },
  {
    id: "pr-fluoride-faqs",
    title: "Fluoride FAQs for Parents",
    description: "Common parent questions about fluoride answered simply.",
    pdfSrc: "/assets/pdfs/parents/fluoride-faqs.pdf",
    thumbnailSrc: null,
    icon: "❓",
    color: "#E0D4F5",
  },
];

// ── TEACHER RESOURCES ─────────────────────────────────────────
export const TEACHER_RESOURCES = [
  {
    id: "tr-lesson-plan-brushing",
    title: "Toothbrushing Lesson Plan",
    description: "A complete lesson plan for preschool/kindy using DentBloom songs and activities.",
    pdfSrc: "/assets/pdfs/teachers/lesson-plan-brushing.pdf",
    thumbnailSrc: null,
    icon: "📋",
    color: "#C8EFE3",
    ageRange: "3–5 years",
  },
  {
    id: "tr-curriculum-links",
    title: "Curriculum Links Document",
    description: "Shows how DentBloom content links to the Early Years Learning Framework.",
    pdfSrc: "/assets/pdfs/teachers/curriculum-links.pdf",
    thumbnailSrc: null,
    icon: "📚",
    color: "#C8E8FF",
    ageRange: "All ages",
  },
  {
    id: "tr-dental-health-week",
    title: "Dental Health Week Pack",
    description: "Everything you need for Dental Health Week in one pack.",
    pdfSrc: "/assets/pdfs/teachers/dental-health-week.pdf",
    thumbnailSrc: null,
    icon: "🦷",
    color: "#FFD6DC",
    ageRange: "2–6 years",
  },
  {
    id: "tr-movement-guide",
    title: "Teacher Movement Guide",
    description: "Step-by-step instructions for leading DentBloom song movements.",
    pdfSrc: "/assets/pdfs/teachers/movement-guide.pdf",
    thumbnailSrc: null,
    icon: "💃",
    color: "#E0D4F5",
    ageRange: "All ages",
  },
];

// ── ABOUT BLOOMY ──────────────────────────────────────────────
export const ABOUT_BLOOMY = {
  tagline: "Meet Bloomy — your child's dental best friend!",
  description: `Bloomy is a friendly flower-tooth character who loves helping children learn about healthy smiles.
    Through songs, dances, and activities, Bloomy makes dental health fun, gentle, and memorable for toddlers and preschoolers.`,
  characters: [
    { id: "bloomy",    name: "Bloomy",          role: "The happy tooth who loves to smile!",           imageSrc: "/assets/characters/bloomy.png" },
    { id: "luna",      name: "Luna",            role: "Bloomy's best friend who loves to brush!",      imageSrc: "/assets/characters/luna.png" },
    { id: "teo",       name: "Teo",             role: "Teo shows that even tough kids brush their teeth!", imageSrc: "/assets/characters/teo.png" },
    { id: "lumy",      name: "Lumy Tooth Fairy", role: "The magical tooth fairy who rewards brave smiles!", imageSrc: "/assets/characters/lumy-fairy.png" },
  ],
};
