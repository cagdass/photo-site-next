'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.style.setProperty('--background', '#0a0a0a');
      root.style.setProperty('--foreground', '#ededed');
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#171717');
      root.classList.add('light');
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border rounded"
      title="Toggle theme"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
      {' '}
      <span className="md:hidden text-sm">
        &nbsp;{theme === 'dark' ? ' Light theme' : ' Dark theme'}
      </span>
    </button>
  );
}