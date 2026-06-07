# Indrajit Shaw - Professional Portfolio 🚀

A modern, high-performance, and visually stunning developer portfolio built with **Next.js**, **React**, **Tailwind CSS**, and **Firebase Realtime Database**.

🔗 **Live Website**: [https://indrajitsportfolio.vercel.app](https://indrajitsportfolio.vercel.app)

---

## 🌟 Key Features

- **Dynamic Design**: Clean, fully responsive UI featuring dark/light theme switching and smooth scrolling.
- **Interactive Experience & Education Timeline**: Displays professional career highlights, including:
  - **Data Science & AI Intern** at PCS Global Pvt Ltd.
  - **Android Developer Trainee** experience.
  - **B.Tech (Computer Science Engineering)** at Seacom Engineering College (3rd Rank in CSE Department).
  - **Python, HTML/CSS & Oracle SQL Certifications** from QSpiders.
- **Interactive Geolocation Map**: The **Location** card dynamically requests the browser's current GPS coordinates (with permission) and pins the location in Google Maps, with a graceful fallback to **Howrah, West Bengal, India**.
- **Real-Time Contact Form**: Saves messages directly to a secure **Firebase Realtime Database** and instantly triggers email notifications to the site owner via **EmailJS**.
- **Dynamic GitHub Repository List**: Fetches public repositories in real-time using GitHub API to highlight active coding projects.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router & React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (modern variables and custom utilities)
- **Database**: [Firebase Realtime Database](https://firebase.google.com/docs/database)
- **Email Notifications**: [EmailJS](https://www.emailjs.com/) (secure client-side email delivery)
- **Deployment**: [Vercel](https://vercel.com/) (serverless hosting and automated CD)

---

## 💻 Local Development

### 1. Clone the repository
```bash
git clone https://github.com/SHAW258/indrajitsportfolio.git
cd indrajitsportfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 📝 Directory Structure

```text
├── app/
│   ├── layout.tsx         # Global page layout & fonts
│   ├── page.tsx           # Home page components assembly
│   ├── globals.css        # Tailwind style definitions & custom themes
│   └── api/               # API endpoints (e.g. GitHub integrations)
├── components/
│   ├── Navigation.tsx     # Header bar with scroll tracker & theme toggle
│   ├── Hero.tsx           # Intro section with dynamic text
│   ├── About.tsx          # Professional Experience & Education timeline
│   ├── Skills.tsx         # Categorized skills badges
│   ├── Projects.tsx       # Featured project showcases
│   ├── GitHubProjects.tsx # Live GitHub repo lists via API
│   ├── Contact.tsx        # Interactive contact form & location mapping
│   └── Footer.tsx         # Copyright footer
├── lib/
│   ├── firebase.ts        # Firebase configuration and setup
│   ├── email-service.ts   # Firebase database sync + EmailJS service integrations
│   └── utils.ts           # Class merger helper functions
└── public/                # Static assets (images, icons, vectors)
```

---

## 🚀 Deployment

The project is configured for direct deployment to **Vercel**:

```bash
# Deploy to production
npx vercel --prod
```
When configured with Vercel, any code pushed to the `main` branch will build and deploy automatically.
