import type { Photo } from '@/components/PhotoGallery';
import { getImageUrl } from '@/utils/cdn';

const photos: Photo[] = [
  { src: getImageUrl('jajce-market/jajce-market-01.jpg'), width: 1198, height: 800, color: true, alt: 'Jajce photo 01' },
  { src: getImageUrl('jajce-market/jajce-market-02.jpg'), width: 1198, height: 800, color: true, alt: 'Jajce photo 02' },
  { src: getImageUrl('jajce-market/jajce-market-03.jpg'), width: 1198, height: 800, color: true, alt: 'Jajce photo 03' },
  { src: getImageUrl('jajce-market/jajce-market-04.jpg'), width: 1198, height: 800, color: true, alt: 'Jajce photo 04' },
  { src: getImageUrl('jajce-market/jajce-market-06.jpg'), width: 1198, height: 800, color: true, alt: 'Jajce photo 06' },
  { src: getImageUrl('jajce-market/jajce-market-07.jpg'), width: 1198, height: 800, color: true, alt: 'Jajce photo 07' },
  { src: getImageUrl('jajce-market/jajce-market-08.jpg'), width: 1198, height: 800, color: true, alt: 'Jajce photo 08' },
  { src: getImageUrl('jajce-market/jajce-market-09.jpg'), width: 1198, height: 800, color: true, alt: 'Jajce photo 09' },
  { src: getImageUrl('jajce-market/jajce-market-10.jpg'), width: 1198, height: 800, color: true, alt: 'Jajce photo 10' },
  { src: getImageUrl('jajce-market/jajce-market-11.jpg'), width: 1198, height: 800, color: true, alt: 'Jajce photo 11' },
  { src: getImageUrl('jajce-market/jajce-market-12.jpg'), width: 1198, height: 800, color: true, alt: 'Jajce photo 12' },
  { src: getImageUrl('jajce-market/jajce-market-13.jpg'), width: 1198, height: 800, color: true, alt: 'Jajce photo 13' },
  { src: getImageUrl('jajce-market/jajce-market-14.jpg'), width: 1198, height: 800, color: true, alt: 'Jajce photo 14' },
];

export default photos;
