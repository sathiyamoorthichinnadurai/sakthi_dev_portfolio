import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight, FileText, Sparkles, MapPin, Code2, Database, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Stagger Reveal
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        delay: 0.2
      })
        .from(titleRef.current.children, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          stagger: 0.15
        }, '-=0.4')
        .from(subtitleRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8
        }, '-=0.5')
        .from(ctaRef.current.children, {
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          stagger: 0.1
        }, '-=0.4')
        .from(statsRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8
        }, '-=0.4');

      // Mouse Parallax on Desktop
      const handleMouseMove = (e) => {
        if (!glowRef.current) return;
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 40;
        const yPos = (clientY / window.innerHeight - 0.5) * 40;

        gsap.to(glowRef.current, {
          x: xPos,
          y: yPos,
          duration: 1.2,
          ease: 'power2.out'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic Background Aurora Glows */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[450px] bg-gradient-to-tr from-[#00F5D4]/10 via-[#6366F1]/10 to-transparent blur-[120px] rounded-full -z-10"
      />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-[#38BDF8]/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto w-full">

        {/* Availability Badge & Location */}
        <div ref={badgeRef} className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5D4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F5D4]"></span>
            </span>
            <span className="text-xs font-mono font-medium text-[#00F5D4] tracking-wide">
              {portfolioData.personal.availability}
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-neutral-400" />
            <span>{portfolioData.personal.location}</span>
          </div>
        </div>

        {/* Hero Title & Oversized Typography */}
        <div ref={titleRef} className="space-y-2 mb-6">
          <h1 className="text-2xl sm:text-6xl md:text-7xl lg:text-7xl font-heading font-extrabold tracking-tight text-white leading-[1.05]">
            <span className="block text-gradient">Hello, I'm</span>
            <span className="block text-accent-gradient mt-1">
              {portfolioData.personal.name}
            </span>
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl font-heading font-medium text-neutral-400 pt-2 flex items-center flex-wrap gap-x-3 gap-y-1">
            <span>{portfolioData.personal.role}</span>
            <span className="hidden sm:inline text-neutral-600">&bull;</span>
            <span className="text-neutral-300 font-mono text-sm sm:text-base border border-white/10 px-2.5 py-0.5 rounded-lg bg-white/[0.03]">
              2 Years Experience
            </span>
            <span className="text-neutral-300 font-mono text-sm sm:text-base border border-white/10 px-2.5 py-0.5 rounded-lg bg-white/[0.03]">
              Immediate joiner
            </span>
          </div>
        </div>

        {/* Concisely Articulated Bio Summary */}
        <p
          ref={subtitleRef}
          className="max-w-2xl text-base sm:text-lg text-neutral-400 leading-relaxed font-sans mb-10"
        >
          Specialized in building full-stack web and cross-platform mobile applications using{' '}
          <span className="text-white font-medium">React.js, Next.js, React Native, Node.js</span>, and{' '}
          <span className="text-white font-medium">PostgreSQL</span>. Experienced in engineering reliable REST APIs,
          relational schemas, and integrating AI-assisted development tools to deliver high-quality digital solutions.
        </p>

        {/* Dual Primary Call-to-Actions */}
        <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#00F5D4] text-black font-semibold text-sm sm:text-base shadow-lg shadow-[#00F5D4]/25 hover:bg-[#00E0C3] hover:shadow-[#00F5D4]/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>View Selected Work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium text-sm sm:text-base backdrop-blur-sm transition-all duration-300"
          >
            <FileText className="w-4 h-4 text-[#00F5D4]" />
            <span>Download Resume</span>
          </button>

          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="text-xs font-mono text-neutral-500 hover:text-[#00F5D4] ml-2 flex items-center gap-1.5 transition-colors py-2"
          >
            <span>Explore background</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>

        {/* Key Strengths Metrics Strip */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#0E1017]/80 border border-white/[0.08] backdrop-blur-xl"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[#00F5D4] text-xs font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>Full Stack</span>
            </div>
            <div className="text-xl sm:text-2xl font-heading font-bold text-white">React & Next.js</div>
            <div className="text-[11px] text-neutral-400">Reactive Web Interfaces</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[#38BDF8] text-xs font-mono">
              <Database className="w-3.5 h-3.5" />
              <span>Backend & Data</span>
            </div>
            <div className="text-xl sm:text-2xl font-heading font-bold text-white">Node & PostgreSQL</div>
            <div className="text-[11px] text-neutral-400">REST APIs & Schemas</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[#818CF8] text-xs font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>Mobile Engineering</span>
            </div>
            <div className="text-xl sm:text-2xl font-heading font-bold text-white">React Native</div>
            <div className="text-[11px] text-neutral-400">Hardware & Printing Integrations</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Augmented</span>
            </div>
            <div className="text-xl sm:text-2xl font-heading font-bold text-white">Antigravity & Claude</div>
            <div className="text-[11px] text-neutral-400">Rapid Code Analysis & Debugging</div>
          </div>
        </div>

      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-[11px] font-mono text-neutral-600">
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <div className="w-4 h-7 rounded-full border border-neutral-700 flex justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-[#00F5D4] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
