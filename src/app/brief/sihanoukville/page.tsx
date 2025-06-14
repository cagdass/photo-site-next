import { Metadata } from 'next';
import { Suspense } from 'react';
import PhotoEssay from '@/components/PhotoEssay';
import SihanoukvillePageClient from './SihanoukvillePageClient';

export const metadata: Metadata = {
  title: 'Sihanoukville – Çağdaş',
  description: 'One day in a Cambodian city in rapid transformation.',
  openGraph: {
    title: 'Sihanoukville – Çağdaş',
    description: 'One day in a Cambodian city in rapid transformation',
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
    description: 'One day in a Cambodian city in rapid transformation',
    images: ['https://cagdas.photos/images/sihanoukville/sihanoukville-01.jpg'],
  },
};

export default function SihanoukvillePage() {
  return (
    <Suspense fallback={<div></div>}>
      <SihanoukvillePageClient />
    </Suspense>
  );
}