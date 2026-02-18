import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const contacts = [
    {
      name: 'Email',
      display: 'joshua0219lee@gmail.com',
      href: 'mailto:joshua0219lee@gmail.com',
      icon: Mail,
    },
    {
      name: 'LinkedIn',
      display: 'Joshua Lee',
      href: 'https://www.linkedin.com/in/joshua-lee-61a0771b7/',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      display: '@joshua1600',
      href: 'https://github.com/joshua1600',
      icon: Github,
    },
  ];

  return (
    <section className="pb-20 pt-16 md:pb-32 md:pt-24 px-6 bg-white relative z-10">
      <div className="max-w-4xl mx-auto">
        <div id="contact" className="scroll-mt-24"></div>

        <FadeIn>
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-6">
              Get in Touch
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
              I'm currently available for freelance projects and open to full-time opportunities.
            </p>
          </div>
        </FadeIn>

        {/* Mobile: Horizontal Snap-Scroll */}
        <div className="md:hidden -mx-6 px-6">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
            {contacts.map((contact, index) => (
              <FadeIn key={contact.name} delay={index * 0.1} className="snap-start shrink-0 w-[200px]">
                <a
                  href={contact.href}
                  target={contact.name !== 'Email' ? "_blank" : undefined}
                  rel={contact.name !== 'Email' ? "noopener noreferrer" : undefined}
                  className="group block p-5 rounded-2xl bg-[#F5F5F7] hover:bg-[#F0F0F2] transition-all duration-300 cursor-pointer"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="w-4 h-4 text-[#1D1D1F]" />
                  </div>

                  <h3 className="text-base font-bold text-[#1D1D1F] mb-0.5">
                    {contact.name}
                  </h3>

                  <p className="text-gray-500 font-medium mb-3 text-xs truncate">
                    {contact.display}
                  </p>

                  <div className="flex items-center gap-1.5 text-[#0071E3] text-xs font-semibold group-hover:translate-x-1 transition-transform">
                    Connect <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <FadeIn key={contact.name} delay={index * 0.1}>
              <a
                href={contact.href}
                target={contact.name !== 'Email' ? "_blank" : undefined}
                rel={contact.name !== 'Email' ? "noopener noreferrer" : undefined}
                className="group block p-8 rounded-[2rem] bg-[#F5F5F7] hover:bg-[#F0F0F2] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <contact.icon className="w-5 h-5 text-[#1D1D1F]" />
                </div>

                <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">
                  {contact.name}
                </h3>

                <p className="text-gray-500 font-medium mb-6 text-sm truncate">
                  {contact.display}
                </p>

                <div className="flex items-center gap-2 text-[#0071E3] text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Connect <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};