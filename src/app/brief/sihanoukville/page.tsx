import { Metadata } from 'next';
import PhotoEssay from '@/components/PhotoEssay';
import sihanoukvilleEssayBlocks from '@/data/sihanoukvilleEssayBlocks';

export const metadata: Metadata = {
  title: 'Sihanoukville – Çağdaş',
  description: 'A photo essay from Sihanoukville, Cambodia — a city in rapid transformation.',
  openGraph: {
    title: 'Sihanoukville – Çağdaş',
    description: 'A photo essay from Sihanoukville, Cambodia — a city in rapid transformation.',
    url: 'https://cagdas.photos/brief/sihanoukville',
    siteName: 'Çağdaş',
    images: [
      {
        url: 'https://cagdas.photos/images/sihanoukville/sihanoukville-01.jpg',
        width: 1200,
        height: 630,
        alt: 'Morning in Sihanoukville',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sihanoukville – Çağdaş',
    description: 'A photo essay from Sihanoukville, Cambodia — a city in rapid transformation.',
    images: ['https://cagdas.photos/images/sihanoukville/sihanoukville-01.jpg'],
  },
};

export default function SihanoukvillePage() {
  return (
    <PhotoEssay
      title="Sihanoukville"
      subtitle="One day in a Cambodian city in rapid transformation"
      cover={{
        src: '/images/sihanoukville/sihanoukville-01.jpg',
        caption: 'Morning in the city.',
      }}
      published={true}
      publishedDate="Published on 6 May 2025"
      essayBlocks={sihanoukvilleEssayBlocks}
      photoBlocks={[]}
      shareUrl="https://cagdas.photos/brief/sihanoukville"
      shareTitle="A Brief Photo Series on Sihanoukville"
    />
  );
}