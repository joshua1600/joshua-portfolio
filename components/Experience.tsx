import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import { FadeIn } from './ui/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-white rounded-t-[3rem] -mt-10 relative z-10 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
      <div className="max-w-4xl mx-auto">
        <div id="experience" className="scroll-mt-24"></div>
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F] mb-12 md:mb-16">
            Experience
          </h2>
        </FadeIn>

        <div className="relative border-l border-gray-100 ml-3 md:ml-6 space-y-12 md:space-y-16">
          {EXPERIENCES.map((job, index) => {
            const isExpanded = expandedId === job.id;

            return (
              <FadeIn key={job.id} delay={index * 0.2}>
                <div className="relative pl-6 md:pl-16 group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-200 group-hover:bg-[#0071E3] transition-colors duration-300 ring-4 ring-white" />

                  {/* Header - Always visible, tappable on mobile */}
                  <div
                    className="cursor-pointer md:cursor-default"
                    onClick={() => toggleExpand(job.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-[#1D1D1F]">
                        {job.role}
                      </h3>
                      <span className="text-sm font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                        {job.period}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-[#0071E3] font-semibold text-lg">
                        {job.company}
                      </div>

                      {/* Expand indicator - mobile only */}
                      <motion.div
                        className="md:hidden flex items-center gap-1 text-xs text-gray-400 font-medium"
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Desktop: Always show content */}
                  <div className="hidden md:block mt-4">
                    <p className="text-gray-500 leading-relaxed mb-6 text-base md:text-lg">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map(skill => (
                        <span key={skill} className="text-xs font-medium text-gray-500 border border-gray-100 px-3 py-1.5 rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Mobile: Collapsible content */}
                  <div className="md:hidden">
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4">
                            <p className="text-gray-500 leading-relaxed mb-6 text-base">
                              {job.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {job.skills.map(skill => (
                                <span key={skill} className="text-xs font-medium text-gray-500 border border-gray-100 px-3 py-1.5 rounded-md">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};