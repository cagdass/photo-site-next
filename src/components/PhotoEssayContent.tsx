'use client';

import React, { useState, useRef, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Image from 'next/image';
import EssayImage from '@/components/EssayImage';
import PhotoEssayText from '@/components/PhotoEssayText';
import 'yet-another-react-lightbox/styles.css';
interface PhotoEssayContentProps {
  cover: { src: string; caption?: string };
  essayBlocks: any[];
  collapsible?: boolean;
  prelude?: React.ReactNode;
}

export default function PhotoEssayContent({
  cover,
  essayBlocks,
  collapsible = false,
  prelude,
}: PhotoEssayContentProps) {
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
    } else {
      if (!currentGroup) {
        // no heading found yet: create a default group with empty heading
        currentGroup = { heading: { id: 'default', text: '' }, blocks: [] };
        groups.push(currentGroup);
      }
      currentGroup.blocks.push(block);
    }
  });

  return (
    <>
      <div className="flex justify-center px-4 mt-6">
        <div className="w-full max-w-[1400px] relative">

          <div className="cursor-pointer"
            style={{ position: "relative", width: "100%", aspectRatio: "3 / 2" }}
          >
            <Image
              src={cover.src}
              alt="cover"
              fill
              className="rounded"
              priority={true}
              data-testid="essay-cover-img"
              onClick={() => setLightboxIndex(0)}
            />

          </div>
          <p className="image-caption mb-4 text-center italic text-gray-500 text-sm mt-2">
            {cover.caption}
          </p>
        </div>
      </div>

      {prelude && <div className="my-12">{prelude}</div>}

      {!prelude && <div className="w-full py-10">
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
              {heading.text && (
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
              )}

              <div
                ref={contentRef}
                className={`overflow-hidden transition-all duration-300 ease-in-out opacity-100`}
                style={{ maxHeight: isCollapsed ? 0 : `${contentRef.current?.scrollHeight}px` }}
              >
                {blocks.map((block, j) => {
                  if (block.type === 'text') {
                    const paragraphs = block.content.split('\n').filter((p: string) => p.trim() !== '');
                    return (
                      <div key={j} className="max-w-3xl mx-auto ">
                        {paragraphs.map((para: string, i: number) => (
                          <PhotoEssayText key={i}>
                            {para}
                          </PhotoEssayText>
                        ))}
                      </div>
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
      </div>}

      <Lightbox
        open={lightboxIndex !== null}
        close={() => setLightboxIndex(null)}
        slides={slides}
        index={lightboxIndex ?? 0}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 2 }}
      />
    </>
  );
}