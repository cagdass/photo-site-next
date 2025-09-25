'use client';

import { useEffect } from 'react';
import { usePageTitle } from '@/context/PageTitleContext';
import PhotoEssay from '@/components/PhotoEssay';
import jajceMarketPhotos from '@/data/jajceMarketPhotos';
// import your essay content, etc.

export default function JajceMarketPageClient() {
  const [, setPageTitle] = usePageTitle();

  useEffect(() => {
    setPageTitle('Jajce Market');
    return () => setPageTitle('');
  }, [setPageTitle]);

  return (
    <PhotoEssay
      title="Jajce Market"
      subtitle="Half an hour in a colorful marketplace in a small Bosnian town."
      cover={{
        src: '/images/jajce-market/jajce-market-01.jpg',
        caption: 'Caption',
      }}
      published={true}
      publishedDate="Published on 25 September 2025"
      imgSrcReplaceStrGallery="jajce-market/"
      essayBlocksContent={{ blocks: [] }}
      photoBlocks={jajceMarketPhotos}
      photoOnly={true}
      shareUrl="https://cagdas.photos/brief/jajce-market"
      shareTitle="Jajce Market — Brief"
    />
  );
}

