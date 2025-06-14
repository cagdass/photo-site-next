'use client';

import { useEffect } from 'react';
import { usePageTitle } from '@/context/PageTitleContext';
import PhotoEssay from '@/components/PhotoEssay';
import { getImageUrl } from '@/utils/cdn';
// import your essay content, etc.

export default function SamosPageClient() {
  const [, setPageTitle] = usePageTitle();

  useEffect(() => {
    setPageTitle('Samos');
    return () => setPageTitle('');
  }, [setPageTitle]);

  return (
    <PhotoEssay
      title="Samos"
      subtitle="My biking home to Turkey from Sweden trip had one final twist"
      cover={{
        src: getImageUrl('samos/samos-01.jpg'),
        caption: 'Refugees enjoying a game of backgammon and a breather from the camp.',
      }}
      published={false}
      essayBlocksContent={{ blocks: [] }}
      photoBlocks={[]}
      shareUrl="https://cagdas.photos/brief/samos"
      shareTitle="Samos — Brief"
    />
  );
}

