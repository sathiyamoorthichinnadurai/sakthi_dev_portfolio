import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentScroll = window.scrollY;
        setScrollPercent(Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[100] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#00F5D4] via-[#38BDF8] to-[#818CF8] transition-all duration-75 ease-out shadow-[0_0_10px_#00F5D4]"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
}
