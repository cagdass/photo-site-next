import PhotoEssay from '@/components/PhotoEssay';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Songkran — Brief',
  description: 'Thailand\'s wettest day.',
};

export default function SamosBriefPage() {
  return (
    <PhotoEssay
      title="Songkran"
      subtitle="Thailand's wettest day."
      cover={{
        src: '/images/songkran/songkran-01.jpg',
        caption: 'Caption',
      }}
      published={false}
      essayBlocks={[]}
      shareUrl="https://cagdas.photos/brief/songkran"
      shareTitle="Songkran — Brief"
    />
  );
}