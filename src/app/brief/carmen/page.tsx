import { Metadata } from 'next';
import CarmenPageClient from './CarmenPageClient';
import { Suspense } from 'react';
import { getImageUrl } from '@/utils/cdn';

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
        url: getImageUrl('carmen/carmen-22.jpg'),
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
    images: [getImageUrl('carmen/carmen-22.jpg')],
  },
};

export default function CarmenPage() {
  return (
    <Suspense fallback={<div></div>}>
      <CarmenPageClient />
    </Suspense>
  );
}