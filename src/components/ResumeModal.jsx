import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Briefcase, GraduationCap, Code2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/markdown or trigger print to save as PDF
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      window.print();
      return;
    }
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${portfolioData.personal.name} - Resume</title>
          <style>
            body { font-family: system-ui, sans-serif; line-height: 1.5; color: #111; max-width: 800px; margin: 40px auto; padding: 0 20px; }
            h1 { font-size: 28px; margin-bottom: 4px; }
            .contact { color: #555; font-size: 14px; margin-bottom: 24px; }
            h2 { font-size: 18px; border-bottom: 1px solid #ccc; padding-bottom: 4px; margin-top: 24px; text-transform: uppercase; letter-spacing: 0.5px; }
            .item-header { display: flex; justify-content: space-between; font-weight: bold; margin-top: 12px; }
            .item-sub { color: #444; font-style: italic; font-size: 14px; margin-bottom: 6px; }
            ul { margin-top: 4px; padding-left: 20px; font-size: 14px; }
            li { margin-bottom: 4px; }
            .badge { background: #eee; padding: 2px 6px; border-radius: 4px; font-size: 12px; }
          </style>
        </head>
        <body>
          <h1>${portfolioData.personal.name}</h1>
          <div class="contact">
            ${portfolioData.personal.location} | Phone: ${portfolioData.personal.phone} | Email: ${portfolioData.personal.email}
          </div>

          <h2>Professional Summary</h2>
          <p style="font-size: 14px;">${portfolioData.personal.bio[0]} ${portfolioData.personal.bio[1]}</p>

          <h2>Technical Skills</h2>
          <p style="font-size: 14px;"><strong>Languages:</strong> JavaScript, HTML, CSS, Python</p>
          <p style="font-size: 14px;"><strong>Frameworks & Runtime:</strong> React.js, Next.js, React Native, Node.js, Express.js, Tailwind CSS, FastAPI, Flutter</p>
          <p style="font-size: 14px;"><strong>Databases:</strong> PostgreSQL</p>
          <p style="font-size: 14px;"><strong>Developer Tools:</strong> Visual Studio Code, Git, GitLab</p>
          <p style="font-size: 14px;"><strong>AI Tools:</strong> Google Antigravity, Claude</p>

          <h2>Experience</h2>
          ${portfolioData.experience.map(exp => `
            <div class="item-header">
              <span>${exp.role} — ${exp.company}</span>
              <span>${exp.period}</span>
            </div>
            <div class="item-sub">${exp.location}</div>
            <ul>
              ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          `).join('')}

          <h2>Projects</h2>
          ${portfolioData.projects.map(proj => `
            <div class="item-header">
              <span>${proj.title}</span>
              <span style="font-size:12px; font-weight:normal;">${proj.tags.join(', ')}</span>
            </div>
            <ul>
              ${proj.achievements.map(a => `<li>${a}</li>`).join('')}
            </ul>
          `).join('')}

          <h2>Education</h2>
          ${portfolioData.education.map(edu => `
            <div class="item-header">
              <span>${edu.institution}</span>
              <span>${edu.period}</span>
            </div>
            <div class="item-sub">${edu.degree} — ${edu.location}</div>
          `).join('')}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E1017] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#12141F]">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00F5D4] animate-pulse" />
            <h3 className="font-heading font-semibold text-lg text-white">Curriculum Vitae</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">
              Verified Experience
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-300 hover:text-white transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#00F5D4] hover:bg-[#00E0C3] text-black font-semibold text-xs transition-colors shadow-lg shadow-[#00F5D4]/20"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 text-neutral-300">
          
          {/* Header Info */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-3xl font-heading font-bold text-white tracking-tight">
              {portfolioData.personal.name}
            </h1>
            <p className="text-[#00F5D4] font-medium text-base mt-1">
              {portfolioData.personal.role} &bull; {portfolioData.personal.secondaryRole}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#00F5D4]" />
                {portfolioData.personal.location}
              </span>
              <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-1.5 hover:text-[#00F5D4] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#00F5D4]" />
                {portfolioData.personal.email}
              </a>
              <a href={`tel:${portfolioData.personal.phone}`} className="flex items-center gap-1.5 hover:text-[#00F5D4] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#00F5D4]" />
                {portfolioData.personal.phone}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00F5D4]" />
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-neutral-300">
              {portfolioData.personal.bio[0]}
            </p>
            <p className="text-sm leading-relaxed text-neutral-300 mt-2">
              {portfolioData.personal.bio[1]}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#00F5D4]" />
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <span className="text-[#00F5D4] font-semibold block mb-1">Frontend Engineering</span>
                <span className="text-neutral-300">React.js, Next.js, React Native, Tailwind CSS, JavaScript (ES6+), HTML5, CSS3, Material UI</span>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <span className="text-[#00F5D4] font-semibold block mb-1">Backend & Databases</span>
                <span className="text-neutral-300">Node.js, Express.js, PostgreSQL, REST APIs, Relational Schemas</span>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <span className="text-[#00F5D4] font-semibold block mb-1">Developer & AI Tools</span>
                <span className="text-neutral-300">VS Code, Git, GitLab, Google Antigravity, Claude</span>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <span className="text-[#00F5D4] font-semibold block mb-1">Additional Toolchains</span>
                <span className="text-neutral-300">Python, FastAPI, Flutter</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#00F5D4]" />
              Work History
            </h2>
            <div className="space-y-6">
              {portfolioData.experience.map((exp) => (
                <div key={exp.id} className="relative pl-5 border-l border-white/10 space-y-2">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#00F5D4] border-2 border-[#0E1017]" />
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="text-sm font-semibold text-white">
                      {exp.role} <span className="text-[#00F5D4]">@ {exp.company}</span>
                    </h3>
                    <span className="text-xs text-neutral-400 font-mono">{exp.period}</span>
                  </div>
                  <div className="text-xs text-neutral-500">{exp.location}</div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-300 leading-relaxed">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#00F5D4]" />
              Key Software Projects
            </h2>
            <div className="space-y-4">
              {portfolioData.projects.map((proj) => (
                <div key={proj.id} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-white text-sm">{proj.title}</h4>
                    <span className="text-[11px] font-mono text-[#00F5D4] bg-[#00F5D4]/10 px-2 py-0.5 rounded-full">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 mb-2">{proj.description}</p>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-400">
                    {proj.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#00F5D4]" />
              Education
            </h2>
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex flex-wrap justify-between items-start gap-2">
                <div>
                  <h4 className="text-sm font-semibold text-white">{edu.degree}</h4>
                  <div className="text-xs text-[#00F5D4]">{edu.institution} &bull; {edu.location}</div>
                </div>
                <div className="text-xs font-mono text-neutral-400">{edu.period}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-white/10 bg-[#12141F] flex items-center justify-between text-xs text-neutral-400">
          <span>Sathiyamoorthi C &bull; Full Stack Developer</span>
          <button
            onClick={onClose}
            className="text-white hover:text-[#00F5D4] transition-colors"
          >
            Close Window &times;
          </button>
        </div>

      </div>
    </div>
  );
}
