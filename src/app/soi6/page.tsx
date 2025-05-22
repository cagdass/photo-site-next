import { Metadata } from 'next';
import Soi6PageClient from './Soi6PageClient';

export const metadata: Metadata = {
  title: 'Soi 6 — ซอยหก – Çağdaş',
  description: 'A photo essay documenting seven weeks on Soi 6, Pattaya’s infamous bar street.',
  openGraph: {
    title: 'Soi 6 — ซอยหก – Çağdaş',
    description: 'A photo essay documenting seven weeks on Soi 6, Pattaya’s infamous bar street.',
    url: 'https://cagdas.photos/soi6',
    siteName: 'Çağdaş',
    images: [
      {
        url: 'https://cagdas.photos/images/pattaya/soi6-01.jpg',
        width: 1200,
        height: 630,
        alt: 'Soi 6 Pattaya cover photo',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soi 6 — ซอยหก – Çağdaş',
    description: 'A photo essay documenting seven weeks on Soi 6, Pattaya’s infamous bar street.',
    images: ['https://cagdas.photos/images/pattaya/soi6-01.jpg'],
  },
};

export default function Soi6Page() {
  return <Soi6PageClient />;
}