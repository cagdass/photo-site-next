'use client';

import Image from 'next/image';
import React from 'react';

interface EssayImageProps {
  src: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export default function EssayImage({
  src,
  alt = '',
  caption,
  width = 1200,
  height = 800,
  onClick,
}: EssayImageProps) {
  return (
    <div className="w-full flex justify-center my-8 px-4">
      <div className="w-full max-w-7xl">
        <div
          className={`relative w-full h-auto aspect-[3/2] ${onClick ? 'cursor-pointer' : ''}`}
          onClick={onClick}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className="rounded object-contain"
          />
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
