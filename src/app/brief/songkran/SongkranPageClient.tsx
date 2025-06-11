'use client';

import { useEffect } from 'react';
import { usePageTitle } from '@/context/PageTitleContext';
import PhotoEssay from '@/components/PhotoEssay';
import songkranPhotos from '@/data/songkranPhotos';
// import your essay content, etc.

export default function SongkranPageClient() {
  const [, setPageTitle] = usePageTitle();

  useEffect(() => {
    setPageTitle('Songkran');
    return () => setPageTitle('');
  }, [setPageTitle]);

  return (
    <PhotoEssay
      title="Songkran"
      subtitle="Thailand's wettest day with a waterproof camera."
      cover={{
        src: '/images/songkran/songkran-01.jpg',
        caption: 'Caption',
      }}
      published={true}
      publishedDate="Published on 16 May 2025"
      essayBlocksContent={{ blocks: [] }}
      photoBlocks={songkranPhotos}
      photoOnly={true}
      shareUrl="https://cagdas.photos/brief/songkran"
      shareTitle="Songkran — Brief"
    />
  );
}

