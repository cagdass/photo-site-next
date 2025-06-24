'use client';

import { useEffect } from 'react';
import { usePageTitle } from '@/context/PageTitleContext';
import PhotoEssay from '@/components/PhotoEssay';
import ScrollMapPhotoEssay from '@/components/ScrollMapPhotoEssay';
import bikepackingEssayBlocks from '@/data/bikepackingEssayBlocks';
import { getImageUrl } from '@/utils/cdn';

export default function BikepackingPageClient() {
  const [, setPageTitle] = usePageTitle();

  useEffect(() => {
    setPageTitle('Bikepacking');
    return () => setPageTitle('');
  }, [setPageTitle]);

  return (
    <PhotoEssay
      title="Bikepacking"
      subtitle="Heading home"
      cover={{
        src: getImageUrl('bikepacking/bikepacking-01.jpg'),
        caption: 'Swung by small Russia',
        slug: 'Albanian-climb',
      }}
      published={false}
      essayBlocksContent={{ blocks: [] }}
      photoBlocks={[]}
      prelude={<ScrollMapPhotoEssay />}
      shareUrl="https://cagdas.photos/bikepacking"
      shareTitle="Bikepacking"
    />
  );
}

