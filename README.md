# 💜 Para sa'yo — Interactive Courtship Letter Web App

A soft, romantic, purple scrapbook-themed interactive web app designed to ask a special question personally and sincerely.

## ✨ Features
- **Mobile-First Experience**: Optimized for iPhone and Android screens (390×844, 393×852) as well as desktop.
- **Scrapbook Aesthetic**: Delicate washi tape, warm cream paper textures, purple wax seal envelope, and soft doodles (♡ ✦ ✿ ˚₊‧).
- **Interactive Story Flow**:
  1. Opening greeting ("May itatanong sana ako.")
  2. Emotional buildup step-by-step
  3. Interactive wax-sealed envelope opening
  4. Physical-style handwritten letter with Taglish copy
  5. Post-letter reflection
  6. Sincere, pressure-free question with equal choices ("Yes, I'd like that ♡" and "I'd like some time to think")
  7. Gentle celebration response or respectful understanding response
  8. Chapter 01 scrapbook with sweet intention cards and optional Polaroid photos.
- **YouTube Background Music**: Hidden YouTube IFrame API audio player (`xO78bGYEMEs`) with floating music control.
- **Vercel Ready**: Ready to deploy with zero backend requirements.

---

## 🛠️ How to Customize Everything

All text, names, letter content, YouTube video ID, and scrapbook cards are centralized in **one single file**:

📁 `src/config/content.js`

### 1. Change Her Name & Your Name
```javascript
export const contentConfig = {
  recipientName: "Angel", // Her name
  senderName: "Andrei",   // Your name
  ...
```

### 2. Edit The Letter
In `src/config/content.js`, edit the `letter` object:
```javascript
letter: {
  salutation: "Dear Angel,",
  paragraphs: [
    "Your custom paragraph 1...",
    "Your custom paragraph 2...",
  ],
  signature: "- Andrei",
}
```

### 3. Change Background Music
In `src/config/content.js`, change `youtubeVideoId`:
```javascript
youtubeVideoId: "xO78bGYEMEs", // Change to any YouTube Video ID
```

### 4. Add Real Photos (Optional Polaroid Cards)
You can place image files in the `public/photos/` folder and add them to the `photos` array in `src/config/content.js`:
```javascript
photos: [
  {
    url: "/photos/hangout.jpg",
    caption: "That coffee afternoon ☕",
    date: "July 2024",
    rotation: "-2deg"
  }
]
```
*(If left empty `[]`, the website automatically displays cleanly without photo slots).*

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev

# 3. Build for production
npm run build
```

---

## ☁️ How to Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep the default settings (Framework Preset: **Vite**, Build Command: `npm run build`, Output Directory: `dist`).
5. Click **Deploy**!
