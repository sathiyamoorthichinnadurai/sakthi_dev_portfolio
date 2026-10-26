import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, Phone, MapPin, Copy, Check, ArrowUpRight, FileText, Sparkles, Send, MessageSquare 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Contact({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00F5D4', '#38BDF8', '#818CF8']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] relative bg-grid-pattern"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4 justify-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00F5D4]">06 // Contact</span>
          <div className="h-[1px] w-12 bg-[#00F5D4]/40" />
        </div>

        {/* Main Contact Card */}
        <div
          ref={cardRef}
          className="rounded-3xl bg-[#0E1017] border border-white/[0.08] p-8 sm:p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00F5D4]/10 blur-[100px] rounded-full" />

          {/* Heading */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/20 text-xs font-mono text-[#00F5D4] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for New Engineering Challenges</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            <span className="text-white">Let's build something</span>{' '}
            <span className="relative inline-block">
              <span
                style={{
                  background: 'linear-gradient(135deg, #00F5D4 0%, #38BDF8 45%, #818CF8 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradient-shift 6s ease infinite',
                }}
              >
                exceptional
              </span>
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-[#00F5D4] via-[#38BDF8] to-[#818CF8] opacity-50" />
            </span>{' '}
            <span className="text-white">together.</span>
          </h2>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-neutral-400 mb-10 leading-relaxed font-sans">
            Whether you have an opening for a Full Stack / React / Node.js developer, a high-impact contract, or a project in need of robust architecture, feel free to reach out.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            
            {/* Primary Direct Mailto */}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#00F5D4] text-black font-semibold text-sm sm:text-base shadow-lg shadow-[#00F5D4]/20 hover:bg-[#00E0C3] hover:shadow-[#00F5D4]/35 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              <span>Send Direct Email</span>
            </a>

            {/* Quick Copy Email Button */}
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm sm:text-base backdrop-blur-sm transition-all duration-200"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#00F5D4]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            {/* Direct Resume View */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm sm:text-base transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-[#00F5D4]" />
              <span>View Resume</span>
            </button>

          </div>

          {/* Contact Details Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-white/5 max-w-3xl mx-auto text-left">
            
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group"
            >
              <div className="flex items-center gap-2 text-[#00F5D4] text-xs font-mono mb-1">
                <Mail className="w-3.5 h-3.5" />
                <span>Email Address</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#00F5D4] transition-colors break-all">
                {portfolioData.personal.email}
              </div>
            </a>

            <a
              href={`tel:${portfolioData.personal.phone}`}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group"
            >
              <div className="flex items-center gap-2 text-sky-400 text-xs font-mono mb-1">
                <Phone className="w-3.5 h-3.5" />
                <span>Phone / WhatsApp</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#00F5D4] transition-colors">
                {portfolioData.personal.phone}
              </div>
            </a>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Current Base</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white">
                {portfolioData.personal.location}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
