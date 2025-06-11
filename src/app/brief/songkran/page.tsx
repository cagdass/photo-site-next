import PhotoEssay from '@/components/PhotoEssay';
import { Metadata } from 'next';
import { Suspense } from 'react';
import SongkranPageClient from './SongkranPageClient';

export const metadata: Metadata = {
  title: 'Songkran — Brief',
  description: "Thailand's wettest day with a waterproof camera.",
  openGraph: {
    title: 'Songkran — Brief',
    description: "Thailand's wettest day with a waterproof camera.",
    url: 'https://cagdas.photos/brief/songkran',
    siteName: 'Çağdaş',
    images: [
      {
        url: 'https://cagdas.photos/images/songkran/songkran-01.jpg',
        width: 1200,
        height: 630,
        alt: 'Songkran festival water fight in Thailand',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Songkran — Brief',
    description: "Thailand's wettest day with a waterproof camera.",
    images: ['https://cagdas.photos/images/songkran/songkran-01.jpg'],
  },
};
export default function SongkranPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SongkranPageClient />
    </Suspense>
  );
}