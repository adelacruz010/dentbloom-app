// DentBloom Content Data — v0.3
// Edit this file to add or update content.
// All images go in /public/assets/

// ── SONGS ────────────────────────────────────────────────────
export const SONGS = [
  {
    id: "brush-brush-brush",
    title: "Brush Brush Brush!",
    emoji: "🪥",
    color: "#085a64",
    duration: "2:00",
    description: "Our most popular brushing song — makes 2 minutes fly by!",
    videoUrl: null, // add YouTube embed URL e.g. "https://www.youtube.com/embed/XXXXX"
    audioSrc: "/assets/songs/brush-brush-brush.mp3",
    coverSrc: "/assets/songs/covers/brush-brush-brush.jpg",
    lyrics: [
      "Brush, brush, brush your teeth,",
      "Brush them every day!",
      "Up and down and all around,",
      "Keep the bugs away!",
    ],
    movementGuide: [
      { step: 1, action: "Stand up tall and hold your toothbrush up high" },
      { step: 2, action: "Move your arm up and down like a toothbrush" },
      { step: 3, action: "Wiggle your whole body side to side" },
      { step: 4, action: "Open your mouth wide and say Ahhh!" },
    ],
    pdfs: [
      { label: "Movement Card", file: "/assets/pdfs/songs/brush-brush-brush-movement-card.pdf" },
      { label: "Lyrics Sheet",  file: "/assets/pdfs/songs/brush-brush-brush-lyrics.pdf" },
    ],
    tags: ["brushing", "popular"],
  },
  {
    id: "toothbrushing-countdown",
    title: "Toothbrushing Countdown",
    emoji: "⏳",
    color: "#7c8d09",
    duration: "2:00",
    description: "Count down from 10 while brushing — perfect for building routine!",
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
    ],
    tags: ["brushing", "counting"],
  },
  {
    id: "healthy-drinks",
    title: "Healthy Drinks",
    emoji: "💧",
    color: "#0d7a87",
    duration: "1:50",
    description: "Learn which drinks are good for our teeth!",
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
    pdfs: [],
    tags: ["nutrition", "drinks"],
  },
  {
    id: "good-morning-smiles",
    title: "Good Morning Smiles",
    emoji: "🌅",
    color: "#fd5946",
    duration: "1:45",
    description: "Start the day right with a morning brushing song.",
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
      { step: 3, action: "Show off your biggest smile!" },
    ],
    pdfs: [],
    tags: ["morning", "routine"],
  },
  {
    id: "bedtime-routine",
    title: "Bedtime Routine",
    emoji: "🌙",
    color: "#4a3080",
    duration: "2:05",
    description: "Wind down with a gentle bedtime brushing song.",
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
    ],
    pdfs: [],
    tags: ["bedtime", "calm"],
  },
];

// ── STORIES ───────────────────────────────────────────────────
export const STORIES = [
  {
    id: "dental-visit",
    title: "My Dentist Visit",
    emoji: "🦷",
    color: "#085a64",
    description: "Follow Luna and Teo to the dentist for the very first time!",
    steps: [
      { emoji: "🏥", title: "We arrive at the dentist", desc: "Today we go to the dentist! It is a friendly, safe place.", bg: "#cce8f4" },
      { emoji: "🪑", title: "I sit on the special chair", desc: "The chair goes up and down! I sit and get comfy.", bg: "#d4f0e8" },
      { emoji: "🕶️", title: "I wear cool sunglasses", desc: "The dentist gives me special sunglasses. I look so cool!", bg: "#e8e0f8" },
      { emoji: "🦷", title: "The dentist counts my teeth", desc: "I open wide. The dentist counts all my beautiful teeth!", bg: "#ffd6dc" },
      { emoji: "🌟", title: "I did it! I was so brave!", desc: "I was amazing! My teeth are clean and healthy.", bg: "#fff8e6", final: true },
    ],
  },
  {
    id: "sugar-bugs",
    title: "Goodbye Sugar Bugs!",
    emoji: "🦠",
    color: "#7c8d09",
    description: "Learn what sugar bugs are and how brushing keeps them away!",
    steps: [
      { emoji: "🍬", title: "Sugar bugs love sweet food", desc: "Sugar bugs are tiny and they love to eat sweet things!", bg: "#fff8e6" },
      { emoji: "🦠", title: "They hide on our teeth", desc: "After we eat, sugar bugs hide on our teeth and cause problems.", bg: "#ffd6dc" },
      { emoji: "🪥", title: "Brushing chases them away", desc: "But our toothbrush is a superhero! It brushes all the bugs away!", bg: "#d4f0e8" },
      { emoji: "💧", title: "Rinse and smile!", desc: "Rinse with water and show off your clean, happy smile!", bg: "#cce8f4" },
      { emoji: "⭐", title: "You are a Tooth Hero!", desc: "Every time you brush, you beat the sugar bugs. You are amazing!", bg: "#fff8e6", final: true },
    ],
  },
];

