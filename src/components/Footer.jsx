import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080D] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Monogram & Identity */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-heading font-black text-sm text-white">
            <span>S</span>
            <span className="text-[#00F5D4] text-xs">●</span>
          </div>
          <div>
            <div className="text-sm font-heading font-bold text-white">
              {portfolioData.personal.name}
            </div>
            <div className="text-[11px] font-mono text-neutral-500">
              Full Stack Developer &bull; React.js &bull; Node.js &bull; PostgreSQL
            </div>
          </div>
        </div>

        {/* Center Tech Note */}
        <div className="text-xs text-neutral-500 font-mono flex items-center gap-1.5">
          <span>Crafted with React, Tailwind CSS & GSAP</span>
        </div>

        {/* Right: Back to top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-300 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00F5D4]" />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-600 font-mono gap-2">
        <span>&copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</span>
        <span>Salem, Tamil Nadu, India</span>
      </div>
    </footer>
  );
}
