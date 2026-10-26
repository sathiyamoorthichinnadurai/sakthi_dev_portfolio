import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#08090E]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Typographic Monogram Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Sathiyamoorthi C — Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/15 flex items-center justify-center font-heading font-black text-lg text-white group-hover:border-[#00F5D4]/60 transition-colors shadow-inner">
              <span className="tracking-tighter">S</span>
              <span className="text-[#00F5D4] text-xs -ml-0.5">●</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading font-bold text-sm tracking-wide text-white group-hover:text-[#00F5D4] transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
                Full Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#12141F]/60 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-lg shadow-black/20">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#00F5D4] font-semibold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00F5D4] shadow-[0_0_8px_#00F5D4]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Resume & Status */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00F5D4]/40 transition-all duration-300 shadow-sm overflow-hidden"
            >
              <FileText className="w-3.5 h-3.5 text-[#00F5D4] group-hover:scale-110 transition-transform" />
              <span>Resume</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-ping" />
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-black bg-[#00F5D4] hover:bg-[#00E0C3] transition-all duration-200 shadow-md shadow-[#00F5D4]/20 hover:shadow-[#00F5D4]/40 hover:-translate-y-0.5"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-white/5 border border-white/10 flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#00F5D4]" />
              <span>CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-black/90 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between pt-24 pb-8 px-6 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
            Navigation Menu
          </span>
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{ transitionDelay: `${idx * 40}ms` }}
                className={`text-2xl font-heading font-semibold py-2 border-b border-white/5 flex items-center justify-between ${
                  isActive ? 'text-[#00F5D4]' : 'text-neutral-300 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-neutral-500">0{idx + 1}</span>
              </a>
            );
          })}
        </div>

        <div className="space-y-3 pt-6">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full py-3.5 rounded-xl bg-white/10 border border-white/15 text-white font-semibold text-sm flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 text-[#00F5D4]" />
            <span>View Full Resume</span>
          </button>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full py-3.5 rounded-xl bg-[#00F5D4] text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#00F5D4]/25"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
}
