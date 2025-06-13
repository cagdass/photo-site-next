'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { RowsPhotoAlbum, RenderImageProps, RenderImageContext } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

interface Photo {
  src: string;
  alt?: string;
  caption?: string;
  width: number;
  height: number;
}

export type { Photo };

interface PhotoGalleryProps {
  photos: Photo[];
}

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div style={{ width: "100%", position: "relative", aspectRatio: `${width} / ${height}` }}>
      <Image
        fill
        src={photo.src || photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [index, setIndex] = useState<number | null>(null);

  // 1. On URL change → update Lightbox index
  useEffect(() => {
    const photoIndex = parseInt(searchParams.get('photo') || '', 10);
    if (!isNaN(photoIndex) && photoIndex >= 0 && photoIndex < photos.length) {
      setIndex(photoIndex);
    } else {
      setIndex(null);
    }
  }, [searchParams, photos.length]);

  // 2. Sync router query string when lightbox index changes
  const updateUrl = (newIndex: number | null, replace = false) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newIndex === null) {
      params.delete('photo');
    } else {
      params.set('photo', newIndex.toString());
    }
    const url = `${pathname}?${params.toString()}`;
    const withHash = `${url}${window.location.hash}`;
    replace ? router.replace(withHash) : router.push(withHash);
  };

  // 3. Prepare lightbox slides
  const slides = photos.map(({ src, caption }) => ({
    src,
    title: caption || "",
  }));

  return (
    <div style={{ padding: "0 20px" }}>
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
      />
    </div>
  );
}