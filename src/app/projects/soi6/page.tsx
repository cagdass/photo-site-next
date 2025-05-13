// src/app/projects/soi6/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soi 6 — ซอยหก – Çağdaş',
  description: 'A photo essay documenting seven weeks on Soi 6, Pattaya’s infamous bar street.',
  openGraph: {
    title: 'Soi 6 — ซอยหก – Çağdaş',
    description: 'A photo essay documenting seven weeks on Soi 6, Pattaya’s infamous bar street.',
    url: 'https://cagdas.photos/projects/soi6',
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
  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">Soi 6 — ซอยหก</h1>
      <p className="text-gray-700 mb-4 italic">For seven weeks, I photographed a bar street in Pattaya, Thailand</p>
      <p className="text-sm text-gray-500">Work in progress</p>

      {/* Replace below with real essay blocks, components or markdown later */}
      <p className="mt-6">[Essay content goes here...]</p>
    </main>
  );
}