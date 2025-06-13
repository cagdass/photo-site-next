'use client';

import React, { useMemo, useState, useRef, useEffect } from 'react';
import Lightbox, { Render } from "yet-another-react-lightbox";
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { ImageSlide, SlideImage } from "yet-another-react-lightbox";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import EssayImage from '@/components/EssayImage';
import PhotoEssayText from '@/components/PhotoEssayText';
import MobileTOC from '@/components/MobileTOC';
import TableOfContents from '@/components/TableOfContents';
import 'yet-another-react-lightbox/styles.css';
import imageDimensions from '@/data/imageDimensions';

const typedImageDimensions = imageDimensions as Record<string, { width: number; height: number }>;

interface PhotoEssayContentProps {
  cover: { src: string; caption?: string };
  essayBlocks: EssayBlock[];
  collapsible?: boolean;
  prelude?: React.ReactNode;
  hasTableOfContents?: boolean;
  imgSrcReplaceStr?: string,
}

type CustomSlide = SlideImage & {
  color?: boolean;
};

type EssayBlock =
  | { type: 'heading' | 'subheading'; id: string; text: string; collapsed?: boolean }
  | { type: 'text'; content: string }
  | { type: 'component'; render: () => React.ReactNode }
  | { type: 'image'; src: string; alt?: string; caption?: string, color?: boolean }
  | { type: 'footnotes'; items: { id: string; content: string; link?: string, excerpt?: string }[] }
  | { type: 'glossary'; items: { term: string; definition: string }[] };

