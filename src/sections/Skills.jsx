import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Database, Wrench, Sparkles, Plus, CheckCircle, Flame } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  // Animate cards whenever activeTab changes or on initial mount
  useEffect(() => {
    // Small delay to let React render the new filtered cards into the DOM
    const timer = setTimeout(() => {
      if (!gridRef.current) return;

      const cards = gridRef.current.children;
      if (!cards || cards.length === 0) return;

      // Immediately set all cards visible first to prevent stuck-invisible state
      gsap.set(cards, { opacity: 1, y: 0 });

      // Then run a simple stagger animation (no ScrollTrigger dependency for tab changes)
      gsap.from(cards, {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        clearProps: 'opacity,transform',  // Clean up inline styles after animation completes
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: Sparkles },
    { id: 'frontend', label: 'Frontend & Mobile', icon: Code2 },
    { id: 'backend', label: 'Backend & Data', icon: Database },
    { id: 'tools', label: 'Tools & AI Suite', icon: Wrench },
    { id: 'additional', label: 'Additional Stack', icon: Plus },
  ];

  const filteredCategories = activeTab === 'all'
    ? portfolioData.skills.categories
    : portfolioData.skills.categories.filter(c => c.id === activeTab);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#0A0B11]/50 relative"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00F5D4]">02 // Skills</span>
              <div className="h-[1px] w-12 bg-[#00F5D4]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Technical Core & Toolchains
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-400">
            Disciplines and technologies verified from actual production projects, enterprise development, and continuous workflow adoption.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#00F5D4] text-black border-[#00F5D4] font-semibold shadow-md shadow-[#00F5D4]/20'
                    : 'bg-white/[0.03] text-neutral-400 border-white/10 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-[#00F5D4]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#0E1017] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#00F5D4] transition-colors">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-neutral-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    {category.skills.length} competencies
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Badges / Chips */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`group/skill relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 border ${
                        skill.highlight
                          ? 'bg-[#00F5D4]/5 border-[#00F5D4]/30 text-white hover:border-[#00F5D4] hover:bg-[#00F5D4]/10 shadow-[0_0_12px_rgba(0,245,212,0.06)]'
                          : 'bg-white/[0.02] border-white/10 text-neutral-300 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {/* Technology Icon */}
                      {skill.icon && (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-5 h-5 object-contain shrink-0"
                          loading="lazy"
                        />
                      )}
                      <span>{skill.name}</span>
                      <span className="text-[10px] font-mono text-neutral-500 ml-1">
                        [{skill.level}]
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Status Indicator */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span className="flex items-center gap-1.5 text-neutral-400">
                  <CheckCircle className="w-3.5 h-3.5 text-[#00F5D4]" />
                  Production Tested
                </span>
                <span>Resume Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
