import { Metadata } from 'next';
import Soi6Wrapper from './Soi6Wrapper';

export const metadata: Metadata = {
  title: 'Soi 6, Pattaya – A Photo Essay by Çağdaş Öztekin',
  description: 'Sex work, nightlife, and fleeting intimacy on Pattaya’s Soi 6 — a bold seven-week street photography essay by Çağdaş Öztekin.',
  openGraph: {
    title: 'Soi 6, Pattaya – A Photo Essay by Çağdaş Öztekin',
    description: 'Sex work, nightlife, and fleeting intimacy on Pattaya’s Soi 6 — a bold seven-week street photography essay by Çağdaş Öztekin.',
    url: 'https://cagdas.photos/soi6',
    siteName: 'Çağdaş',
    images: [
      {
        url: 'https://cagdas.photos/images/pattaya/soi6-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Cover photo from Soi 6 photo essay by Çağdaş Öztekin',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soi 6, Pattaya – A Photo Essay by Çağdaş Öztekin',
    description: 'Sex work, nightlife, and fleeting intimacy on Pattaya’s Soi 6 — a bold seven-week street photography essay by Çağdaş Öztekin.',
    images: ['https://cagdas.photos/images/pattaya/soi6-og.jpg'],
  },
};

export default function Soi6Page() {
  return <Soi6Wrapper />;
}