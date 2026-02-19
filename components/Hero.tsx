import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[85svh] md:min-h-screen flex flex-col items-center pt-24 pb-12 px-6 overflow-hidden">

      {/* Main Content Wrapper - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto z-10">
        <FadeIn className="text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1D1D1F] mb-12 md:mb-8 leading-[1.1] md:leading-[1.05]">
            Design. Build.<br />
            <span className="text-[#0071E3]">Solve.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            I build tools that turn messy business operations into streamlined digital workflows.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="group w-full sm:w-[160px] h-12 flex items-center justify-center bg-[#1D1D1F] text-white rounded-full font-medium transition-all hover:bg-black hover:scale-105 active:scale-95 cursor-pointer"
            >
              View Work
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="group w-full sm:w-[160px] h-12 flex items-center justify-center border border-[#1D1D1F]/30 text-[#1D1D1F] rounded-full font-medium transition-all hover:border-[#1D1D1F] hover:bg-white hover:scale-105 active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100/50 rounded-full blur-[60px] md:blur-[100px] -z-10 pointer-events-none opacity-60" />

      {/* Scroll Indicator - Pushed to bottom flow */}
      <FadeIn delay={0.5} className="hidden sm:flex flex-col items-center gap-2 text-gray-400 mt-8 flex-none">
        <span className="text-xs font-medium">Scroll</span>
        <ArrowRight className="w-4 h-4 rotate-90" />
      </FadeIn>
    </section>
  );
};