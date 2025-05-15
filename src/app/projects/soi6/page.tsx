import PhotoEssay from '@/components/PhotoEssay';
import soi6EssayBlocks from '@/data/soi6EssayBlocks';
import soi6Photos from '@/data/soi6Photos'; // array of photos only

export default function Soi6Page() {
  return (

    <PhotoEssay
      title="Soi 6 — ซอยหก"
      subtitle="For seven weeks, I photographed a bar street in Pattaya, Thailand"
      cover={{
        src: '/images/pattaya/soi6-01.jpg',
        caption: 'Start of a new working day, June 2024.',
      }}
      published={false}
      publishedDate="Work in progress"
      essayBlocks={soi6EssayBlocks}
      photoBlocks={soi6Photos}
      shareUrl="https://cagdas.photos/projects/soi6"
      shareTitle="A Photo Essay on Pattaya’s Soi 6"
      collapsible={true}
      showPhotoEssayToggle={true}
    />
  );
}