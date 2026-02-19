# Joshua Lee — Personal Portfolio

A modern, responsive portfolio website featuring smooth animations, interactive project showcases, and a clean Apple-inspired design.

🔗 **Live:** [joshua-lee-portfolio.vercel.app](https://joshua-lee-portfolio.vercel.app)

## Tech Stack

- **React** + **TypeScript** — UI components
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations
- **Vite** — Build tool
- **Vercel** — Hosting

## Features

- Apple-style design with smooth scroll animations
- Interactive project viewer (MacBook frame with live iframe demos)
- Google Drive video embed support for desktop app demos
- Horizontal snap-scroll carousels on mobile
- Collapsible experience cards on mobile
- Demo credentials helper with copy-to-clipboard
- Downloadable CV from the navbar
- Fully responsive across all devices

## Run Locally

**Prerequisites:** Node.js

```bash
npm install
npm run dev
```

## Deploy

Push to `main` — Vercel auto-deploys via GitHub integration.

```bash
git add -A && git commit -m "your message"
git push origin main
```

## Project Structure

```
├── components/
│   ├── Contact.tsx         # Contact section with horizontal carousel
│   ├── Experience.tsx      # Experience with collapsible mobile cards
│   ├── Footer.tsx          # Footer with social links
│   ├── Hero.tsx            # Hero section
│   ├── Navbar.tsx          # Navigation bar with CV download
│   ├── Projects.tsx        # Project grid + archive + detail viewer
│   ├── UniversalProjectViewer.tsx  # MacBook viewer (iframe/video)
│   └── ui/FadeIn.tsx       # Scroll-based fade-in animation
├── constants.ts            # Projects, experiences, nav links data
├── types.ts                # TypeScript types
├── App.tsx                 # Main app layout
├── index.tsx               # Entry point
└── public/
    ├── resume.pdf          # Downloadable CV
    └── projects/           # Project cover images
```

## License

© 2026 Joshua Lee. All rights reserved.
