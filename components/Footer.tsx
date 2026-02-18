import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-0 pb-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-400 text-xs">
          © 2026 Joshua Lee. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/joshua1600"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#1D1D1F] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/joshua-lee-61a0771b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0077B5] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:joshua0219lee@gmail.com"
            className="text-gray-400 hover:text-[#0071E3] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};