function useIsLgUp(breakpoint = 1024) {
  const [isLgUp, setIsLgUp] = useState(false);

  useEffect(() => {
    function checkWidth() {
      setIsLgUp(window.innerWidth >= breakpoint);
    }
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [breakpoint]);

  return isLgUp;
}

export default function PhotoEssayContent({
  cover,
  essayBlocks,
  collapsible = false,
  prelude,
  hasTableOfContents = false,
  imgSrcReplaceStr,
}: PhotoEssayContentProps) {
  const currentVisibleHeadingRef = useRef<HTMLElement | null>(null);
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
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showColorMap, setShowColorMap] = useState<Record<number, boolean>>({});

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [tocVisible, setTocVisible] = useState(true);
  const [tocVisibleDesktop, setTocVisibleDesktop] = useState(true);
  const [isUserScrolling, setIsUserScrolling] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleCollapse = (id: string) => {
    setCollapsedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  function handleJumpTo(id: string) {
    const group = groups.find(g =>
      g.heading.id === id ||
      g.blocks.some(b =>
        ('id' in b) && b.id === id
      )
    );

    if (group) {
      setCollapsedSections(prev => ({
        ...prev,
        [group.heading.id]: false
      }));

      // temporarily disable scroll tracking
      setIsUserScrolling(false);
      setTimeout(() => setIsUserScrolling(true), 1000);

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          // el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }

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

      // const [loaded, setLoaded] = useState(false);

      return (
        <div className="relative flex items-center justify-center"
          style={{ width: rect.width, height: rect.height }}
        >
          {/* {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white" />
            </div>
          )} */}
          <ImageSlide
            slide={updatedSlide}
            offset={offset}
            rect={rect}
          // onLoad={() => setLoaded(true)}
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

  useEffect(() => {
    const essayIndex = parseInt(searchParams.get('essay') || '', 10);
    if (!isNaN(essayIndex) && essayIndex >= 0 && essayIndex < slides.length) {
      setLightboxIndex(essayIndex);
    } else {
      setLightboxIndex(null);
    }
  }, [searchParams, slides.length]);

  const setEssayIndexInUrl = (newIndex: number | null, replace = false) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newIndex === null) {
      params.delete('essay');
    } else {
      params.set('essay', newIndex.toString());
    }
    const url = `${pathname}?${params.toString()}${window.location.hash}`;

    if (replace) {
      router.replace(url, { scroll: false });
    } else {
      router.push(url, { scroll: false });
    }
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

  const isLgUp = useIsLgUp();

  // initialize collapse state on mount and when isLgUp changes
  useEffect(() => {
    if (!isLgUp) {
      const allCollapsed: Record<string, boolean> = {};
      groups.forEach(g => {
        if (g.heading.id !== 'default' && g.heading.collapsed !== false) {
          allCollapsed[g.heading.id] = true;
        }
      });
      setCollapsedSections(allCollapsed);
    } else {
      const fromBlocks: Record<string, boolean> = {};
      essayBlocks.forEach(block => {
        if (block.type === 'heading' && block.collapsed === true) {
          fromBlocks[block.id] = true;
        }
      });
      setCollapsedSections(fromBlocks);
    }
  }, [isLgUp, groups]);

  // Build hashToHeadingIdMap dynamically from the groups
  const hashToHeadingIdMap = useMemo(() => {
    const map: Record<string, string> = {};

    groups.forEach(group => {
      const headingId = group.heading.id;
      if (headingId) {
        map[headingId] = headingId;

        group.blocks.forEach(block => {
          if (block.type === 'subheading' && block.id) {
            map[block.id] = headingId;
          }
          if (block.type === 'footnotes') {
            block.items.forEach(item => {
              if (item.id) {
                map[item.id] = headingId;
                map[`ref-${item.id}`] = headingId;
              }
            });
          }
        });
      }
    });

    return map;
  }, [groups]);

  useEffect(() => {
    const handleHashNav = () => {
      const hash = window.location.hash?.slice(1);
      // console.log("[hashnav] current hash:", hash);
      if (!hash) return;

      const el = document.getElementById(hash);
      if (!el) {
        // console.log("[hashnav] element not found:", hash);
        return;
      }

      // Find closest ancestor div[ref] — i.e. the collapsible content container
      const sectionWrapper = el.closest('div[data-section-id]');
      if (!sectionWrapper) {
        // console.log("[hashnav] no collapsible section found");
      }

      const sectionId = sectionWrapper?.getAttribute('data-section-id');
      // console.log("[hashnav] expanding sectionId:", sectionId);

      if (sectionId) {
        setCollapsedSections(prev => ({
          ...prev,
          [sectionId]: false,
        }));
      }

      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // console.log("[hashnav] scrolled to:", hash);
        window.history.replaceState(null, '', `#${hash}`);
      }, 400);
    };

    window.addEventListener('hashchange', handleHashNav);
    handleHashNav();

    return () => window.removeEventListener('hashchange', handleHashNav);
  }, []);

  const headings = essayBlocks
    .filter(
      (block): block is { type: 'heading' | 'subheading'; id: string; text: string } =>
        block.type === 'heading' || block.type === 'subheading'
    )
    .map(block => ({
      id: block.id,
      text: block.text,
      type: block.type,
    }));

  useEffect(() => {
    const handleScroll = () => {
      if (!isUserScrolling) return;
      if (!tocVisibleDesktop) return;

      let currentId = null;
      for (const heading of headings) {
        const el = document.getElementById(heading.id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top <= 120) {
            currentId = heading.id;
            currentVisibleHeadingRef.current = el;
          } else {
            break;
          }
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings, isUserScrolling, tocVisibleDesktop]);

  const clearHash = () => {
    // const scrollY = window.scrollY;
    // const scrollX = window.scrollX;
    const params = new URLSearchParams(searchParams.toString());
    const url = `${pathname}?${params.toString()}`;
    window.history.replaceState(null, '', url);
    // Restore scroll after URL update to prevent jump
    // window.scrollTo(scrollX, scrollY);
  };

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

              useEffect(() => {
                Object.entries(contentRefs.current).forEach(([id, el]) => {
                  if (el && !collapsedSections[id]) {
                    el.style.maxHeight = `${el.scrollHeight}px`;
                  }
                });
              }, [tocVisibleDesktop]);

              useEffect(() => {
                const handleResize = () => {
                  Object.entries(contentRefs.current).forEach(([id, el]) => {
                    if (el && !collapsedSections[id]) {
                      el.style.maxHeight = `${el.scrollHeight}px`;
                    }
                  });
                };

                window.addEventListener("resize", handleResize);
                return () => window.removeEventListener("resize", handleResize);
              }, [collapsedSections]);



              return (
                <div key={i}>
                  {heading.text && (
                    <div className="px-4 max-w-3xl mx-auto">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleCollapse(heading.id)}
                      >
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold" id={heading.id}>{heading.text}</h2>
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
                    data-section-id={heading.id}
                    ref={(el) => {
                      contentRef.current = el;
                      contentRefs.current[heading.id] = el;
                    }}
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
                              className="subheading text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold"
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
                            onClick={() => {
                              clearHash();
                              setEssayIndexInUrl(slides.findIndex(slide => slide.src === block.src));
                            }}
                            {...(block.color && imgSrcReplaceStr ? { imgSrcReplaceStr } : {})}
                          />
                        );
                      }

                      if (block.type === 'footnotes') {
                        return (
                          <section key={j} id="footnotes" className="mt-10 mx-auto px-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
                            <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4">Footnotes & References</h2>
                            <ol className="list-decimal break-words">
                              {block.items.map(note => (
                                <li key={note.id} id={note.id}>
                                  <a href={`#ref-${note.id}`} className="ml-1 text-blue-500">↩</a>
                                  &nbsp;
                                  {note.content}
                                  <br />
                                  {note.link && (
                                    <Link href={note.link} className="text-blue-500 underline inline-block max-w-full">
                                      {note.link}
                                    </Link>
                                  )}
                                  {note.excerpt && <p>Excerpt: {note.excerpt}</p>}
                                </li>
                              ))}
                            </ol>
                          </section>
                        );
                      }

                      if (block.type === 'glossary') {
                        return (
                          <section key={j} id="glossary" className="mt-10 mx-auto px-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
                            <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4">Glossary</h2>
                            <dl className="space-y-3 max-w-2xl">
                              {block.items.map((entry, i) => (
                                <div key={i}>
                                  <dt className="font-semibold">{entry.term}</dt>
                                  <dd className="ml-4">{entry.definition}</dd>
                                </div>
                              ))}
                            </dl>
                          </section>
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
        <div className="w-full max-w-10xl relative">
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

      <div className="flex lg:justify-start justify-center gap-4 px-4 max-w-10xl mx-auto">
        {hasTableOfContents && (
          <div className={`hidden lg:flex flex-col self-start sticky top-24 left-0 z-30 ${tocVisibleDesktop ? 'w-48' : 'w-8'}`}>
            <button
              onClick={() => {
                setTocVisibleDesktop(prev => !prev);
                // Adjust scroll position to account for sticky headers or padding
                // window.scrollBy({ top: 80, behavior: 'smooth' });
              }}
              className="cursor-pointer text-xs hover:text-gray-400 border border-gray-600 px-2 py-1 rounded mb-2"
            >
              {tocVisibleDesktop ? 'Hide' : '☰'}
            </button>

            <div
              className={`transition-opacity duration-300 ${tocVisibleDesktop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <div className="max-h-[80vh] pb-20 overflow-y-auto pr-2">
                <TableOfContents headings={headings} activeId={activeId} />
              </div>
            </div>
          </div>
        )}
        <main className={`flex-1 justify-center min-w-0`}>
          {renderEssayContent()}
        </main>
      </div>

      {!isLgUp && hasTableOfContents && (
        <MobileTOC headings={headings} onJumpTo={handleJumpTo} />
      )}

      <Lightbox
        open={lightboxIndex !== null}
        close={() => setEssayIndexInUrl(null)}
        slides={slides}
        index={lightboxIndex ?? 0}
        on={{
          view: ({ index: currentIndex }) => setEssayIndexInUrl(currentIndex, true),
        }}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 2 }}
        render={render}
      />
    </>
  );
}