'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's `md` breakpoint
    };

    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const htmlClass = root.classList.contains('dark') ? 'dark' : 'light';
    setTheme(htmlClass);
    setMounted(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const htmlClass = root.classList.contains('dark') ? 'dark' : 'light';
    setTheme(htmlClass);
  }, [isMobile]);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    localStorage.setItem('theme', theme);
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    root.style.setProperty('--background', theme === 'dark' ? '#0a0a0a' : '#ffffff');
    root.style.setProperty('--foreground', theme === 'dark' ? '#ededed' : '#171717');
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-1 px-2 border rounded cursor-pointer"
      title="Toggle theme"
    >
      {mounted ? (
        <>
          {theme === 'dark' ? '🌞' : '🌙'}{' '}
          <span className="md:hidden text-sm">
            {theme === 'dark' ? ' Light theme' : ' Dark theme'}
          </span>
        </>
      ) : (
        '⏳'
      )}
    </button>
  );
}