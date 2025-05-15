'use client';

import React, { useState } from 'react';
import ShareButtons from '@/components/ShareButtons';
import PhotoEssayText from '@/components/PhotoEssayText';
import EssayImage from '@/components/EssayImage';

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

  // Group blocks under each heading
  type Group = {
    heading: { id: string; text: string };
    blocks: typeof essayBlocks;
  };

  const groups: Group[] = [];
  let currentGroup: Group | null = null;

  essayBlocks.forEach(block => {
    if (block.type === 'heading') {
      currentGroup = { heading: block, blocks: [] };
      groups.push(currentGroup);
    } else if (currentGroup) {
      currentGroup.blocks.push(block);
    }
  });

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
        {groups.map(({ heading, blocks }, i) => {
          const isCollapsed = collapsedSections[heading.id];

          return (
            <div key={i}>
              {/* Heading with toggle */}
              <div className="pt-10 px-4 max-w-[900px] mx-auto">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleCollapse(heading.id)}
                >
                  <h2 className="text-2xl font-bold" id={heading.id}>{heading.text}</h2>
                  <span
                    className={`inline-block transition-transform duration-300 text-sm ${isCollapsed ? 'rotate-0' : 'rotate-90'
                      }`}
                  >
                    ▶
                  </span>
                </div>
                <hr className="mt-2 mb-4" />
              </div>

              {/* Animated content wrapper */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isCollapsed ? 'max-h-0 opacity-0' : 'max-h-[2000px] opacity-100'
                  }`}
              >
                {blocks.map((block, j) => {
                  if (block.type === 'text') {
                    return (
                      <PhotoEssayText key={j}>
                        {block.content}
                      </PhotoEssayText>
                    );
                  }

                  if (block.type === 'image') {
                    return (
                      <EssayImage
                        key={j}
                        src={block.src}
                        alt={block.alt}
                        caption={block.caption}
                      />
                    );
                  }

                  if (block.type === 'component' && typeof block.render === 'function') {
                    return (
                      <div key={j} className="my-8 w-full mx-auto">
                        {block.render()}
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}