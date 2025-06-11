// components/PhotoGalleryClientWrapper.tsx
'use client';

import PhotoGallery from './PhotoGallery';
import type { Photo } from './PhotoGallery';

export default function PhotoGalleryClientWrapper({ photos }: { photos: Photo[] }) {
  return <PhotoGallery photos={photos} />;
}