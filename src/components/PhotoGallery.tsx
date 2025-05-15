'use client';

import Image from "next/image";
import { useState } from "react";
import { RenderImageContext, RenderImageProps, RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";

interface Photo {
  src: string;
  alt?: string;
  caption?: string;
  width: number;
  height: number;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
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
  const [index, setIndex] = useState<number | null>(null);

  // Prepare slides for lightbox (react-photo-album photos to lightbox format)
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
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index !== null}
        close={() => setIndex(null)}
        slides={slides}
        index={index ?? 0}
        plugins={[Captions]}
      />
    </div>
  );
}