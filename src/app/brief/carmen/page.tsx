import { Metadata } from 'next';
import PhotoEssay from '@/components/PhotoEssay';
import carmenEssayBlocks from '@/data/carmenEssayBlocks';
import carmenPhotos from '@/data/carmenPhotos';

export const metadata: Metadata = {
  title: 'Carmen – Çağdaş',
  description: 'Scenes from Stockholm\'s trashiest, most likely, bar',
  openGraph: {
    title: 'Carmen – Çağdaş',
    description: 'Scenes from Stockholm\'s trashiest, most likely, bar',
    url: 'https://cagdas.photos/brief/carmen',
    siteName: 'Çağdaş',
    images: [
      {
        url: 'https://cagdas.photos/images/carmen/carmen-22.jpg',
        width: 1200,
        height: 630,
        alt: 'Piss on the wall',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carmen – Çağdaş',
    description: 'Scenes from Stockholm\'s trashiest, most likely, bar',
    images: ['https://cagdas.photos/images/carmen/carmen-22.jpg'],
  },
};

export default function CarmenPage() {
  return (
    <PhotoEssay
      title="Carmen"
      subtitle="A few photos from Södermalm's infamous dive bar"
      cover={{
        src: '/images/carmen/carmen-13.jpg',
        caption: 'Another fun night at the pub.',
      }}
      published={true}
      publishedDate="Published on 17 May 2025"
      updatedDate="updated on 23 May 2025"
      essayBlocksContent={carmenEssayBlocks}
      photoBlocks={carmenPhotos}
      showPhotoEssayToggle={true}
      shareUrl="https://cagdas.photos/brief/carmen"
      shareTitle="A Brief Photo Series from a Stockholm Bar"
    />
  );
}