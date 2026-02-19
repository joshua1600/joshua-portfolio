import React, { useState, useEffect, useCallback } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { FadeIn } from './ui/FadeIn';
import { UniversalProjectViewer } from './UniversalProjectViewer';
import { ArrowUpRight, X, ArrowRight, ExternalLink, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects: React.FC = () => {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = useCallback((text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  }, []);

  // Only show the first 3 projects in the featured grid
  const featuredProjects = PROJECTS.slice(0, 3);

  useEffect(() => {
    if (isArchiveOpen || selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isArchiveOpen, selectedProject]);

  const handleOpenArchive = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsArchiveOpen(true);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <>
      <section className="py-20 md:py-32 px-6 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto">
          <div id="projects" className="scroll-mt-24"></div>
          <FadeIn>
            <div className="flex items-end justify-between mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F]">
                My Projects
              </h2>
              <a
                href="#"
                onClick={handleOpenArchive}
                className="hidden md:flex items-center gap-1 text-[#0071E3] font-medium hover:underline cursor-pointer"
              >
                See all archive <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>

          {/* Mobile: Horizontal Snap-Scroll Carousel */}
          <div className="md:hidden -mx-6 px-6">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
              {featuredProjects.map((project, index) => (
                <FadeIn key={project.id} delay={index * 0.1} className="snap-start shrink-0 w-[280px]">
                  <div
                    onClick={() => handleProjectClick(project)}
                    className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-[360px]"
                  >
                    {/* Image */}
                    <div className="absolute inset-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-5 z-10 w-full">
                      <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white text-[10px] font-semibold mb-2">
                        {project.category}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1.5 leading-tight drop-shadow-md">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 text-xs line-clamp-2 mb-3">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-1 text-white/70 text-xs font-medium">
                        View Details <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 auto-rows-[500px]">
            {featuredProjects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1} className={`group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 hover:scale-[1.02] cursor-pointer ${project.className}`}>
                <div onClick={() => handleProjectClick(project)} className="h-full w-full">
                  {/* Image Container */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 opacity-80 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-10 z-10 w-full">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white text-xs font-semibold mb-4">
                      {project.category}
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight drop-shadow-md">
                      {project.title}
                    </h3>

                    <p className="text-gray-200 text-base line-clamp-2 mb-6 max-w-md drop-shadow-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-black/30 backdrop-blur-md text-white/80 text-xs rounded-md border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-8 right-8 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight className="text-white w-5 h-5" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <a
              href="#"
              onClick={handleOpenArchive}
              className="inline-flex items-center gap-1 text-[#0071E3] font-medium hover:underline cursor-pointer"
            >
              See all archive <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Archive Modal */}
      <AnimatePresence>
        {isArchiveOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#F5F5F7] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-5 py-8 md:px-6 md:py-24">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 md:mb-16">
                <div>
                  <h2 className="text-3xl md:text-6xl font-bold text-[#1D1D1F] tracking-tight mb-2 md:mb-4">
                    Archive
                  </h2>
                  <p className="text-gray-500 text-base md:text-xl">
                    A selected list of things I've built.
                  </p>
                </div>
                <button
                  onClick={() => setIsArchiveOpen(false)}
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-sm text-[#1D1D1F] hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* Table / List */}
              <div className="w-full">
                {/* Desktop Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-300 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  <div className="col-span-1">Year</div>
                  <div className="col-span-4">Project</div>
                  <div className="col-span-3">Built With</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Link</div>
                </div>

                {/* Rows */}
                <div className="flex flex-col">
                  {PROJECTS.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group border-b border-gray-200 hover:bg-white transition-colors duration-200 cursor-pointer"
                      onClick={() => {
                        setIsArchiveOpen(false);
                        handleProjectClick(project);
                      }}
                    >
                      <div className="px-4 md:px-0 md:grid md:grid-cols-12 md:gap-4 py-6 md:items-center">
                        {/* Year */}
                        <div className="col-span-1 text-gray-400 text-sm mb-2 md:mb-0">
                          {project.year}
                        </div>

                        {/* Project Name (Mobile Main) */}
                        <div className="col-span-4 font-bold text-xl md:text-lg text-[#1D1D1F] mb-2 md:mb-0">
                          {project.title}
                        </div>

                        {/* Tech Stack (Mobile Sub) */}
                        <div className="col-span-3 mb-4 md:mb-0">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                              <span key={tag} className="inline-block px-2 py-1 rounded-full bg-[#F5F5F7] md:bg-gray-100 text-xs text-gray-600 font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Category */}
                        <div className="col-span-2 text-gray-500 text-sm mb-4 md:mb-0 hidden md:block">
                          {project.category}
                        </div>

                        {/* Link */}
                        <div className="col-span-2 flex items-center text-[#1D1D1F]">
                          <span className="inline-flex items-center gap-2 group-hover:text-[#0071E3] transition-colors font-medium text-sm">
                            View Details
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detailed Project View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              className="bg-[#F5F5F7] w-full max-w-6xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-y-auto overflow-x-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-[#1D1D1F] hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-12">
                {/* Header Section */}
                <div className="max-w-3xl mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-white text-xs font-semibold text-[#0071E3] shadow-sm">
                      {selectedProject.category}
                    </span>
                    <span className="text-gray-400 text-sm font-medium">
                      {selectedProject.year}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-bold text-[#1D1D1F] mb-6 leading-tight">
                    {selectedProject.title}
                  </h2>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-white text-gray-600 text-sm font-medium rounded-lg shadow-sm border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Type Badge (Visual Indicator) */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-200/50 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {selectedProject.projectType === 'appscript' ? 'Google AppScript' :
                      selectedProject.projectType === 'desktop' ? 'Native Application' : 'Web Application'}
                  </div>
                </div>

                {/* Desktop: Interactive Viewer */}
                <div className="hidden md:block mb-12">
                  <UniversalProjectViewer
                    projectType={selectedProject.projectType || 'web'}
                    contentSrc={selectedProject.contentSrc || selectedProject.link}
                    liveUrl={selectedProject.link}
                    credentials={selectedProject.credentials}
                  />
                </div>

                {/* Mobile: Screenshot + CTA */}
                <div className="md:hidden mb-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 mb-6">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full aspect-video object-cover"
                    />
                  </div>

                  <a
                    href={selectedProject.projectType === 'desktop' ? (selectedProject.contentSrc || '#') : selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-[#0071E3] text-white font-semibold text-base shadow-md hover:bg-[#0066CC] active:scale-[0.98] transition-all mb-6"
                  >
                    {selectedProject.projectType === 'desktop' ? 'Watch Demo Video' : 'Open Live Demo'} <ExternalLink className="w-4 h-4" />
                  </a>

                  {/* Mobile Credentials Helper */}
                  {selectedProject.credentials && (
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Demo Credentials</span>
                        </div>
                        <span className="text-[10px] text-gray-400">Tap to copy</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => handleCopy(selectedProject.credentials!.username || '', 'username')}
                          className="text-left p-3 rounded-xl bg-[#F5F5F7] hover:bg-[#ECECEE] active:scale-[0.97] transition-all"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] text-gray-400 uppercase">Username</span>
                            {copiedField === 'username' ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3 text-gray-300" />}
                          </div>
                          <p className="text-sm font-semibold text-[#1D1D1F]">{selectedProject.credentials.username}</p>
                        </button>
                        <button
                          onClick={() => handleCopy(selectedProject.credentials!.password || '', 'password')}
                          className="text-left p-3 rounded-xl bg-[#F5F5F7] hover:bg-[#ECECEE] active:scale-[0.97] transition-all"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] text-gray-400 uppercase">Password</span>
                            {copiedField === 'password' ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3 text-gray-300" />}
                          </div>
                          <p className="text-sm font-semibold text-[#1D1D1F]">{selectedProject.credentials.password}</p>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};