'use client';

import Image from 'next/image';
import React from 'react';

interface EssayImageProps {
  src: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
}

export default function EssayImage({
  src,
  alt = '',
  caption,
  width = 1200,
  height = 800,
}: EssayImageProps) {
  return (
    <div className="w-full flex justify-center my-8 px-4">
      <div className="w-full max-w-5xl">
        <div className="relative w-full h-auto aspect-[3/2]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className="rounded object-contain"
            priority={false}
          />
        </div>
        {caption && (
          <p className="text-sm text-gray-400 dark:text-gray-300 italic text-center mt-2">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
