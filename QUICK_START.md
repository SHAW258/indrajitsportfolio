# Quick Start Guide

## In 5 Minutes

### 1. Get Firebase API Key (2 min)
```
Firebase Console → portfolio-4f4d9 → Settings ⚙️ → Project Settings
→ Copy apiKey value (AIzaSy...)
```

### 2. Add to .env.local (1 min)
```
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_KEY_HERE
```

### 3. Test Locally (1 min)
```bash
pnpm dev
# Open http://localhost:3000
# Fill contact form and submit
```

### 4. Deploy to Vercel (1 min)
```
Vercel Dashboard → Environment Variables → Add all 6 Firebase variables
→ Redeploy
```

---

## Commands

```bash
# Install
pnpm install

# Dev server
pnpm dev

# Build
pnpm build

# Start production build
pnpm start

# Deploy
vercel
```

---

## Firebase Variables

```
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_KEY_HERE
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=portfolio-4f4d9.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=portfolio-4f4d9
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=portfolio-4f4d9.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=543139036873
NEXT_PUBLIC_FIREBASE_APP_ID=1:543139036873:web:a9249a39cbd536c4085718
```

---

## Firestore Setup

1. Firebase Console → Build → Firestore Database
2. Create Database (test mode for dev)
3. Create collection: `messages`
4. Done! ✓

---

## Portfolio Features

✅ GitHub projects auto-fetch
✅ Firebase contact form
✅ Dark/Light theme
✅ Responsive design
✅ Mobile optimized
✅ Beautiful animations

---

## Need Help?

- `.env.local` - For local development
- `FIREBASE_SETUP.md` - Detailed Firebase guide
- `DEPLOYMENT.md` - Full deployment instructions

---

**You're all set! Deploy and start receiving messages.** 🚀
