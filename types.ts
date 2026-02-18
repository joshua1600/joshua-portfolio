export type ProjectType = 'web' | 'appscript' | 'desktop';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  year: string;
  className?: string; // For bento grid sizing
  projectType?: ProjectType;
  contentSrc?: string;
  credentials?: {
    username?: string;
    password?: string;
  };
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface NavLink {
  name: string;
  href: string;
}