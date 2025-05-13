'use client';

import { useEffect, useRef, useState } from 'react';
import '../styles/HeroFlip.css';

export default function HeroFlip() {
  const [flipped, setFlipped] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && window.innerWidth <= 768) {
          timeoutRef.current = setTimeout(() => {
            setFlipped(true);
            setTimeout(() => setFlipped(false), 1000);
          }, 200);
        } else {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          setFlipped(false);
        }
      },
      { threshold: 0.6 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const playShutter = () => {
    const audio = new Audio('/shutter.mp3');
    audio.play();
  };

  const handleHover = () => {
    setFlipped(true);
    playShutter();
    setTimeout(() => setFlipped(false), 500);
  };

  return (
    <div
      ref={containerRef}
      className={`hero-flip-container ${flipped ? 'flipped' : ''}`}
      onMouseEnter={() => {
        if (window.innerWidth > 768) handleHover();
      }}
    >
      <div className="flipper">
        <img src="/hero.jpg" alt="Hero" className="front" />
        <img src="/hero-back.jpg" alt="Hero Back" className="back" />
      </div>
    </div>
  );
}