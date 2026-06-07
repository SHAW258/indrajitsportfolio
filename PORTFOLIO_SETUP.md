# Indrajit Shaw - Modern Portfolio

A beautiful, fully responsive Android developer portfolio built with Next.js 16, React, Tailwind CSS, and Firebase integration.

## Features

### Design & UI
- **Colorful Modern Theme**: Dark mode by default with beautiful gradient accents (Blue, Cyan, Pink, Purple, Orange, Green)
- **Light Mode Toggle**: Theme switcher in navigation bar with persistent localStorage
- **Fully Responsive**: Mobile-first design that adapts perfectly to all screen sizes
- **Gradient Text & Animations**: Modern gradient effects on headings and smooth hover animations
- **Professional Typography**: Clean, readable fonts with proper spacing and hierarchy

### Sections

1. **Navigation Bar**
   - Sticky navigation with smooth scrolling
   - Quick links to all sections
   - Theme toggle (Dark/Light mode)
   - Mobile hamburger menu

2. **Hero Section**
   - Gradient animated title
   - Brief introduction
   - Call-to-action buttons
   - Direct contact links

3. **About Section**
   - Professional journey
   - Education & growth
   - Key competencies
   - Highlighted achievements

4. **Skills Section**
   - 6 skill categories with colorful borders
   - Hover effects and animations
   - Organized by specialty (Android, APIs, Databases, Languages, Web, Concepts)

5. **Projects Section**
   - 3 highlighted professional projects
   - Project descriptions and impact
   - Technology tags
   - Colorful gradient borders

6. **GitHub Projects Section**
   - Automatically fetches all public repositories from GitHub (SHAW258)
   - Displays project cards with:
     - Project name and description
     - Programming language
     - Stars and forks count
     - Topic tags
   - Direct links to GitHub repositories
   - Colorful borders with hover effects
   - Responsive grid layout

7. **Contact Section**
   - Firebase-powered contact form
   - Direct contact information (Email, Phone, Location)
   - Social media links (GitHub, LinkedIn)
   - Error handling and success messages
   - Form validation

8. **Footer**
   - Quick navigation links
   - Contact information
   - Copyright notice

## Technology Stack

- **Frontend**: Next.js 16, React 19.2, TypeScript
- **Styling**: Tailwind CSS v4
- **Backend**: Next.js API Routes
- **Database**: Firebase Firestore
- **External APIs**: GitHub API (for fetching repositories)
- **Deployment Ready**: Optimized for Vercel

## Firebase Setup

### Required Environment Variables

Create a `.env.local` file with your Firebase configuration:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Firebase Firestore Setup

1. Go to Firebase Console
2. Create a Firestore database in your project
3. Create a collection named `messages`
4. Set up security rules (optional but recommended):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{document=**} {
      allow create: if request.auth == null;
      allow read: if request.auth != null;
    }
  }
}
```

## GitHub Integration

The portfolio automatically fetches your public GitHub repositories using the GitHub API. The fetched data includes:

- Repository name
- Description
- Language
- Stars and forks count
- Topics/tags
- Direct links to repositories

**GitHub Username**: SHAW258

The API route `/api/github` fetches up to 12 most recent repositories (excluding forks).

## Responsive Design

The portfolio uses a mobile-first approach with Tailwind CSS breakpoints:

- **Mobile**: All sections stack vertically
- **Tablet (md)**: 2-column grids for projects/skills
- **Desktop (lg)**: 3-column grids for better utilization of space
- **Extra Large (xl)**: Optimized spacing for wide screens

## Features Breakdown

### Theme System
- Light mode for daytime viewing
- Dark mode (default) for better night viewing
- Smooth transitions between themes
- Colors automatically adjust across all components
- Preference saved in localStorage

### Contact Form
- Form validation
- Firebase integration
- Loading states
- Success/error messages
- Accessible form inputs

### GitHub Projects
- Real-time data fetching
- Caching for performance
- Colorful borders rotating across 6 colors
- Hover animations and scale effects
- Fallback message if no projects found

## Customization

### Colors
Edit the CSS variables in `app/globals.css`:
- Primary color (Blue)
- Secondary color (Cyan)
- Accent color (Pink)
- And more custom colors for different theme modes

### Content
All content is modularized in separate React components:
- `components/Hero.tsx` - Hero section
- `components/About.tsx` - About section
- `components/Skills.tsx` - Skills section
- `components/Projects.tsx` - Featured projects
- `components/GitHubProjects.tsx` - GitHub integration
- `components/Contact.tsx` - Contact form
- `components/Navigation.tsx` - Navigation bar
- `components/Footer.tsx` - Footer

## Performance Optimizations

- Image optimization
- Code splitting
- Lazy loading components
- Caching strategies for GitHub API (1 hour revalidation)
- Minified CSS with Tailwind
- React compiler ready (Next.js 16)

## Deployment

The portfolio is ready to deploy to Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit `http://localhost:3000` to view the portfolio.

## File Structure

```
/app
  /api
    /github
      route.ts          # GitHub API endpoint
  layout.tsx            # Root layout
  globals.css           # Global styles with Tailwind
  page.tsx              # Main page

/components
  Navigation.tsx        # Navigation bar with theme toggle
  Hero.tsx              # Hero section
  About.tsx             # About section
  Skills.tsx            # Skills showcase
  Projects.tsx          # Featured projects
  GitHubProjects.tsx    # GitHub projects integration
  Contact.tsx           # Contact form
  Footer.tsx            # Footer

/lib
  firebase.ts           # Firebase configuration
  github.ts             # GitHub API service
  email-service.ts      # Firebase message handler
  utils.ts              # Utility functions

/.env.local             # Environment variables (create this)
```

## Support & Customization

To customize this portfolio:

1. Edit your name, title, and description in `components/Hero.tsx`
2. Update your skills in `components/Skills.tsx`
3. Add your projects in `components/Projects.tsx`
4. Configure Firebase credentials in `.env.local`
5. Change colors in `app/globals.css`

## License

This portfolio is built using Next.js and is ready for personal use.