// ── ACTIVITIES ────────────────────────────────────────────────
export const ACTIVITIES = [
  {
    id: "brush-and-draw",
    title: "Brush & Draw",
    emoji: "🎨",
    color: "#face8f",
    ageRange: "2–5 years",
    duration: "10 min",
    description: "Draw and colour your very own toothbrush!",
    instructions: [
      "Print the toothbrush outline sheet",
      "Choose your favourite colours",
      "Colour in your toothbrush",
      "Count the bristles together!",
    ],
    pdfSrc: "/assets/pdfs/activities/brush-and-draw.pdf",
    tags: ["art", "fine motor"],
  },
  {
    id: "drinks-sorting",
    title: "Healthy Drinks Sort",
    emoji: "🥤",
    color: "#cce8f4",
    ageRange: "3–6 years",
    duration: "15 min",
    description: "Sort drinks into good for teeth and not so good for teeth!",
    instructions: [
      "Print and cut out the drink picture cards",
      "Lay out two sorting mats: Happy Tooth and Sad Tooth",
      "Take turns placing cards on the correct mat",
      "Talk about why sugary drinks can hurt teeth",
    ],
    pdfSrc: "/assets/pdfs/activities/drinks-sorting.pdf",
    tags: ["sorting", "nutrition"],
  },
  {
    id: "sugar-bug-game",
    title: "Catch the Sugar Bugs",
    emoji: "🦠",
    color: "#e8e0f8",
    ageRange: "2–5 years",
    duration: "5 min",
    description: "An active game where children brush sugar bugs away!",
    instructions: [
      "Children pretend their hands are toothbrushes",
      "Teacher calls out where the sugar bugs are hiding",
      "Children brush the bugs away with their hands",
      "Celebrate with a big smile at the end!",
    ],
    pdfSrc: "/assets/pdfs/activities/sugar-bug-game.pdf",
    tags: ["movement", "game"],
  },
];

// ── ANIMAL FRIENDS ────────────────────────────────────────────
export const ANIMALS = [
  {
    id: "bunny",
    name: "Bella Bunny",
    emoji: "🐰",
    color: "#ffd6dc",
    imageSrc: "/assets/animals/bunny.png",
    description: "Bella Bunny loves to hop, hop, hop — and brush her teeth twice a day!",
    funFact: "Rabbits have 28 teeth — just like grown-ups!",
    movement: "Hop like a bunny while you brush your teeth!",
    movementSteps: [
      { step: 1, action: "Crouch down low like a bunny" },
      { step: 2, action: "Hop forward three times" },
      { step: 3, action: "Wiggle your nose and show your smile!" },
    ],
  },
  {
    id: "turtle",
    name: "Tommy Turtle",
    emoji: "🐢",
    color: "#d4f0e8",
    imageSrc: "/assets/animals/turtle.png",
    description: "Tommy Turtle is slow and steady — he never forgets to brush!",
    funFact: "Turtles don't have teeth — they use a hard beak instead!",
    movement: "Move slowly like a turtle, nice and careful!",
    movementSteps: [
      { step: 1, action: "Get on your hands and knees like a turtle" },
      { step: 2, action: "Move very slowly forward" },
      { step: 3, action: "Poke your head out and smile!" },
    ],
  },
  {
    id: "giraffe",
    name: "Gina Giraffe",
    emoji: "🦒",
    color: "#fff8e6",
    imageSrc: "/assets/animals/giraffe.png",
    description: "Gina Giraffe has a very long neck — perfect for reaching high branches and brushing up high!",
    funFact: "Giraffes have 32 teeth — the same as adult humans!",
    movement: "Stretch your neck up tall like a giraffe!",
    movementSteps: [
      { step: 1, action: "Stand up very straight and tall" },
      { step: 2, action: "Reach your arms up as high as they go" },
      { step: 3, action: "Pretend to eat leaves from the tallest tree!" },
    ],
  },
  {
    id: "koala",
    name: "Kiki Koala",
    emoji: "🐨",
    color: "#e8e0f8",
    imageSrc: "/assets/animals/koala.png",
    description: "Kiki Koala loves to cuddle and always brushes before bedtime!",
    funFact: "Koalas have very strong teeth for chewing tough gum leaves!",
    movement: "Hug yourself like a cosy koala!",
    movementSteps: [
      { step: 1, action: "Wrap your arms around yourself in a big hug" },
      { step: 2, action: "Sway side to side slowly" },
      { step: 3, action: "Give someone next to you a koala hug!" },
    ],
  },
  {
    id: "dolphin",
    name: "Dino Dolphin",
    emoji: "🐬",
    color: "#cce8f4",
    imageSrc: "/assets/animals/dolphin.png",
    description: "Dino Dolphin loves to swim and splash — and his teeth are always sparkling clean!",
    funFact: "Dolphins have up to 100 teeth and never get new ones!",
    movement: "Swim through the water like a dolphin!",
    movementSteps: [
      { step: 1, action: "Put your hands together above your head like a fin" },
      { step: 2, action: "Dive forward and swim through the air" },
      { step: 3, action: "Jump up and click like a dolphin!" },
    ],
  },
  {
    id: "lion",
    name: "Leo Lion",
    emoji: "🦁",
    color: "#face8f",
    imageSrc: "/assets/animals/lion.png",
    description: "Leo Lion is the bravest in the jungle — and the bravest at the dentist too!",
    funFact: "Lions have 30 teeth, including very sharp canine teeth!",
    movement: "ROAR like a brave lion!",
    movementSteps: [
      { step: 1, action: "Crouch down low and get ready" },
      { step: 2, action: "Leap up with your arms wide" },
      { step: 3, action: "ROAR as loud as you can and show your teeth!" },
    ],
  },
];

