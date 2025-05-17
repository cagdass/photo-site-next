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
      subtitle="My biking home to Turkey from Sweden trip had a twist"
      cover={{
        src: '/images/samos/samos-01.jpg',
        caption: 'Refugees enjoying a game of backgammon and a breather from the camp.',
      }}
      published={false}
      essayBlocks={[]}
      photoBlocks={[]}
      shareUrl="https://cagdas.photos/brief/samos"
      shareTitle="Samos — Brief"
    />
  );
}