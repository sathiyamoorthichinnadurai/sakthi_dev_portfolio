import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#08090E] text-[#EDEDED] overflow-x-hidden selection:bg-[#00F5D4]/20 selection:text-[#00F5D4]">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Desktop Custom Fluid Cursor */}
      <CustomCursor />

      {/* Fixed Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Single Page Content */}
      <main id="main-content">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Modern Editorial Footer */}
      <Footer />

      {/* Interactive Resume View & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
