import PhotoEssay from '@/components/PhotoEssay';
import { Metadata } from 'next';
import songkranPhotos from '@/data/songkranPhotos'; // array of photos only

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

export default function SongkranBriefPage() {
  return (
    <PhotoEssay
      title="Songkran"
      subtitle="Thailand's wettest day with a waterproof camera."
      cover={{
        src: '/images/songkran/songkran-01.jpg',
        caption: 'Caption',
      }}
      published={true}
      publishedDate="Published on 16 May 2025"
      essayBlocksContent={{ blocks: [] }}
      photoBlocks={songkranPhotos}
      photoOnly={true}
      shareUrl="https://cagdas.photos/brief/songkran"
      shareTitle="Songkran — Brief"
    />
  );
}