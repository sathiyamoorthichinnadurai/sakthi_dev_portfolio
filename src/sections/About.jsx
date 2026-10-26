import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, CheckCircle2, Cpu, Database, Globe, Smartphone, Sparkles, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftColRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -40,
        duration: 0.9,
        ease: 'power3.out'
      });

      gsap.from(rightColRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: 40,
        duration: 0.9,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const principles = [
    {
      title: "Full-Stack System Thinking",
      desc: "Balancing reactive frontend component state with normalized backend schema constraints for dependable end-to-end user journeys."
    },
    {
      title: "Resilient Hardware & API Integrations",
      desc: "Practical experience integrating physical devices (Bluetooth thermal printers) and engineering graceful offline error recovery."
    },
    {
      title: "Modern AI-Assisted Workflows",
      desc: "Leveraging tools like Google Antigravity and Claude to accelerate debugging, eliminate regressions, and maintain high delivery velocity."
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] relative"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00F5D4]">01 // About</span>
          <div className="h-[1px] w-12 bg-[#00F5D4]/40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative Introduction */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
              Engineering web & mobile solutions with precision and purpose.
            </h2>

            <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
              <p>
                I am a <strong className="text-white font-semibold">Full Stack Developer</strong> with 2 years of proven professional experience building scalable web and mobile software. My expertise spans the entire development lifecycle—from interactive user interfaces built in <span className="text-[#00F5D4]">React.js</span> and <span className="text-[#00F5D4]">Next.js</span> to robust backend architectures powered by <span className="text-[#38BDF8]">Node.js</span>, <span className="text-[#38BDF8]">Express</span>, and <span className="text-[#818CF8]">PostgreSQL</span>.
              </p>
              <p className="text-neutral-400 text-base">
                Having engineered both web platforms (such as multi-tenant veterinary and dating platforms) and real-world mobile applications with direct Bluetooth thermal printer integration, I focus on clean maintainable code, dependable data schemas, and seamless end-user interactions.
              </p>
            </div>

            {/* Core Values */}
            <div className="pt-4 space-y-4">
              <h3 className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                Core Engineering Philosophies
              </h3>
              <div className="space-y-3">
                {principles.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00F5D4] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white text-sm font-semibold">{item.title}</h4>
                        <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Technical Spec / Terminal Motif */}
          <div ref={rightColRef} className="lg:col-span-5 space-y-6">
            
            {/* Terminal Window Card */}
            <div className="rounded-2xl bg-[#0D0F17] border border-white/10 shadow-2xl overflow-hidden">
              {/* Window Controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#131622] border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                  <Terminal className="w-3.5 h-3.5 text-[#00F5D4]" />
                  <span>developer_profile.json</span>
                </div>
                <div className="text-[10px] font-mono text-neutral-500">v2.0</div>
              </div>

              {/* Code Snippet */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-neutral-300 space-y-1">
                <div><span className="text-purple-400">const</span> developer = &#123;</div>
                <div className="pl-4"><span className="text-neutral-400">name:</span> <span className="text-[#00F5D4]">"{portfolioData.personal.name}"</span>,</div>
                <div className="pl-4"><span className="text-neutral-400">primaryStack:</span> [</div>
                <div className="pl-8 text-amber-300">"React.js", "Next.js", "React Native",</div>
                <div className="pl-8 text-amber-300">"Node.js", "PostgreSQL", "Tailwind CSS"</div>
                <div className="pl-4">],</div>
                <div className="pl-4"><span className="text-neutral-400">experienceYears:</span> <span className="text-sky-400">2</span>,</div>
                <div className="pl-4"><span className="text-neutral-400">location:</span> <span className="text-emerald-400">"{portfolioData.personal.location}"</span>,</div>
                <div className="pl-4"><span className="text-neutral-400">aiTools:</span> [<span className="text-indigo-400">"Google Antigravity"</span>, <span className="text-indigo-400">"Claude"</span>],</div>
                <div className="pl-4"><span className="text-neutral-400">passionateAbout:</span> [</div>
                <div className="pl-8 text-neutral-400">"API Optimization",</div>
                <div className="pl-8 text-neutral-400">"Modern Web Interfaces",</div>
                <div className="pl-8 text-neutral-400">"Reliable Mobile Architecture"</div>
                <div className="pl-4">],</div>
                <div className="pl-4"><span className="text-neutral-400">status:</span> <span className="text-[#00F5D4]">"Ready for Impact"</span></div>
                <div>&#125;;</div>
              </div>
            </div>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 text-[#00F5D4] mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs font-mono font-medium">Timeline</span>
                </div>
                <div className="text-sm font-semibold text-white">2024 — 2026</div>
                <div className="text-[11px] text-neutral-400">Active industry track record</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 text-[#38BDF8] mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-mono font-medium">Relocation</span>
                </div>
                <div className="text-sm font-semibold text-white">Open to Remote</div>
                <div className="text-[11px] text-neutral-400">& Onsite Opportunities</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
