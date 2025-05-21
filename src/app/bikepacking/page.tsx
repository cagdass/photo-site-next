import PhotoEssay from '@/components/PhotoEssay';
import ScrollMapPhotoEssay from '@/components/ScrollMapPhotoEssay';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bikepacking',
  description: 'A photographic entry across Eastern Europe.',
};

export default function BikepackingPage() {
  return (
    <PhotoEssay
      title="Bikepacking"
      subtitle="Heading home"
      cover={{
        src: '/images/bikepacking/bikepacking-01.jpg',
        caption: 'Swung by small Russia',
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