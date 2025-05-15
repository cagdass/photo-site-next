import PhotoEssay from '@/components/PhotoEssay';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Samos — Brief',
  description: 'A short photographic entry from Samos.',
};

export default function SamosBriefPage() {
  return (
    <PhotoEssay
      title="Samos"
      subtitle="Brief stopover in Greece"
      cover={{
        src: '/photos/samos/cover.jpg',
        caption: 'Cover photo placeholder',
      }}
      published={false}
      essayBlocks={[]}
      photoBlocks={[]}
      shareUrl="https://cagdas.photos/brief/samos"
      shareTitle="Samos — Brief"
    />
  );
}