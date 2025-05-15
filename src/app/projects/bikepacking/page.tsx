import PhotoEssay from '@/components/PhotoEssay';
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
        src: '/images/bikepacking/bikepacking-00.jpg',
        caption: 'Swung by small Russia',
      }}
      published={false}
      essayBlocks={[]}
      shareUrl="https://cagdas.photos/projects/bikepacking"
      shareTitle="Bikepacking"
    />
  );
}