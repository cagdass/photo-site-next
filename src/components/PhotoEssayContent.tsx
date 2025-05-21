'use client';

import React, { useMemo, useState, useRef, useEffect } from 'react';
import Lightbox, { Render } from "yet-another-react-lightbox";
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { ImageSlide, SlideImage } from "yet-another-react-lightbox";
import Image from 'next/image';
import EssayImage from '@/components/EssayImage';
import PhotoEssayText from '@/components/PhotoEssayText';
import TableOfContents from '@/components/TableOfContents';
import 'yet-another-react-lightbox/styles.css';
import imageDimensions from '@/data/imageDimensions';

const typedImageDimensions = imageDimensions as Record<string, { width: number; height: number }>;

interface PhotoEssayContentProps {
  cover: { src: string; caption?: string };
  essayBlocks: any[];
  collapsible?: boolean;
  prelude?: React.ReactNode;
  hasTableOfContents?: boolean;
  imgSrcReplaceStr?: string,
}

type CustomSlide = SlideImage & {
  color?: boolean;
};

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkWidth() {
      setIsMobile(window.innerWidth < breakpoint);
    }
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [breakpoint]);

  return isMobile;
}

export default function PhotoEssayContent({
  cover,
  essayBlocks,
  collapsible = false,
  prelude,
  hasTableOfContents = false,
  imgSrcReplaceStr,
}: PhotoEssayContentProps) {
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};

    essayBlocks.forEach(block => {
      if (block.type === "heading" && typeof block.collapsed === "boolean") {
        // if collapsed === false, section should be open (false means expanded)
        initialState[block.id] = block.collapsed;
      }
    });

    return initialState;
  });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showColorMap, setShowColorMap] = useState<Record<number, boolean>>({});

  const [tocVisible, setTocVisible] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleCollapse = (id: string) => {
    setCollapsedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Prepare slides with optional srcColor
  const imageBlocks = essayBlocks.filter(b => b.type === 'image');
  const slides: CustomSlide[] = useMemo(() => [
    {
      src: cover.src,
      ...(typedImageDimensions[cover.src] || {
        width: 1200,
        height: 800
      })
    },
    ...imageBlocks.map(b => {
      const key = b.src;

      return {
        src: b.src,
        color: b.color,
        caption: b.caption,
        alt: b.alt,
        ...(typedImageDimensions[b.src] || {
          width: 1200,
          height: 800,
        }),
      };
    })
  ], [cover.src, imageBlocks]);

  // Toggle color state per slide index
  function toggleColor(index: number) {
    setShowColorMap(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  }

  const render: Render = {
    slide: ({ slide, offset, rect }) => {
      const customSlide = slide as CustomSlide; // ✅ type cast here
      const index = slides.findIndex(s => s.src === customSlide.src);
      const useColor = showColorMap[index] && customSlide.color && imgSrcReplaceStr;

      const updatedSlide: CustomSlide = {
        ...customSlide,
        src: useColor ? customSlide.src.replace(imgSrcReplaceStr, imgSrcReplaceStr + 'color/') : customSlide.src,
      };

      const [loaded, setLoaded] = useState(false);

      return (
        <div className="relative flex items-center justify-center"
          style={{ width: rect.width, height: rect.height }}
        >
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white" />
            </div>
          )}
          <ImageSlide
            slide={updatedSlide}
            offset={offset}
            rect={rect}
            onLoad={() => setLoaded(true)}
          />
          {customSlide.color && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleColor(index);
              }}
              className="absolute top-1 -mt-1 left-1 w-20 bg-black border
                font-garamond
                bg-opacity-70 text-white py-1 cursor-pointer
                z-50 rounded text-center select-none hover:bg-opacity-40"
              aria-label="Toggle color"
            >
              {useColor ? "B & W" : "Color"}
            </button>
          )}
        </div>
      );
    },
  };

  type Group = {
    heading: { id: string; text: string, collapsed?: boolean, };
    blocks: typeof essayBlocks;
  };

  const groups: Group[] = useMemo(() => {
    const tempGroups: Group[] = [];
    let currentGroup: Group | null = null;

    essayBlocks.forEach(block => {
      if (block.type === 'heading') {
        currentGroup = { heading: block, blocks: [] };
        tempGroups.push(currentGroup);
      } else {
        if (!currentGroup) {
          currentGroup = { heading: { id: 'default', text: '' }, blocks: [] };
          tempGroups.push(currentGroup);
        }
        currentGroup.blocks.push(block);
      }
    });

    return tempGroups;
  }, [essayBlocks]);

  const isMobile = useIsMobile();

  // initialize collapse state on mount and when isMobile changes
  useEffect(() => {
    if (isMobile) {
      const allCollapsed: Record<string, boolean> = {};
      groups.forEach(g => {
        if (g.heading.id !== 'default' && g.heading.collapsed !== false) {
          allCollapsed[g.heading.id] = true;
        }
      });
      setCollapsedSections(allCollapsed);
    } else {
      setCollapsedSections({});
    }
  }, [isMobile, groups]);

  const headings = essayBlocks
    .filter(block => block.type === "heading" || block.type === 'subheading')
    .map(block => ({ id: block.id, text: block.text, type: block.type }));

  useEffect(() => {
    const handleScroll = () => {
      let currentId = null;
      for (const heading of headings) {
        const el = document.getElementById(heading.id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top <= 80) { // adjust offset for your header height
            currentId = heading.id;
          } else {
            break; // since headings are in order
          }
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  function renderEssayContent() {
    return (
      <>
        {!prelude && (
          <div className="w-full pr-2 -mt-8 py-10">
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
                    <div className="max-w-[900px] px-4 mx-auto">
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
                            {paragraphs.map((paragraph: string, i: number) => (
                              <PhotoEssayText key={i}>{paragraph}</PhotoEssayText>
                            ))}
                          </div>
                        );
                      }

                      if (block.type === 'subheading') {
                        return (
                          <div key={j} className="max-w-2xl px-4 mx-auto mt-10 mb-4">
                            <h3
                              id={block.id}
                              className="subheading text-xl font-bold"
                            >
                              {block.text}
                            </h3>
                          </div>
                        );
                      }

                      if (block.type === 'image') {
                        const slideIndex = slides.findIndex(s => s.src === block.src);

                        return (
                          <EssayImage
                            key={j}
                            src={block.src}
                            alt={block.alt}
                            caption={block.caption}
                            showColor={!!showColorMap[slideIndex]}
                            toggleColor={() => toggleColor(slideIndex)}
                            onClick={() => setLightboxIndex(slides.findIndex(slide => slide.src === block.src))}
                            {...(block.color && imgSrcReplaceStr ? { imgSrcReplaceStr } : {})}
                          />
                        );
                      }

                      if (block.type === 'component' && typeof block.render === 'function') {
                        return (
                          <div key={j} className="my-8 w-full mx-auto order-first">
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
        )}
      </>
    );
  }

  return (
    <>
      <div className="flex justify-center px-4 mt-6">
        <div className="w-full max-w-[1400px] relative">
          <div
            className="cursor-pointer"
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
      {hasTableOfContents && (
        <div className="lg:block w-48 h-0 mt-6 sticky top-24 left-2">
          <TableOfContents headings={headings} activeId={activeId} />
        </div>
      )}
      <main className="flex-1">
        {renderEssayContent()}
      </main>

      <Lightbox
        open={lightboxIndex !== null}
        close={() => setLightboxIndex(null)}
        slides={slides}
        index={lightboxIndex ?? 0}
        on={{ view: ({ index: currentIndex }) => setLightboxIndex(currentIndex) }}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 2 }}
        render={render}  // use custom slide render with color toggle
      />
    </>
  );
}