'use client';

import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { RowsPhotoAlbum, RenderImageProps, RenderImageContext } from "react-photo-album";
import Lightbox, { Render } from "yet-another-react-lightbox";
import { ImageSlide, SlideImage } from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

interface Photo {
  src: string;
  alt?: string;
  caption?: string;
  width: number;
  height: number;
  /** enable Color/B&W toggle for this photo */
  color?: boolean;
}

export type { Photo };

interface PhotoGalleryProps {
  photos: Photo[];
  /**
   * Base segment in the photo URL that, when present,
   * will be replaced with `${imgSrcReplaceStr}color/` on toggle.
   * Example: "pattaya/" -> "pattaya/color/"
   */
  imgSrcReplaceStrGallery?: string;
}

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div style={{ width: "100%", position: "relative", aspectRatio: `${width} / ${height}` }}>
      <Image
        fill
        src={(photo as any).src || photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in (photo as any) ? "blur" : undefined}
      />
    </div>
  );
}

type CustomSlide = SlideImage & { color?: boolean };

export default function PhotoGallery({ photos, imgSrcReplaceStrGallery }: PhotoGalleryProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [index, setIndex] = useState<number | null>(null);
  const [showColorMap, setShowColorMap] = useState<Record<number, boolean>>({});

  // 1) URL -> Lightbox index
  useEffect(() => {
    const photoIndex = parseInt(searchParams.get('photo') || '', 10);
    if (!isNaN(photoIndex) && photoIndex >= 0 && photoIndex < photos.length) {
      setIndex(photoIndex);
    } else {
      setIndex(null);
    }
  }, [searchParams, photos.length]);

  // 2) Update URL when Lightbox index changes
  const updateUrl = (newIndex: number | null, replace = false) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newIndex === null) {
      params.delete('photo');
    } else {
      params.set('photo', newIndex.toString());
    }
    const url = `${pathname}?${params.toString()}${window.location.hash}`;
    replace ? router.replace(url, { scroll: false }) : router.push(url, { scroll: false });
  };

  // 3) Build slides (keep width/height for YARL layout)
  const slides: CustomSlide[] = useMemo(
    () =>
      photos.map(({ src, caption, width, height, color }) => ({
        src,
        description: caption || "",
        width,
        height,
        color,
      })),
    [photos]
  );

  // 4) Toggle handler for a single index
  function toggleColor(i: number) {
    setShowColorMap(prev => ({ ...prev, [i]: !prev[i] }));
  }

  // 5) Custom renderer to switch src and show toggle button
  const render: Render = {
    slide: ({ slide, offset, rect, }) => {
      const i = index ?? 0; // use outer state
      const customSlide = slide as CustomSlide;

      const useColor =
        Boolean(showColorMap[i]) && Boolean(customSlide.color) && Boolean(imgSrcReplaceStrGallery);

      const updatedSlide: CustomSlide = {
        ...customSlide,
        src:
          useColor && imgSrcReplaceStrGallery
            ? customSlide.src.replace(imgSrcReplaceStrGallery, `${imgSrcReplaceStrGallery}color/`)
            : customSlide.src,
      };

      return (
        <div
          className="relative flex items-center justify-center"
          style={{ width: rect.width, height: rect.height }}
        >
          <ImageSlide slide={updatedSlide} offset={offset} rect={rect} />
          {customSlide.color && imgSrcReplaceStrGallery && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleColor(i);
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

  return (
    <div style={{ padding: "0 40px" }}>
      <RowsPhotoAlbum
        photos={photos}
        render={{ image: renderNextImage }}
        defaultContainerWidth={1200}
        sizes={{
          size: "1168px",
          sizes: [{ viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" }],
        }}
        onClick={({ index }) => updateUrl(index)}
      />

      <Lightbox
        open={index !== null}
        close={() => updateUrl(null)}
        slides={slides}
        index={index ?? 0}
        on={{ view: ({ index: i }) => updateUrl(i, true) }}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 2 }}
        render={render}
      />
    </div>
  );
}