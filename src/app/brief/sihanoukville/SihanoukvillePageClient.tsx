'use client';

import { useEffect } from 'react';
import { usePageTitle } from '@/context/PageTitleContext';
import PhotoEssay from '@/components/PhotoEssay';
import ScrollMapPhotoEssay from '@/components/ScrollMapPhotoEssay';
import sihanoukvilleEssayBlocks from '@/data/sihanoukvilleEssayBlocks';
import sihanoukvillePhotos from '@/data/sihanoukvillePhotos';
import { getImageUrl } from '@/utils/cdn';
// import your essay content, etc.

export default function SihanoukvillePageClient() {
  const [, setPageTitle] = usePageTitle();

  useEffect(() => {
    setPageTitle('Sihanoukville');
    return () => setPageTitle('');
  }, [setPageTitle]);

  return (
    <PhotoEssay
      title="Sihanoukville"
      subtitle="One day in a Cambodian city in rapid transformation"
      cover={{
        src: getImageUrl('sihanoukville/sihanoukville-01.jpg'),
        caption: 'Morning in the city.',
        slug: 'a-new-morning',
      }}
      published={true}
      publishedDate="Published on 6 May 2025"
      essayBlocksContent={sihanoukvilleEssayBlocks}
      photoBlocks={sihanoukvillePhotos}
      showPhotoEssayToggle={true}
      shareUrl="https://cagdas.photos/brief/sihanoukville"
      shareTitle="A Brief Photo Series on Sihanoukville"
    />
  );
}

