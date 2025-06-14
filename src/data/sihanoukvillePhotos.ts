import type { Photo } from 'react-photo-album';
import { getImageUrl } from '@/utils/cdn';

const photos: Photo[] = [
  { src: getImageUrl('sihanoukville/sihanoukville-01.jpg'), width: 1200, height: 800, alt: 'Sihanoukville photo 01' },
  { src: getImageUrl('sihanoukville/sihanoukville-02.jpg'), width: 1200, height: 800, alt: 'Sihanoukville photo 02' },
  { src: getImageUrl('sihanoukville/sihanoukville-03.jpg'), width: 800, height: 1200, alt: 'Sihanoukville photo 03' },
  { src: getImageUrl('sihanoukville/sihanoukville-04.jpg'), width: 1200, height: 800, alt: 'Sihanoukville photo 04' },
  { src: getImageUrl('sihanoukville/sihanoukville-05.jpg'), width: 1200, height: 800, alt: 'Sihanoukville photo 05' },
  { src: getImageUrl('sihanoukville/sihanoukville-06.jpg'), width: 1200, height: 800, alt: 'Sihanoukville photo 06' },
  { src: getImageUrl('sihanoukville/sihanoukville-07.jpg'), width: 800, height: 1200, alt: 'Sihanoukville photo 07' },
  { src: getImageUrl('sihanoukville/sihanoukville-08.jpg'), width: 1200, height: 800, alt: 'Sihanoukville photo 08' },
  { src: getImageUrl('sihanoukville/sihanoukville-09.jpg'), width: 1200, height: 800, alt: 'Sihanoukville photo 09' },
  { src: getImageUrl('sihanoukville/sihanoukville-10.jpg'), width: 1200, height: 800, alt: 'Sihanoukville photo 10' },
];

export default photos;