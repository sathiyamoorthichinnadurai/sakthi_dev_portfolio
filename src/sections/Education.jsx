import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] relative"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00F5D4]">05 // Academic Background</span>
          <div className="h-[1px] w-12 bg-[#00F5D4]/40" />
        </div>

        {portfolioData.education.map((edu, idx) => (
          <div
            key={idx}
            ref={cardRef}
            className="p-6 sm:p-8 rounded-2xl bg-[#0E1017] border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/20 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-[#00F5D4]" />
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-mono text-[#00F5D4] bg-[#00F5D4]/10 px-2 py-0.5 rounded-full border border-[#00F5D4]/20">
                    Postgraduate
                  </span>
                </div>

                <div className="text-base text-neutral-300 font-medium">
                  {edu.institution}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{edu.location}</span>
                </div>

                <p className="text-xs text-neutral-400 pt-2 max-w-2xl leading-relaxed">
                  {edu.note}
                </p>
              </div>
            </div>

            <div className="flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 pt-4 md:pt-0 border-white/5 shrink-0">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-neutral-300">
                <Calendar className="w-3.5 h-3.5 text-[#00F5D4]" />
                <span>{edu.period}</span>
              </div>
              <span className="text-[11px] font-mono text-neutral-500 mt-2">
                Degree Awarded
              </span>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
