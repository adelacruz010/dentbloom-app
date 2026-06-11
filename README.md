# 🌸 DentBloom App — v0.2

A professional React + Vite web app for DentBloom's dental education content.
Designed to grow into a full platform with memberships, parent accounts, and premium content.

---

## 🚀 Running Locally

```bash
# Install dependencies (first time only)
npm install

# Start the development server
npm run dev
# → Opens at http://localhost:5173

# Build for production
npm run build
```

---

## 📁 Project Structure

```
dentbloom/
│
├── public/
│   └── assets/               ← ALL MEDIA FILES GO HERE
│       ├── logo/
│       │   ├── dentbloom-logo.png
│       │   └── favicon.ico
│       ├── characters/
│       │   ├── bloomy.png
│       │   ├── luna.png
│       │   ├── teo.png
│       │   └── lumy-fairy.png
│       ├── songs/
│       │   ├── *.mp3              (audio files)
│       │   └── covers/*.jpg       (album art)
│       ├── pdfs/
│       │   ├── songs/             (per-song PDFs)
│       │   ├── activities/
│       │   ├── movement-cards/
│       │   ├── posters/
│       │   ├── parents/
│       │   └── teachers/
│       └── ...
│
├── src/
│   ├── App.jsx               ← ⭐ URL routing lives here
│   ├── main.jsx
│   ├── data/
│   │   └── content.js        ← ⭐ ALL CONTENT DATA LIVES HERE
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopNav.jsx    ← Navigation bar
│   │   │   └── Footer.jsx
│   │   └── ui/
│   │       └── shared.jsx    ← Reusable UI components
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ActivitiesPage.jsx
│   │   ├── ActivityDetailPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── songs/
│   │   │   ├── SongsPage.jsx
│   │   │   └── SongDetailPage.jsx
│   │   └── resources/
│   │       └── ResourcePages.jsx  ← Movement cards, posters, parents, teachers
│   └── styles/
│       └── global.css        ← Brand colours, fonts, shared styles
│
├── vercel.json               ← Vercel routing config
├── vite.config.js
└── package.json
```

---

## 🗺️ URL Map

| URL | Page |
|-----|------|
| `/` | Home |
| `/songs` | All songs |
| `/songs/brush-brush-brush` | Brush Brush Brush song page |
| `/songs/toothbrushing-countdown` | Toothbrushing Countdown |
| `/songs/healthy-drinks` | Healthy Drinks |
| `/songs/good-morning-smiles` | Good Morning Smiles |
| `/songs/bedtime-routine` | Bedtime Routine |
| `/activities` | All activities |
| `/activities/brush-and-draw` | Brush & Draw activity |
| `/resources/movement-cards` | Movement cards |
| `/resources/posters` | Posters |
| `/resources/parents` | Parent resources |
| `/resources/teachers` | Teacher resources |
| `/about` | About Bloomy & characters |

---

## ✏️ How to Add or Edit Content

### Add a new song
Open `src/data/content.js` and add a new object to the `SONGS` array:
```js
{
  id: "my-new-song",
  title: "My New Song",
  slug: "my-new-song",       // must match the URL
  emoji: "🎶",
  color: "#C8EFE3",
  textColor: "#2E8B72",
  description: "Short description here.",
  duration: "2:00",
  videoUrl: null,            // add YouTube embed URL when ready
  audioSrc: "/assets/songs/my-new-song.mp3",
  coverSrc: "/assets/songs/covers/my-new-song.jpg",
  lyrics: ["Line 1", "Line 2"],
  movementGuide: [
    { step: 1, action: "Do this action" },
  ],
  pdfs: [
    { label: "Movement Card", file: "/assets/pdfs/songs/my-new-song-card.pdf" },
  ],
  activityId: null,
  tags: ["brushing"],
}
```
That's it — the song automatically appears on the Songs page and gets its own URL at `/songs/my-new-song`.

### Add a new activity, resource, or poster
Same pattern — add an entry to `ACTIVITIES`, `PARENT_RESOURCES`, `TEACHER_RESOURCES`, or `POSTERS` in `content.js`.

### Change brand colours
Edit the CSS variables in `src/styles/global.css` under `:root { ... }`.

---

## 🖼️ Full Asset Checklist

### Logo & Brand
- [ ] `public/assets/logo/dentbloom-logo.png` (transparent bg, ~440×200px)
- [ ] `public/assets/logo/favicon.ico`

### Characters
- [ ] `public/assets/characters/bloomy.png`
- [ ] `public/assets/characters/luna.png`
- [ ] `public/assets/characters/teo.png`
- [ ] `public/assets/characters/lumy-fairy.png`

### Song Audio
- [ ] `public/assets/songs/brush-brush-brush.mp3`
- [ ] `public/assets/songs/toothbrushing-countdown.mp3`
- [ ] `public/assets/songs/healthy-drinks.mp3`
- [ ] `public/assets/songs/good-morning-smiles.mp3`
- [ ] `public/assets/songs/bedtime-routine.mp3`

### Song Covers (album art, ~300×300px)
- [ ] `public/assets/songs/covers/brush-brush-brush.jpg`
- [ ] `public/assets/songs/covers/toothbrushing-countdown.jpg`
- [ ] `public/assets/songs/covers/healthy-drinks.jpg`
- [ ] `public/assets/songs/covers/good-morning-smiles.jpg`
- [ ] `public/assets/songs/covers/bedtime-routine.jpg`

### PDFs (add as they're created)
- [ ] `public/assets/pdfs/songs/` — per-song PDFs
- [ ] `public/assets/pdfs/activities/` — activity sheets
- [ ] `public/assets/pdfs/movement-cards/` — movement cards
- [ ] `public/assets/pdfs/posters/` — poster files
- [ ] `public/assets/pdfs/parents/` — parent guides
- [ ] `public/assets/pdfs/teachers/` — teacher resources

---

## 🔮 Planned Future Features (NOT in MVP)

These are intentionally excluded from v1 but the structure is ready for them:

| Feature | Notes |
|---------|-------|
| **User accounts** | Parent, teacher, childcare, dental clinic account types |
| **Memberships / subscriptions** | Stripe integration ready to add |
| **Premium content gating** | Just wrap pages with an auth check component |
| **Progress tracking** | Brushing streaks, completed activities |
| **Download library** | Protected PDF downloads for members |
| **App Store / Google Play** | Can wrap in Capacitor or React Native later |
| **Admin dashboard** | For managing content without touching code |

---

## 🔒 Privacy Note

Once the prototype is working, switch the GitHub repo to **Private**:
1. Go to your repo on GitHub
2. Settings → Danger Zone → Change repository visibility → Private

This protects DentBloom's intellectual property and proprietary content.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | UI framework |
| **Vite** | Fast build tool and dev server |
| **React Router v6** | Client-side page routing |
| **CSS (no framework)** | Brand-specific styling |
| **Vercel** | Hosting and deployment |

No backend. No database. No login. Safe to share as a prototype link.
