'use client';

import { useEffect } from 'react';
import { usePageTitle } from '@/context/PageTitleContext';
import PhotoEssay from '@/components/PhotoEssay';
import soi6EssayBlocks from '@/data/soi6EssayBlocks';
import soi6Photos from '@/data/soi6Photos'; // array of photos only
// import your essay content, etc.

export default function Soi6PageClient() {
  const [, setPageTitle] = usePageTitle();

  useEffect(() => {
    setPageTitle('Soi 6 — ซอยหก');
    return () => setPageTitle('');
  }, [setPageTitle]);

  return (
    <PhotoEssay
      title="Soi 6 — ซอยหก"
      subtitle="For seven weeks, I photographed a bar street in Pattaya, Thailand"
      cover={{
        src: '/images/pattaya/soi6-01.jpg',
        caption: 'Start of a new working day, June 2024.',
      }}
      published={false}
      publishedDate="Work in progress"
      essayBlocksContent={soi6EssayBlocks}
      photoBlocks={soi6Photos}
      shareUrl="https://cagdas.photos/soi6"
      shareTitle="A Photo Essay on Pattaya’s Soi 6"
      collapsible={true}
      showPhotoEssayToggle={true}
      hasTableOfContents={true}
    />
  );
}

