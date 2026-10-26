import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ExternalLink, Layers, Server, Database, CheckCircle, 
  PawPrint, Heart, Smartphone, Printer, ShieldCheck, Activity, Users, Calendar
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll('.project-card');

      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          opacity: 0,
          y: 45,
          duration: 0.85,
          delay: index * 0.1,
          ease: 'power3.out'
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#090A10]/60 relative"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00F5D4]">04 // Portfolio</span>
              <div className="h-[1px] w-12 bg-[#00F5D4]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Selected Software Projects
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-400">
            Real engineering contributions spanning full-stack web applications, relational database schemas, and hardware-integrated mobile tools.
          </p>
        </div>

        {/* Featured Project #1: Pet Care Web Platform */}
        <div className="project-card rounded-3xl bg-[#0E1017] border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/20 flex items-center gap-1.5">
                  <PawPrint className="w-3.5 h-3.5" />
                  Featured Full-Stack Web Platform
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-neutral-400 bg-white/5 border border-white/5">
                  Production Architected
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight">
                Pet Care Web Platform
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                A multi-functional clinic and pet owner management web application. Designed to manage pet onboarding, comprehensive health profiles, vet clinic settings, and real-time medical appointment bookings.
              </p>

              {/* Engineering Highlights */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                  Core Engineering Deliverables:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" />
                    <span>Developed responsive interfaces for owner registration, appointment slots, and clinic settings in React.js & Tailwind CSS.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" />
                    <span>Engineered Node.js/Express.js REST APIs with robust payload validation and PostgreSQL relational schema modeling.</span>
                  </li>
                </ul>
              </div>

              {/* Stack Pills */}
              <div className="pt-4 flex flex-wrap gap-2">
                {["React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "REST APIs"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-[#00F5D4]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Visual: Interactive CSS Clinic Dashboard Mockup */}
            <div className="lg:col-span-6 bg-[#08090E] border border-white/10 rounded-2xl p-5 shadow-inner space-y-4">
              
              {/* Mockup Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-heading font-semibold text-white">PetCare Clinic OS</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400">
                  <Database className="w-3 h-3 text-[#00F5D4]" />
                  <span>PostgreSQL Connected</span>
                </div>
              </div>

              {/* Mockup Quick Metrics */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                  <span className="text-[10px] text-neutral-400 block">Total Patients</span>
                  <span className="text-lg font-heading font-bold text-white">1,420+</span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                  <span className="text-[10px] text-neutral-400 block">Today's Slots</span>
                  <span className="text-lg font-heading font-bold text-[#00F5D4]">18 Active</span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                  <span className="text-[10px] text-neutral-400 block">API Response</span>
                  <span className="text-lg font-heading font-bold text-sky-400">42ms</span>
                </div>
              </div>

              {/* Mockup Appointment List */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-neutral-400 flex justify-between items-center px-1">
                  <span>Recent Clinic Appointments</span>
                  <span className="text-[10px] text-[#00F5D4]">Live Queue</span>
                </div>
                
                {[
                  { pet: "Milo (Golden Retriever)", owner: "Dr. Rachel V.", service: "Vaccination & Wellness Check", time: "10:30 AM", status: "Confirmed" },
                  { pet: "Luna (Persian Cat)", owner: "Karthik Sundaram", service: "Dental Scaling & Checkup", time: "11:45 AM", status: "In-Progress" },
                  { pet: "Rocky (German Shepherd)", owner: "Priya Nair", service: "Post-Op Wound Review", time: "02:15 PM", status: "Scheduled" }
                ].map((row, rIdx) => (
                  <div key={rIdx} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-white">{row.pet}</div>
                      <div className="text-[10px] text-neutral-400">{row.service} &bull; Owner: {row.owner}</div>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                        {row.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* Supporting Projects: 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project #2: Dating Web Application */}
          <div className="project-card rounded-3xl bg-[#0E1017] border border-white/[0.08] hover:border-white/20 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium text-rose-400 bg-rose-500/10 border border-rose-500/20 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5" />
                  Frontend Web App
                </span>
                <span className="text-xs font-mono text-neutral-500">React.js & MUI</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                Dating Web Application
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                Developed responsive user interfaces across onboarding, user profile editing, preference filters, and settings pages. Maintained a cohesive styling system using React.js and Material UI.
              </p>

              {/* Abstract Visual: Profile Discovery Card */}
              <div className="p-4 rounded-xl bg-[#08090E] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-xs font-bold text-white">
                      A
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Ananya, 25</div>
                      <div className="text-[10px] text-neutral-400">UI Designer & Photographer</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full">
                    94% Match
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-[10px]">
                  <span className="px-2 py-0.5 bg-white/5 rounded text-neutral-300">Coffee Enthusiast</span>
                  <span className="px-2 py-0.5 bg-white/5 rounded text-neutral-300">Indie Music</span>
                  <span className="px-2 py-0.5 bg-white/5 rounded text-neutral-300">Travel</span>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-1.5 text-xs text-neutral-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>Interactive card deck navigation and stateful onboarding flow.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>Pixel-consistent UI component library built with Material UI & custom themes.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
              {["React.js", "JavaScript", "Material UI", "State Management", "Responsive Design"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/5 text-neutral-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Project #3: Mobile Billing & Field App (from Nekhop) */}
          <div className="project-card rounded-3xl bg-[#0E1017] border border-white/[0.08] hover:border-white/20 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium text-sky-400 bg-sky-500/10 border border-sky-500/20 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5" />
                  Mobile & IoT Integration
                </span>
                <span className="text-xs font-mono text-neutral-500">React Native</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                Work Management & Billing Mobile Apps
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                Two production cross-platform applications built at Nekhop Technologies. Integrated real-time Bluetooth thermal printers for on-site receipt printing with multilingual interfaces for retail and field workforce.
              </p>

              {/* Abstract Visual: Bluetooth POS Ticket */}
              <div className="p-4 rounded-xl bg-[#08090E] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-sky-400 font-mono text-[11px]">
                    <Printer className="w-3.5 h-3.5" />
                    Bluetooth Thermal Link: Connected
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">Ready</span>
                </div>
                <div className="p-2.5 bg-white/[0.02] border border-dashed border-white/15 rounded-lg text-neutral-300 font-mono text-[11px] space-y-1">
                  <div className="flex justify-between"><span>RECEIPT #4912</span><span>PRINTED</span></div>
                  <div className="flex justify-between text-neutral-400"><span>FIELD DISPATCH ID:</span><span>#084</span></div>
                  <div className="border-t border-white/10 pt-1 flex justify-between text-[#00F5D4]">
                    <span>STATUS:</span><span>SYNCED VIA REST API</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-1.5 text-xs text-neutral-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span>Integrated low-latency Bluetooth thermal printers for physical billing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span>Multilingual UI handling regional localization and error-resilient network caching.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
              {["React Native", "Bluetooth Hardware API", "JavaScript", "Multilingual UI", "REST APIs"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/5 text-neutral-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
