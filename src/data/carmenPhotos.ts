import type { Photo } from "react-photo-album";
import { getImageUrl } from '@/utils/cdn';

const carmenPhotos: Photo[] = [
  { src: getImageUrl('carmen/carmen-13.jpg'), width: 1200, height: 800, alt: "Bar scene with flash and drinks in the air" },
  { src: getImageUrl('carmen/carmen-05.jpg'), width: 800, height: 1200, alt: "Man in patterned shirt and blazer" },
  { src: getImageUrl('carmen/carmen-08.jpg'), width: 800, height: 1200, alt: "Woman smiling with eyes closed as someone kisses her cheek" },
  { src: getImageUrl('carmen/carmen-09.jpg'), width: 800, height: 1200, alt: "Young woman outside Carmen, on the phone" },
  { src: getImageUrl('carmen/carmen-10.jpg'), width: 1200, height: 800, alt: "Two men turning around in graffiti-covered bar bathroom" },
  { src: getImageUrl('carmen/carmen-11.jpg'), width: 1200, height: 800, alt: "Feet entangled under the table" },
  { src: getImageUrl('carmen/carmen-12.jpg'), width: 1200, height: 800, alt: "Man outside Carmen, reflected in window" },
  { src: getImageUrl('carmen/carmen-16.jpg'), width: 1200, height: 800, alt: "Two women touching tongues inside Carmen" },
  { src: getImageUrl('carmen/carmen-18.jpg'), width: 1200, height: 800, alt: "Man peeking over booth divider with intense stare" },
  { src: getImageUrl('carmen/carmen-24.jpg'), width: 800, height: 1200, alt: "Woman applying lipstick to her friend" },
  { src: getImageUrl('carmen/carmen-25.jpg'), width: 800, height: 1200, alt: "Bearded man leaning on bar with beer" },
  { src: getImageUrl('carmen/carmen-14.jpg'), width: 1200, height: 800, alt: "People laughing and posing at a crowded table" },
  { src: getImageUrl('carmen/carmen-26.jpg'), width: 800, height: 1200, alt: "Older woman in puffer jacket drinking beer" },
  { src: getImageUrl('carmen/carmen-28.jpg'), width: 800, height: 1200, alt: "Old man outside Carmen with crutches in the rain" },
  { src: getImageUrl('carmen/carmen-30.jpg'), width: 800, height: 1200, alt: "Man hugging friend with arm raised in bar" },
  { src: getImageUrl('carmen/carmen-32.jpg'), width: 800, height: 1200, alt: "Man with glasses and shadows across face" },
  { src: getImageUrl('carmen/carmen-33.jpg'), width: 800, height: 1200, alt: "Couple smiling under a plastic umbrella" },
  { src: getImageUrl('carmen/carmen-22.jpg'), width: 1200, height: 800, alt: "Carmen Restaurang & Pub sign at night" },
];

export default carmenPhotos;