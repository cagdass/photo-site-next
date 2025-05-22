'use client';

import React, { useEffect, useState } from 'react';
import { eventBus } from '@/utils/eventBus';

interface Heading {
  id: string;
  text: string;
  type?: 'heading' | 'subheading';
}

interface MobileTOCProps {
  headings: Heading[];
  onJumpTo?: (id: string) => void;
}

export default function MobileTOC({ headings, onJumpTo }: MobileTOCProps) {
  const [open, setOpen] = useState(false);

  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 100; // adjust if needed
      setAtBottom(scrollPosition >= threshold);
    };

    handleScroll(); // init
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const [hiddenByMenu, setHiddenByMenu] = useState(false);

  useEffect(() => {
    const hide = () => setHiddenByMenu(true);
    const show = () => setHiddenByMenu(false);

    eventBus.on('mobileMenuOpened', hide);
    eventBus.on('mobileMenuClosed', show);

    return () => {
      eventBus.off('mobileMenuOpened', hide);
      eventBus.off('mobileMenuClosed', show);
    };
  }, []);

  if (hiddenByMenu) return null;

  return (
    <>
      {/* Floating Button */}
      {!open && !hiddenByMenu && !atBottom && (
        <div className="fixed bottom-4 border right-4 z-50">
          <button
            onClick={() => setOpen(true)}
            className="bg-[var(--background)] text-[var(--foreground)] text-sm px-4 py-2 rounded shadow-lg hover:opacity-80"
          >
            ☰ Contents
          </button>
        </div>
      )}

      {/* Fullscreen TOC Overlay */}
      {open && (
        <div className="fixed inset-0 bg-[var(--background)] text-[var(--foreground)] z-50 p-6 overflow-y-auto">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-2xl"
            aria-label="Close Table of Contents"
          >
            ✕
          </button>
          <ul className="text-lg space-y-5 mt-14 px-2">
            {headings.map((h) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  onClick={() => {
                    setOpen(false);
                    onJumpTo?.(h.id);
                  }}
                  className={`underline block ${h.type === 'subheading' ? 'pl-4 text-sm opacity-100' : ''
                    }`}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}