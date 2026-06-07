# Portfolio Deployment Guide

## Your Portfolio is Ready! 🚀

Your modern, colorful portfolio with GitHub integration and Firebase contact form is ready to deploy.

## What's Included

### Features
- **Modern Design**: Colorful dark/light theme with smooth animations
- **GitHub Integration**: Displays all your public repositories from github.com/SHAW258
- **Firebase Contact Form**: Secure message submission to Firestore
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Navigation**: Smooth scrolling with theme toggle

### Sections
1. Hero - Eye-catching introduction
2. About - Your professional journey
3. Skills - 6 skill categories with colorful badges
4. Projects - 3 featured projects
5. GitHub Projects - Dynamic list of your repositories
6. Contact - Firebase-powered contact form
7. Footer - Links and copyright

## Local Development

### Run Locally
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```

### With Firebase Enabled
```bash
# 1. Add your Firebase API Key to .env.local
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_KEY_HERE

# 2. Start the dev server
pnpm dev

# 3. Test the contact form
```

## Deployment to Vercel

### Option 1: From GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add portfolio with Firebase and GitHub integration"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select "Next.js" framework

3. **Add Environment Variables**
   - In Vercel Dashboard → Project Settings → Environment Variables
   - Add all 6 Firebase variables (see below)

4. **Deploy**
   - Vercel automatically deploys on push

### Option 2: Direct Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables when prompted
```

## Environment Variables

Add these to Vercel Settings → Environment Variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyD_xxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=portfolio-4f4d9.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=portfolio-4f4d9
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=portfolio-4f4d9.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=543139036873
NEXT_PUBLIC_FIREBASE_APP_ID=1:543139036873:web:a9249a39cbd536c4085718
```

## Firebase Setup Checklist

- [ ] Create Firebase Project (portfolio-4f4d9)
- [ ] Get Firebase API Key from Project Settings
- [ ] Create Firestore Database (Start in test mode)
- [ ] Create `messages` collection in Firestore
- [ ] Add environment variables to `.env.local` (local dev)
- [ ] Add environment variables to Vercel (production)
- [ ] Test contact form locally
- [ ] Deploy to Vercel
- [ ] Test contact form on live site

## Custom Domain

1. Go to Vercel Dashboard → Project Settings → Domains
2. Add your custom domain
3. Update DNS records (instructions provided by Vercel)
4. Wait for SSL certificate (automatic)

## DNS Records Example

For domain `yourname.com`:

```
Type: A
Name: @
Value: 76.76.19.165

Type: CNAME
Name: www
Value: cname.vercel.com
```

## Performance Optimization

Your portfolio includes:
- ✅ Image optimization
- ✅ CSS minification
- ✅ Code splitting
- ✅ Lazy loading components
- ✅ Responsive images

## SEO Optimization

- ✅ Meta tags (title, description)
- ✅ Open Graph tags
- ✅ Semantic HTML
- ✅ Mobile-friendly
- ✅ Fast Core Web Vitals

## Support & Help

### Common Issues

**Contact form not working?**
- Check Firebase API key in environment variables
- Verify Firestore database exists
- Check browser console for errors

**GitHub projects not loading?**
- Verify repository is public
- Check GitHub username (SHAW258)
- API rate limits: max 60 requests/hour

**Theme toggle not persisting?**
- Check browser localStorage is enabled
- Verify cookies aren't being cleared

### Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com)

## File Structure

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main portfolio page
│   ├── globals.css          # Global styles & design tokens
│   ├── api/
│   │   └── github/
│   │       └── route.ts     # GitHub API endpoint
│   └── favicon.ico
├── components/
│   ├── Navigation.tsx       # Header with theme toggle
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Featured projects
│   ├── GitHubProjects.tsx  # GitHub projects display
│   ├── Contact.tsx         # Contact form (Firebase)
│   ├── Footer.tsx          # Footer
│   └── ui/
│       └── button.tsx      # Button component
├── lib/
│   ├── firebase.ts         # Firebase config
│   ├── email-service.ts    # Contact form service
│   ├── github.ts           # GitHub API service
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── .env.local             # Local environment variables
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
└── next.config.mjs        # Next.js config
```

## Next Steps

1. Get your Firebase API Key
2. Update `.env.local` locally
3. Test contact form locally
4. Deploy to Vercel
5. Add Firebase env vars to Vercel
6. Redeploy
7. Test on live site
8. Share your portfolio!

---

**Happy deploying!** Your portfolio is a professional showcase ready to impress potential clients and employers. 🎉
