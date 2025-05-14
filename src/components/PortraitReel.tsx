'use client';

import React from 'react';

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
  return (
    <div className="my-8">
      {title && (
        <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      )}
      <div className="flex gap-4 overflow-x-auto px-2 py-4 snap-x snap-mandatory scroll-smooth">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            className={`h-80 w-auto object-cover rounded-lg shadow-md snap-start ${orientation === 'landscape' ? 'aspect-[3/2]' : 'aspect-[2/3]'
              }`}
          />
        ))}
      </div>
      {caption && (
        <p className="text-sm italic text-gray-600 text-center dark:text-white px-4">{caption}</p>
      )}
    </div>
  );
}