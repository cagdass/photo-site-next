'use client';

import { useEffect } from 'react';
import { usePageTitle } from '@/context/PageTitleContext';
import PhotoEssay from '@/components/PhotoEssay';
import carmenEssayBlocks from '@/data/carmenEssayBlocks';
import carmenPhotos from '@/data/carmenPhotos';
// import your essay content, etc.

export default function CarmenPageClient() {
  const [, setPageTitle] = usePageTitle();

  useEffect(() => {
    setPageTitle('Carmen');
    return () => setPageTitle('');
  }, [setPageTitle]);

  return (
    <PhotoEssay
      title="Carmen"
      subtitle="A few photos from Södermalm's infamous dive bar"
      cover={{
        src: '/images/carmen/carmen-13.jpg',
        caption: 'Another fun night at the pub.',
        slug: 'pub-man',
      }}
      published={true}
      publishedDate="Published on 17 May 2025"
      updatedDate="updated on 23 May 2025"
      essayBlocksContent={carmenEssayBlocks}
      photoBlocks={carmenPhotos}
      showPhotoEssayToggle={true}
      shareUrl="https://cagdas.photos/brief/carmen"
      shareTitle="A Brief Photo Series from a Stockholm Bar"
    />
  );
}

