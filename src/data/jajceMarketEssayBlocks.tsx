import { getImageUrl } from '@/utils/cdn';

const jajceMarketEssayBlocks = {
  options: {
    imgSrcReplaceStr: '/jajce/',
  },
  blocks: [
    {
      type: 'image',
      src: getImageUrl('jajce-market/jajce-market-02.jpg'),
      caption: 'Jajce',
      color: true,
    },
    {
      type: 'image',
      src: getImageUrl('jajce-market/jajce-market-03.jpg'),
      caption: 'Jajce',
      color: true
    },
  ],
};

export default jajceMarketEssayBlocks;