import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check if device supports hover and fine pointer
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setIsVisible(true);

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      gsap.to(dot, {
        x,
        y,
        duration: 0.08,
        ease: 'power2.out'
      });

      gsap.to(ring, {
        x,
        y,
        duration: 0.35,
        ease: 'power2.out'
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="pointer"]') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Precise pointer center */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out ${
          isHovered ? 'scale-0' : 'bg-[#00F5D4]'
        }`}
      />
      {/* Smooth fluid aura */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out border ${
          isHovered
            ? 'w-14 h-14 bg-[#00F5D4]/15 border-[#00F5D4] backdrop-blur-[1px] scale-100 shadow-[0_0_20px_rgba(0,245,212,0.3)]'
            : 'w-8 h-8 border-white/20 bg-transparent'
        }`}
      />
    </>
  );
}
