# Firebase Setup Guide for Portfolio

## Quick Start

Your portfolio is ready to receive contact messages through Firebase! Follow these steps to complete the setup.

## Step 1: Get Your Firebase API Key

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **portfolio-4f4d9**
3. Click the gear icon ⚙️ → **Project Settings**
4. Scroll down to "Your apps" section
5. Find your Web app and click the config icon
6. Copy the entire `firebaseConfig` object
7. Your API Key is the value after `"apiKey": "`
   - It will look like: `AIzaSyD...` (a long string starting with "AIzaSy")

## Step 2: Add to Local Development

1. Open `/vercel/share/v0-project/.env.local`
2. Replace `YOUR_API_KEY_HERE` with your actual API Key:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyD_xxxxxxxxxxxxxxxxxxxx
   ```
3. Save the file
4. Restart your dev server: `pnpm dev`

## Step 3: Configure Firestore Database

1. In Firebase Console, go to **Build** → **Firestore Database**
2. Click **Create Database**
3. Choose:
   - Location: Your preferred region
   - Security rules: **Start in test mode** (for development)
4. Once created, create a new collection:
   - Collection ID: `messages`
   - Add Document ID: `auto-generate`

## Step 4: Deploy to Vercel

1. In your Vercel project settings, go to **Settings** → **Environment Variables**
2. Add these variables:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY = YOUR_ACTUAL_API_KEY
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = portfolio-4f4d9.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID = portfolio-4f4d9
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = portfolio-4f4d9.firebasestorage.app
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = 543139036873
   NEXT_PUBLIC_FIREBASE_APP_ID = 1:543139036873:web:a9249a39cbd536c4085718
   ```
3. Redeploy your project

## Testing the Contact Form

1. Navigate to your portfolio
2. Scroll to the **Contact** section
3. Fill in the form:
   - Name: Enter your name
   - Email: Enter your email
   - Message: Write your message
4. Click **Send message**
5. You should see "Message sent!" confirmation
6. Check your Firestore Console to see the message in the `messages` collection

## Firestore Message Structure

Each message will be stored with this structure:
```json
{
  "name": "User's Name",
  "email": "user@email.com",
  "message": "Message content",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "status": "new"
}
```

## Firestore Security Rules (Production)

When you're ready for production, update your security rules to:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{document=**} {
      allow create: if true;
      allow read: if request.auth != null;
    }
  }
}
```

This allows anyone to submit messages but only authenticated users can read them.

## Troubleshooting

### "Message failed to send"
- Check that `NEXT_PUBLIC_FIREBASE_API_KEY` is set correctly
- Verify Firestore database is created
- Check browser console for error messages

### API Key not loading
- Make sure `.env.local` file exists in project root
- Restart dev server after adding env variables
- Check that variable name is exactly: `NEXT_PUBLIC_FIREBASE_API_KEY`

### Firestore not receiving messages
- Verify `messages` collection exists
- Check Firestore security rules allow writes
- Check browser console for Firebase errors

## Features Implemented

✅ **GitHub Projects** - Automatically fetches your repos from github.com/SHAW258
✅ **Contact Form** - Firebase-powered with validation and loading states
✅ **Modern Design** - Responsive layout with Tailwind CSS
✅ **Dark/Light Theme** - Toggle between themes with localStorage persistence
✅ **Mobile Optimized** - Perfect on all screen sizes

## Project Files

- `/lib/firebase.ts` - Firebase configuration
- `/lib/email-service.ts` - Contact form service
- `/lib/github.ts` - GitHub API service
- `/components/GitHubProjects.tsx` - GitHub projects display
- `/components/Contact.tsx` - Contact form component
- `/app/api/github/route.ts` - GitHub API endpoint

Enjoy your modern portfolio! 🚀
