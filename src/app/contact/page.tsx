// src/app/contact/page.tsx
'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { Mail, Instagram, Github } from 'lucide-react';
import { buildMeta } from '@/buildMeta';

export default function ContactPage() {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const date = new Date(buildMeta.date);
    setFormattedDate(date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }));
  }, []);

  return (
    <section className="py-10 px-4 max-w-md mx-auto break-words text-left">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>

      <p className="text-md mb-6">
        Feel free to reach out — whether it’s about collaboration, exhibitions, prints, or just conversation.
      </p>

      <div className="flex items-center gap-2 mb-4">
        <Mail className="w-5 h-5 text-blue-400" />
        <a href="mailto:cagdasmore@gmail.com" className="hover:underline">
          cagdasmore[snail]gmail.com
        </a>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Instagram className="w-5 h-5 text-pink-400" />
        <a
          href="https://instagram.com/cagdas.raw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          @cagdas.raw
        </a>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <Github className="w-5 h-5 text-gray-400" />
        <a
          href="https://github.com/cagdass/photo-site-next"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline break-words"
        >
          open-source code for the website
        </a>
      </div>

      <p className="text-sm mb-6">
        The site is open source — feel free to contribute, report bugs, or adapt it for your own project.
      </p>

      <p className="text-sm mb-6">
        Last updated: {formattedDate} ·{' '}
        <a
          href={`https://github.com/cagdass/photo-site-next/commit/${buildMeta.commit}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          Commit: {buildMeta.commit}
        </a>
      </p>

      <section className="mt-12 mb-12">
        <h2 className="text-lg font-semibold mb-2">Subscribe for updates</h2>
        <p className="text-sm mb-4">
          Get occasional emails when I publish new photo essays or behind-the-scenes notes.
        </p>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/cagdas"
          method="post"
          target="popupwindow"
          onSubmit={() => window.open('https://buttondown.email/cagdas', 'popupwindow')}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="px-4 py-2 rounded border border-white bg-white text-black dark:bg-[#1a1a1a] dark:text-white w-full"
            style={{
              backgroundColor: 'var(--input-background)',
              color: 'var(--input-text)',
              borderColor: 'var(--border-color)',
            }}
          />
          <button
            type="submit"
            className="px-4 py-2 rounded border transition cursor-pointer"
            style={{
              color: 'var(--foreground)',
              borderColor: 'var(--border-color)',
            }}
          >
            Subscribe
          </button>
        </form>
      </section>

      <p className="text-md whitespace-normal break-words mt-10">
        Also, talk to me about grants and lucky opportunities — I’m very happy to not be doing software engineering at the moment, but I’m also just eking out a living. It’d be nice to get some work in print and out there, so I can keep doing this.
      </p>
    </section>
  );
}