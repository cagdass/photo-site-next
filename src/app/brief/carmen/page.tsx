import { Metadata } from 'next';
import PhotoEssay from '@/components/PhotoEssay';
import carmenEssayBlocks from '@/data/carmenEssayBlocks';
import carmenPhotos from '@/data/carmenPhotos';

export const metadata: Metadata = {
  title: 'Carmen – Çağdaş',
  description: 'Few photos from Söder\'s infamous dive bar',
  openGraph: {
    title: 'Carmen – Çağdaş',
    description: 'Few photos from Söder\'s infamous dive bar',
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
    description: 'Few photos from Söder\'s infamous dive bar',
    images: ['https://cagdas.photos/images/carmen/carmen-22.jpg'],
  },
};

export default function SihanoukvillePage() {
  return (
    <PhotoEssay
      title="Carmen"
      subtitle="Few photos from Söder\'s infamous dive bar"
      cover={{
        src: '/images/carmen/carmen-14.jpg',
        caption: 'Another fun night at the pub.',
      }}
      published={true}
      publishedDate="Published on 17 May 2025"
      essayBlocks={carmenEssayBlocks}
      photoBlocks={carmenPhotos}
      showPhotoEssayToggle={true}
      shareUrl="https://cagdas.photos/brief/carmen"
      shareTitle="A Brief Photo Series from a Stockholm Bar"
    />
  );
}