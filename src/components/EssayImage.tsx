'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface EssayImageProps {
  src: string;        // black & white image URL
  srcColor?: string;    // optional color image URL
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export default function EssayImage({
  src,
  srcColor,
  alt = '',
  caption,
  width = 1200,
  height = 800,
  onClick,
}: EssayImageProps) {
  const [showColor, setShowColor] = useState(false);

  const toggleColor = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent triggering onClick of the image wrapper
    if (srcColor) setShowColor(!showColor);
  };

  return (
    <div className="w-full flex justify-center my-8 px-4">
      <div className="w-full max-w-6xl">
        <div
          className={`relative w-full h-auto aspect-[3/2] ${onClick ? 'cursor-pointer' : ''}`}
          onClick={onClick}
        >
          <Image
            src={showColor && srcColor ? srcColor : src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className="rounded object-contain"
          />
          {srcColor && (
            <button
              type="button"
              onClick={toggleColor}
              className="absolute cursor-pointer w-16 min-w-[4rem]
              border top-2 right-2 bg-black bg-opacity-60
              text-white px-3 py-1 rounded text-xs z-10 flex items-center justify-center hover:bg-opacity-40"
            >
              {showColor ? 'B&W' : 'Color'}
            </button>
          )}
        </div>
        {caption && (
          <p className="text-sm text-gray-500 italic text-center mt-2">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}