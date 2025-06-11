import PhotoEssay from '@/components/PhotoEssay';
import { Metadata } from 'next';
import SamosPageClient from './SamosPageClient';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Samos — Brief',
  description: 'A short photographic entry from Samos.',
};

export default function SamosBriefPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SamosPageClient />
    </Suspense>
  );
}