// ── PARENT RESOURCES ──────────────────────────────────────────
export const PARENT_RESOURCES = [
  { id: "first-visit",    icon: "🦷", title: "First Dentist Visit",         desc: "How to prepare your child for a positive first dental visit.",    color: "#cce8f4", pdfSrc: "/assets/pdfs/parents/first-dentist-visit.pdf" },
  { id: "brushing-guide", icon: "🪥", title: "Toothbrushing Guide",         desc: "Age-by-age guide on helping your child brush effectively.",       color: "#d4f0e8", pdfSrc: "/assets/pdfs/parents/brushing-guide.pdf" },
  { id: "healthy-snacks", icon: "🍎", title: "Tooth-Friendly Snacks",       desc: "Simple snack ideas that are good for little teeth.",              color: "#fff8e6", pdfSrc: "/assets/pdfs/parents/healthy-snacks.pdf" },
  { id: "neurodivergent", icon: "💛", title: "Neurodivergent Support",       desc: "Gentle strategies for children who find dental care challenging.", color: "#ffd6dc", pdfSrc: "/assets/pdfs/parents/neurodivergent-support.pdf" },
  { id: "fluoride-faqs",  icon: "❓", title: "Fluoride FAQs",               desc: "Common questions about fluoride answered simply.",                color: "#e8e0f8", pdfSrc: "/assets/pdfs/parents/fluoride-faqs.pdf" },
  { id: "downloads",      icon: "⬇️", title: "Printable Downloads",         desc: "Free printable charts, reward cards, and activity sheets.",       color: "#face8f", pdfSrc: null },
];

// ── EDUCATOR RESOURCES ────────────────────────────────────────
export const EDUCATOR_RESOURCES = [
  { id: "lesson-plan",    icon: "📋", title: "Toothbrushing Lesson Plan",   desc: "Complete lesson plan using DentBloom songs and activities.",      color: "#d4f0e8", pdfSrc: "/assets/pdfs/educators/lesson-plan.pdf" },
  { id: "curriculum",     icon: "📚", title: "Curriculum Links",            desc: "Links to the Early Years Learning Framework.",                    color: "#cce8f4", pdfSrc: "/assets/pdfs/educators/curriculum-links.pdf" },
  { id: "classroom-songs",icon: "🎵", title: "Classroom Songs Pack",        desc: "All DentBloom songs with lyrics and movement guides.",            color: "#fff8e6", pdfSrc: "/assets/pdfs/educators/classroom-songs.pdf" },
  { id: "posters",        icon: "🖼️", title: "Classroom Posters",          desc: "Colourful printable posters for your learning space.",            color: "#ffd6dc", pdfSrc: "/assets/pdfs/educators/posters.pdf" },
  { id: "certificates",   icon: "🏅", title: "Achievement Certificates",   desc: "Printable certificates to reward children's bravery.",            color: "#face8f", pdfSrc: "/assets/pdfs/educators/certificates.pdf" },
  { id: "activity-packs", icon: "🎨", title: "Activity Packs",             desc: "Ready-to-use activity packs for childcare and kindy.",            color: "#e8e0f8", pdfSrc: "/assets/pdfs/educators/activity-packs.pdf" },
];
