import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin, ChevronRight, Sparkles, Building, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = timelineRef.current.querySelectorAll('.timeline-item');

      items.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out'
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] relative"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00F5D4]">03 // Career</span>
              <div className="h-[1px] w-12 bg-[#00F5D4]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Professional Experience
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-400">
            A chronological timeline of verified roles, technical responsibilities, and application delivery milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative border-l border-white/10 ml-3 sm:ml-6 md:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {portfolioData.experience.map((exp, idx) => (
            <div
              key={exp.id}
              className="timeline-item relative group"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#08090E] border-2 border-[#00F5D4] group-hover:scale-125 group-hover:bg-[#00F5D4] transition-all duration-300 shadow-[0_0_12px_#00F5D4]" />

              {/* Main Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1017] border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-xl space-y-6">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono font-medium text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/20 px-2.5 py-0.5 rounded-full">
                        {exp.badge}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
                      <span className="flex items-center gap-1.5 text-white font-medium">
                        <Building className="w-3.5 h-3.5 text-[#00F5D4]" />
                        {exp.company}
                      </span>
                      <span className="text-neutral-600">&bull;</span>
                      <span className="flex items-center gap-1.5 text-xs text-neutral-400">
                        <MapPin className="w-3 h-3 text-neutral-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-neutral-300 self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-[#00F5D4]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role Description Summary */}
                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  {exp.description}
                </p>

                {/* Key Bullet Highlights from Resume */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                    Key Technical Contributions & Delivery
                  </span>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Stack Utilized */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-neutral-500 mr-1">Stack:</span>
                  {exp.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/5 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
