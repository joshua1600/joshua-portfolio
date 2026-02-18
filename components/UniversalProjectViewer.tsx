import React, { useState, useRef, useEffect } from 'react';
import { Loader2, ExternalLink, Play, Pause, RefreshCw, Copy, Check } from 'lucide-react';
import { ProjectType } from '../types';

interface UniversalProjectViewerProps {
  projectType: ProjectType;
  contentSrc: string;
  liveUrl?: string;
  credentials?: {
    username?: string;
    password?: string;
  };
}

export const UniversalProjectViewer: React.FC<UniversalProjectViewerProps> = ({ projectType, contentSrc, liveUrl, credentials }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [copiedField, setCopiedField] = useState<'username' | 'password' | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reset states when content changes
  useEffect(() => {
    setIsLoading(true);
    setIsPlaying(false);
    setCopiedField(null);
  }, [contentSrc, projectType]);

  // Safety timeout for loading state
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isLoading) {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 5000); // Force stop loading after 5s
    }
    return () => clearTimeout(timeoutId);
  }, [isLoading]);

  const handleCopy = (text: string, field: 'username' | 'password') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleIframeLoad = () => {
    // Add a minimum delay for appscript to simulate/ensure smooth transition
    if (projectType === 'appscript') {
      setTimeout(() => setIsLoading(false), 1500);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* MacBook Pro Body */}
      <div className="relative bg-[#1D1D1F] rounded-[1.5rem] sm:rounded-[2rem] p-2 sm:p-4 shadow-2xl ring-1 ring-white/10">

        {/* Screen Bezel */}
        <div className="relative bg-black rounded-lg sm:rounded-xl overflow-hidden aspect-[16/10] ring-1 ring-white/5 group">

          {/* Camera Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-40 h-4 sm:h-6 bg-[#1D1D1F] rounded-b-lg sm:rounded-b-xl z-30 flex items-center justify-center">
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#111] border border-[#333]/50 shadow-inner"></div>
          </div>

          {/* --- CONTENT AREA --- */}
          <div className="w-full h-full bg-white relative overflow-hidden">

            {/* Type: AppScript */}
            {projectType === 'appscript' && (
              <>
                {isLoading && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md transition-opacity duration-500">
                    <div className="flex flex-col items-center gap-4">
                      <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#0071E3] animate-spin" />
                      <p className="text-sm sm:text-base font-medium text-gray-500 animate-pulse">
                        Connecting to Google Workspace...
                      </p>
                    </div>
                  </div>
                )}
                <div className="w-full h-full pt-12 px-2 pb-2 bg-white flex flex-col">
                  <div className="flex-1 w-full h-full rounded-b-lg overflow-hidden border border-gray-100 shadow-inner">
                    <iframe
                      src={contentSrc}
                      className="w-full h-full border-none"
                      onLoad={handleIframeLoad}
                      title="AppScript Project"
                    />
                  </div>
                </div>

                {/* Floating Action Button */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={liveUrl || contentSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg border border-gray-200 text-xs sm:text-sm font-medium text-gray-700 hover:text-[#0071E3] hover:scale-105 transition-all"
                  >
                    Open in New Tab <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </>
            )}

            {/* Type: Web */}
            {projectType === 'web' && (
              <>
                <div className="w-full h-full pt-12 px-2 pb-2 bg-white flex flex-col">
                  <div className="flex-1 w-full h-full rounded-b-lg overflow-hidden border border-gray-100 shadow-inner relative">
                    <iframe
                      src={contentSrc}
                      className="w-full h-full border-none"
                      onLoad={handleIframeLoad}
                      title="Web Project"
                    // Allow strict interaction if needed, but usually 'allow-same-origin' is default for iframes unless sandboxed
                    />

                    {/* Floating Action Button */}
                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={liveUrl || contentSrc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-gray-200 text-xs font-medium text-gray-700 hover:text-[#0071E3] hover:scale-105 transition-all"
                      >
                        Open <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Type: Desktop */}
            {projectType === 'desktop' && (
              <div className="relative w-full h-full bg-black group/video cursor-pointer" onClick={handleVideoPlay}>
                <video
                  ref={videoRef}
                  src={contentSrc}
                  className="w-full h-full object-cover"
                  loop
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Play Button Overlay */}
                <div className={`absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  <button
                    className="w-16 h-16 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl transition-transform duration-300 hover:scale-110 group-hover/video:bg-white/20"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1 sm:ml-2" />
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* MacBook Footer / Keyboard hint */}
        <div className="mt-1 sm:mt-2 text-center">
          <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gray-700 mx-auto rounded-full opacity-50"></div>
        </div>
      </div>

      {/* Reflection / Base Shadow */}
      <div className="w-[90%] mx-auto h-4 bg-black/20 blur-xl rounded-full -mt-2 mb-8"></div>

      {/* Credentials Helper - Moved below device */}
      {credentials && (projectType === 'web' || projectType === 'appscript') && (
        <div className="flex justify-center w-full">
          <div className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl p-4 w-full max-w-md transition-all hover:scale-[1.02]">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Demo Credentials
              </h4>
              <span className="text-[10px] text-gray-400">Click to copy</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Username */}
              <div
                onClick={() => handleCopy(credentials.username || '', 'username')}
                className="group/field cursor-pointer bg-gray-50 hover:bg-blue-50/50 border border-transparent hover:border-blue-100 rounded-lg p-2 transition-all relative overflow-hidden"
              >
                <div className="text-[10px] text-gray-400 font-medium mb-1">Username</div>
                <div className="font-mono text-sm text-gray-700 font-medium truncate pr-6">
                  {credentials.username}
                </div>
                <div className="absolute top-2 right-2 text-gray-300 group-hover/field:text-[#0071E3] transition-colors">
                  {copiedField === 'username' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </div>
              </div>

              {/* Password */}
              <div
                onClick={() => handleCopy(credentials.password || '', 'password')}
                className="group/field cursor-pointer bg-gray-50 hover:bg-blue-50/50 border border-transparent hover:border-blue-100 rounded-lg p-2 transition-all relative overflow-hidden"
              >
                <div className="text-[10px] text-gray-400 font-medium mb-1">Password</div>
                <div className="font-mono text-sm text-gray-700 font-medium truncate pr-6">
                  {credentials.password}
                </div>
                <div className="absolute top-2 right-2 text-gray-300 group-hover/field:text-[#0071E3] transition-colors">
                  {copiedField === 'password' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};