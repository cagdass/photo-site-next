import PhotoEssay from '@/components/PhotoEssay';
import ScrollMapPhotoEssay from '@/components/ScrollMapPhotoEssay';
import { Metadata } from 'next';
import BikepackingPageClient from './BikepackingPageClient';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Bikepacking',
  description: 'A photographic entry across Eastern Europe.',
};

export default function BikepackingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BikepackingPageClient />
    </Suspense>
  );
}


