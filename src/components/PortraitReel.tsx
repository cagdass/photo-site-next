'use client';

import React, { useState, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Image from 'next/image';
import 'yet-another-react-lightbox/styles.css';

type PortraitReelProps = {
  title?: string;
  caption?: string;
  images: string[];
  orientation?: 'portrait' | 'landscape';
};

export default function PortraitReel({
  title,
  caption,
  images,
  orientation = 'portrait',
}: PortraitReelProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const slides = images.map(src => ({ src }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const scrollByImageWidth = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    // assume all images have same width + gap, get first image width + gap
    const img = container.querySelector('img');
    if (!img) return;
    const style = getComputedStyle(img);
    const width = img.clientWidth + parseInt(style.marginRight) || 16; // fallback marginRight
    if (direction === 'left') {
      container.scrollBy({ left: -width, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: width, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative my-8 z-40">
      {title && (
        <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      )}

      <div
        style={{ backgroundColor: 'var(--foreground)' }}
        className="relative flex scroll-container gap-4 overflow-x-auto px-2 py-4 snap-x snap-mandatory scroll-smooth"
        ref={scrollContainerRef}
      >
        <button
          onClick={() => scrollByImageWidth('left')}
          className="sticky left-0 max-h-[30px] top-1/2 -translate-y-1/2 z-10
             bg-[var(--foreground)] border text-[var(--background)]
             p-1 cursor-pointer rounded-full shadow hover:scale-110 transition"
        >
          <ChevronLeft size={20} />
        </button>

        {images.map((src, idx) => (
          <div
            key={idx}
            className={`relative h-80 ${orientation === 'landscape' ? 'aspect-[3/2]' : 'aspect-[2/3]'} flex-shrink-0 rounded-lg overflow-hidden shadow-md snap-start cursor-pointer`}
            onClick={() => openLightbox(idx)}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 60vw, 240px"
            />
          </div>
        ))}

        <button
          onClick={() => scrollByImageWidth('right')}
          className="sticky right-0 max-h-[30px] top-1/2 -translate-y-1/2 right-2 z-10
             bg-[var(--foreground)] border cursor-pointer text-[var(--background)]
             p-1 rounded-full shadow hover:scale-110 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {caption && (
        <div className="flex justify-center px-4">
          <p className="text-sm italic text-gray-600 text-center max-w-lg mt-2 mb-10">
            {caption}
          </p>
        </div>
      )}

      <Lightbox
        open={lightboxIndex !== null}
        close={closeLightbox}
        slides={slides}
        index={lightboxIndex ?? 0}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 2 }}
        on={{
          click: () => closeLightbox(),
        }}
      />
    </div>
  );
}