'use client';

import React, { useState, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
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
        <div
          onClick={() => scrollByImageWidth('left')}
          className="sticky left-0 top-1/2 -translate-y-1/2
          bg-black bg-opacity-50 text-white rounded-full p-2
          hover:bg-opacity-75 transition border cursor-pointer max-h-[30px] flex justify-center items-center"
          aria-label="Scroll left"
        >
          ‹
        </div>

        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            className={`h-80 w-auto object-cover rounded-lg shadow-md snap-start cursor-pointer ${orientation === 'landscape' ? 'aspect-[3/2]' : 'aspect-[2/3]'
              }`}
            onClick={() => openLightbox(idx)}
          />
        ))}

        <button
          onClick={() => scrollByImageWidth('right')}
          className="sticky right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50
          text-white rounded-full p-2 hover:bg-opacity-75 transition
          border cursor-pointer max-h-[30px] flex justify-center items-center"
          aria-label="Scroll right"
          type="button"
        >
          ›
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