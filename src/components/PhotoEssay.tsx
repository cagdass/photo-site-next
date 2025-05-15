'use client';

import React, { useState, useRef, useEffect } from 'react';
import ShareButtons from '@/components/ShareButtons';
import EssayImage from '@/components/EssayImage';
import PhotoEssayText from '@/components/PhotoEssayText';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const toggleCollapse = (id: string) => {
    setCollapsedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const imageBlocks = essayBlocks.filter(b => b.type === 'image');
  const slides = [
    { src: cover.src },
    ...imageBlocks.map(b => ({ src: b.src })),
  ];

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

      <div className="flex justify-center px-4 mt-6">
        <div className="w-full max-w-[1400px] relative">
          <img
            src={cover.src}
            alt="cover"
            className="w-full rounded essay-cover-image"
            data-testid="essay-cover-img"
            onClick={() => setLightboxIndex(0)}
          />
          <p className="image-caption mb-4 text-center italic text-gray-500 text-sm mt-2 dark:text-white">
            {cover.caption}
          </p>
        </div>
      </div>

      <div className="w-full py-10">
        {groups.map(({ heading, blocks }, i) => {
          const isCollapsed = collapsedSections[heading.id];
          const contentRef = useRef<HTMLDivElement>(null);

          useEffect(() => {
            if (!isCollapsed && contentRef.current) {
              contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
            }
          }, [isCollapsed]);

          return (
            <div key={i}>
              <div className="pt-10 px-4 max-w-[900px] mx-auto">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleCollapse(heading.id)}
                >
                  <h2 className="text-2xl font-bold" id={heading.id}>{heading.text}</h2>
                  <button
                    className={`text-sm cursor-pointer transition-transform duration-300 transform ${isCollapsed ? 'rotate-270' : 'rotate-0'}`}
                  >
                    ▼
                  </button>
                </div>
                <hr className="mt-2 mb-4" />
              </div>

              <div
                ref={contentRef}
                className={`overflow-hidden transition-all duration-300 ease-in-out opacity-100`}
                style={{ maxHeight: isCollapsed ? 0 : `${contentRef.current?.scrollHeight}px` }}
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
                        onClick={() =>
                          setLightboxIndex(
                            slides.findIndex(slide => slide.src === block.src)
                          )
                        }
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

      <Lightbox
        open={lightboxIndex !== null}
        close={() => setLightboxIndex(null)}
        slides={slides}
        index={lightboxIndex ?? 0}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 2 }}
      />
    </div>
  );
}
