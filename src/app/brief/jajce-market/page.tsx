import PhotoEssay from '@/components/PhotoEssay';
import { Metadata } from 'next';
import { Suspense } from 'react';
import JajceMarketPageClient from './JajceMarketPageClient';
import { getImageUrl } from '@/utils/cdn';

const coverImageUrl = getImageUrl('jajce-market/jajce-01.jpg');

export const metadata: Metadata = {
  title: 'Jajce Market — Brief',
  description: "Half an hour in a colorful marketplace in a small Bosnian town.",
  openGraph: {
    title: 'Jajce Market — Brief',
    description: "Half an hour in a colorful marketplace in a small Bosnian town.",
    url: 'https://cagdas.photos/brief/jajce-market',
    siteName: 'Çağdaş',
    images: [
      {
        url: getImageUrl('jajce-market/jajce-market-01.jpg'),
        width: 1200,
        height: 630,
        alt: '',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jajce Market — Brief',
    description: "Half an hour in a colorful marketplace in a small Bosnian town.",
    images: [getImageUrl('jajce-market/jajce-market-01.jpg')],
  },
};
export default function JajceMarketPage() {
  return (
    <Suspense fallback={<div></div>}>
      <JajceMarketPageClient />
    </Suspense>
  );
}