import { Metadata } from 'next';
import Soi6Wrapper from './Soi6Wrapper';
import { getImageUrl } from '@/utils/cdn';

export const metadata: Metadata = {
  title: 'Soi 6, Pattaya – A Photo Essay by Çağdaş Öztekin',
  description: 'For seven weeks, I photographed sex work, nightlife and fleeting intimacy on a bar street in Pattaya.',
  openGraph: {
    title: 'Soi 6, Pattaya – A Photo Essay by Çağdaş Öztekin',
    description: 'For seven weeks, I photographed sex work, nightlife and fleeting intimacy on a bar street in Pattaya.',
    url: 'https://cagdas.photos/soi6',
    siteName: 'Çağdaş',
    publishedTime: '2025-06-30',
    images: [
      {
        url: 'https://cagdas.photos/images/pattaya/soi6-01.jpg',
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
    description: 'For seven weeks, I photographed sex work, nightlife and fleeting intimacy on a bar street in Pattaya.',
    images: ['https://cagdas.photos/images/pattaya/soi6-01.jpg'],
  },
};

export default function Soi6Page() {
  return <Soi6Wrapper />;
}