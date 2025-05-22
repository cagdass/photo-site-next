'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { eventBus } from '@/utils/eventBus';

const LINKS = [
  { to: '/', label: 'Home' },
  {
    label: 'Projects',
    subLinks: [
      { to: '/soi6', label: 'Soi 6 — ซอยหก' },
      { to: '/bikepacking', label: 'Bikepacking' },
    ],
  },
  {
    label: 'Shorts',
    subLinks: [
      { to: '/brief/samos', label: 'Samos' },
      { to: '/brief/sihanoukville', label: 'Sihanoukville' },
      { to: '/brief/songkran', label: 'Songkran' },
      { to: '/brief/carmen', label: 'Carmen' },
    ],
  },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

function handleMenuClick(e: React.MouseEvent<HTMLElement>) {
  // only scroll to top if clicked directly on container (not on links/buttons inside)
  if (e.target === e.currentTarget) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export interface NavbarProps {
  pageTitle?: string;
}

export default function Navbar({ pageTitle = '' }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const [showPageTitleInNavbar, setShowPageTitleInNavbar] = useState(false);

  useEffect(() => {
    const target = document.getElementById('cover-title'); // or h1 container
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowPageTitleInNavbar(!entry.isIntersecting);
      },
      { rootMargin: '-100px 0px 0px 0px' } // adjust for fixed navbar height
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setMenuOpen((v) => !v);
  };

  useEffect(() => {
    eventBus.emit(menuOpen ? 'mobileMenuOpened' : 'mobileMenuClosed');
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const toggleSection = (label: string) =>
    setExpanded(prev => ({ ...prev, [label]: !prev[label] }));

  const renderDesktopNav = () => (
    <ul className="hidden md:flex items-center gap-6 text-base font-medium">
      {LINKS.map((item, idx) =>
        item.subLinks ? (
          <li key={idx} className="relative group">
            <div className="hover:underline cursor-pointer">{item.label} ▾</div>
            <div className="absolute left-0 mt-1 w-40 bg-[var(--background)] text-[var(--foreground)] shadow-lg border-gray-200 dark:border-gray-800 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all z-50 rounded-md">
              <ul className="py-2">
                {item.subLinks.map((sub, sidx) => (
                  <li key={sidx}>
                    <Link
                      href={sub.to}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-500"
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ) : (
          <li key={idx}>
            <Link href={item.to} className="hover:underline">
              {item.label}
            </Link>
          </li>
        )
      )}
    </ul>
  );

  const renderMobileMenu = () => (
    <div
      className={`fixed top-0 left-0 w-full h-screen z-50 transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      style={{
        background: 'var(--background)',
        color: 'var(--foreground)',
      }}
      data-testid="mobile-menu"
    >
      {/* LOGO at top-left */}
      <div className="absolute top-3 left-4 z-50">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8 logo-img" />
          <span className="font-semibold text-lg tracking-tight">Çağdaş</span>
        </Link>
      </div>

      {/* CLOSE BUTTON at top-right */}
      <button
        onClick={() => toggleMenu()}
        className="absolute top-2 right-4 text-3xl z-50"
        aria-label="Close menu"
      >
        ✖
      </button>

      {/* Menu content */}
      <div className="flex flex-col justify-start items-center h-full px-6 py-8 space-y-6 pt-20">
        <ul className="text-center text-xl font-semibold space-y-4 mt-6 w-full">
          {LINKS.map((item, idx) =>
            item.subLinks ? (
              <li key={idx}>
                <button
                  onClick={() => toggleSection(item.label)}
                  className="w-full flex text-xl items-center justify-center gap-2 py-2 uppercase tracking-wide"
                >
                  {item.label}
                  <span>{expanded[item.label] ? '▾' : '▸'}</span>
                </button>
                <ul
                  className={`transition-all duration-300 ease-in-out overflow-hidden text-lg font-normal ${expanded[item.label] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  {item.subLinks.map((sub, sidx) => (
                    <li key={sidx}>
                      <Link
                        href={sub.to}
                        className="block py-1 hover:underline"
                        onClick={() => toggleMenu()}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={idx}>
                <Link
                  href={item.to}
                  onClick={() => toggleMenu()}
                  className="block py-2 hover:underline uppercase tracking-wide"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="dark-theme-button pt-8 border-t w-full flex justify-center mt-auto cursor-pointer">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 bg-[var(--background)] text-[var(--foreground)] shadow-sm transition-all"
        style={{
          background: 'var(--background)',
          color: 'var(--foreground)',
          borderColor: 'var(--foreground)',
        }}
      >
        <div
          className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between"
          onClick={handleMenuClick}
        >
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-8 logo-img" />
            <span className="font-semibold text-lg tracking-tight">Çağdaş</span>
          </Link>

          {pageTitle && (
            <div
              id="navbar-page-title"
              onClick={handleMenuClick}
              className={`
      absolute left-1/2 -translate-x-1/2 text-md md:hidden
      transition-opacity duration-500 ease-in-out font-garamond
      ${showPageTitleInNavbar ? 'opacity-100' : 'opacity-0 pointer-events-none'}
    `}
            >
              {pageTitle}
            </div>
          )}

          <div className="flex items-center gap-4">
            {renderDesktopNav()}
            <div className="md:hidden">
              <button
                className="text-2xl focus:outline-none"
                onClick={() => toggleMenu()}
              >
                {menuOpen ? '✖' : '☰'}
              </button>
            </div>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {renderMobileMenu()}
    </>
  );
}