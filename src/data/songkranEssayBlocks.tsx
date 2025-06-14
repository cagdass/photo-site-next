import { getImageUrl } from '@/utils/cdn';

const songkranEssayBlocks = {
  options: {
    imgSrcReplaceStr: '/songkran/',
  },
  blocks: [
    {
      type: 'text',
      content: 'I spent a day with a water-proof camera to photograph Songkran.',
    },
    {
      type: 'image',
      src: getImageUrl('songkran/songkran-02.jpg'),
      caption: 'Songkran',
    },
    {
      type: 'image',
      src: getImageUrl('songkran/songkran-03.jpg'),
    },
    {
      type: 'image',
      src: getImageUrl('songkran/songkran-04.jpg'),
    },
    {
      type: 'image',
      src: getImageUrl('songkran/songkran-05.jpg'),
    },
    {
      type: 'image',
      src: getImageUrl('songkran/songkran-06.jpg'),
    },
    {
      type: 'image',
      src: getImageUrl('songkran/songkran-07.jpg'),
    },
    {
      type: 'image',
      src: getImageUrl('songkran/songkran-08.jpg'),
    },
    {
      type: 'image',
      src: getImageUrl('songkran/songkran-09.jpg'),
    },
    {
      type: 'image',
      src: getImageUrl('songkran/songkran-10.jpg'),
    },
  ],
};

export default songkranEssayBlocks;