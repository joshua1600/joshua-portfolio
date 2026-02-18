import { Project, Experience, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Inventory Search Engine',
    category: 'Full Stack',
    description: 'An inventory management and mating-part search engine.',
    image: 'https://picsum.photos/id/1/800/600',
    tags: ['Google Apps Script', 'Google Sheets', 'JavaScript', 'HTML5', 'CSS3'],
    link: 'https://script.google.com/macros/s/AKfycbxEAJ-FZmzK7Wq5VXfW0b52FwXUzQMW-9BML4yU3qFI7XPmAaZbENeApGACK4XMIpnbCQ/exec',
    year: '2025',
    className: 'md:col-span-2 md:row-span-2', // Large Item
    projectType: 'appscript',
    contentSrc: 'https://script.google.com/macros/s/AKfycbxEAJ-FZmzK7Wq5VXfW0b52FwXUzQMW-9BML4yU3qFI7XPmAaZbENeApGACK4XMIpnbCQ/exec',
  },
  {
    id: 2,
    title: 'BAC Tutor Tracker',
    category: 'Schedule Management',
    description: 'A dashboard for tracking tutoring sessions and managing students efficiently.',
    image: '/projects/bactutortracker.png',
    tags: ['React', 'Vite', 'Tailwind', 'Supabase', 'Vercel'],
    link: 'https://bac-tutor-tracker.vercel.app',
    year: '2025',
    className: 'md:col-span-1 md:row-span-1', // Small Item
    projectType: 'web',
    contentSrc: 'https://drive.google.com/file/d/16tA9g-7QoKxygCpfVQC7uPzfYrXL7TYH/preview',
    credentials: {
      username: 'admin',
      password: 'Admin123!',
    },
  },
  {
    id: 3,
    title: 'Car Booking Management',
    category: 'Full Stack',
    description: 'A serverless, single-page car booking management system featuring real-time conflict detection, interactive calendar scheduling, and automated email notifications.',
    image: 'https://picsum.photos/id/48/600/600',
    tags: ['Google Apps Script', 'Google Sheets', 'JavaScript', 'HTML5', 'CSS3', 'Gmail API'],
    link: 'https://script.google.com/macros/s/AKfycbzcQI7r5_3sXKCaIUDDEgk35y96-EmE0NkBZdCiG7gnx8oA2kmGuwtpkzPpXo_whg2HxA/exec',
    year: '2026',
    className: 'md:col-span-1 md:row-span-1', // Small Item
    projectType: 'appscript',
    contentSrc: 'https://script.google.com/macros/s/AKfycbzcQI7r5_3sXKCaIUDDEgk35y96-EmE0NkBZdCiG7gnx8oA2kmGuwtpkzPpXo_whg2HxA/exec',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: 'Freelance Software Developer',
    company: 'Self-Employed',
    period: '2026 — Present',
    description: 'Designing and deploying customised point-of-sale (POS) systems for local businesses, transforming manual operations into streamlined digital workflows.',
    skills: ['Full-Stack Development', 'Software Design', 'Software Project Management', 'Digital Strategy', 'Vibe Coding'],
  },
  {
    id: 2,
    role: 'IT Intern',
    company: 'BizLink Technology (S.E.A) Sdn. Bhd.',
    period: '2025 — 2026',
    description: 'Design and develop workflow automation tools, data processing extensions, and custom web applications using AppSheet and Google Apps Script.',
    skills: ['AppScript', 'AppSheet', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Google Workspace', 'Data Analysis', 'Workflow Automation'],
  },
  {
    id: 3,
    role: 'Part Time Tutor',
    company: 'Build A Genius Sdn. Bhd.',
    period: '2024 — 2026',
    description: 'Teach basic programming concepts in Scratch and Python to children aged 6-16 via 1-on-1 sessions on Zoom and Google Meet.',
    skills: ['Python', 'Scratch', 'Minecraft Education', 'Communication', 'Problem Solving', 'Online Tutoring'],
  },
];