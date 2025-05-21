'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface EssayImageProps {
  src: string;
  srcColor?: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  showColor: boolean;
  toggleColor: () => void;
  imgSrcReplaceStr?: string,
}

export default function EssayImage({
  src,
  srcColor,
  alt = '',
  caption,
  width = 1200,
  height = 800,
  onClick,
  showColor,
  toggleColor,
  imgSrcReplaceStr,
}: EssayImageProps) {
  const [loaded, setLoaded] = useState(false);
  const displaySrc = showColor && imgSrcReplaceStr ? src.replace(imgSrcReplaceStr, imgSrcReplaceStr + 'color/') : src;

  return (
    <div className="w-full flex justify-center my-8 px-4">
      <div className="w-full max-w-6xl">
        <div
          className={`relative w-full h-auto aspect-[3/2] ${onClick ? 'cursor-pointer' : ''}`}
          onClick={onClick}
        >
          {/* Spinner */}
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="animate-spin h-10 w-10 border-4 border-white border-t-transparent rounded-full" />
            </div>
          )}

          {/* Image */}
          <Image
            src={displaySrc}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className={`rounded object-contain transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'
              }`}
            onLoad={() => setLoaded(true)}
          />

          {/* Toggle button */}
          {imgSrcReplaceStr && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleColor();
              }}
              style={{ opacity: 0.66 }}
              className="absolute cursor-pointer w-20 min-w-[4rem]
              border top-2 right-2 bg-white bg-opacity-70
              text-black px-3 py-1 rounded text-base z-20 flex items-center justify-center hover:bg-opacity-40"
            >
              {showColor ? 'B & W' : 'Color'}
            </button>
          )}
        </div>

        {/* Caption */}
        {caption && (
          <p className="text-sm text-gray-500 italic text-center mt-2">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}