'use client';

import React, { useState } from 'react';
import ShareButtons from '@/components/ShareButtons';

export interface PhotoEssayProps {
  title: string;
  subtitle: string;
  cover: {
    src: string;
    caption?: string;
  };
  published?: boolean;
  publishedDate?: string;
  updatedDate?: string;
  essayBlocks: any[];
  shareUrl?: string;
  shareTitle?: string;
  collapsible?: boolean;
}

export default function PhotoEssay({
  title,
  subtitle,
  cover,
  published = false,
  publishedDate,
  updatedDate,
  essayBlocks,
  shareUrl,
  shareTitle,
  collapsible = false,
}: PhotoEssayProps) {
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

  const toggleCollapse = (id: string) => {
    setCollapsedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="font-garamond">
      {/* Header */}
      <div className="photo-essay-header px-4">
        <center>
          <h1 className="essay-title text-4xl font-bold mb-2">{title}</h1>
          <p className="text-lg italic">{subtitle}</p>
          <p className="essay-author">by Çağdaş</p>
          {published ? (
            <p className="essay-published text-sm text-gray-400">{publishedDate}</p>
          ) : (
            <p className="essay-published text-sm text-red-400">Work in progress</p>
          )}
          <div className="share-buttons mt-2 flex justify-center">
            <ShareButtons url={shareUrl!} title={shareTitle!} />
          </div>
        </center>
      </div>

      {/* Cover image */}
      <div className="flex justify-center px-4 mt-6">
        <div className="w-full max-w-[1400px] relative">
          <img
            src={cover.src}
            alt="cover"
            className="w-full rounded essay-cover-image"
            data-testid="essay-cover-img"
          />
          <p className="image-caption mb-4 text-center italic text-gray-500 text-sm mt-2 dark:text-white">
            {cover.caption}
          </p>
        </div>
      </div>

      {/* Essay content */}
      <div className="w-full py-10">
        {essayBlocks.map((block, i) => {
          if (block.type === 'heading' && block.id) {
            return (
              <div key={i} className="pt-10 px-4 max-w-[900px] mx-auto">
                <div className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleCollapse(block.id)}
                >
                  <h2 className="text-2xl font-bold" id={block.id}>{block.text}</h2>
                  <button className="text-sm">
                    {collapsedSections[block.id] ? '▼' : '▲'}
                  </button>
                </div>
                <hr className="mt-2 mb-4" />
              </div>
            );
          }

          if (collapsedSections[block.id || '']) return null;

          if (block.type === 'text') {
            return (
              <div key={i} className="max-w-[900px] mx-auto px-4">
                <p className="text-lg leading-8 md:text-xl md:leading-9 whitespace-pre-line">
                  {block.content}
                </p>
              </div>
            );
          }

          if (block.type === 'image') {
            return (
              <div key={i} className="w-full flex justify-center my-8 px-4">
                <div className="w-full max-w-[1400px]">
                  <img src={block.src} alt={block.alt || ''} className="w-full rounded" />
                  {block.caption && (
                    <p className="text-sm text-gray-500 italic text-center mt-2">{block.caption}</p>
                  )}
                </div>
              </div>
            );
          }

          if (block.type === 'component' && typeof block.render === 'function') {
            return (
              <div key={i} className="my-8 max-w-[1400px] mx-auto">
                {block.render()}
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}