'use client';

import React, { useState, useRef, useEffect } from 'react';
import ShareButtons from '@/components/ShareButtons';
import ToggleSwitch from './ToggleSwitch';
import PhotoEssayContent from '@/components/PhotoEssayContent';
import PhotoGallery from '@/components/PhotoGallery';
import 'yet-another-react-lightbox/styles.css';

export interface PhotoEssayProps {
  title: string;
  subtitle: string;
  cover: {
    src: string;
    caption?: string;
  };
  published?: boolean;
  publishedDate?: string;
  updatedDate?: string;
  essayBlocksContent: {
    blocks: any[];
    options?: {
      imgSrcReplaceStr?: string,
    },
  },
  photoBlocks: any[];
  shareUrl?: string;
  shareTitle?: string;
  prelude?: React.ReactNode;
  collapsible?: boolean;
  showPhotoEssayToggle?: boolean;
  photoOnly?: boolean;
  hasTableOfContents?: boolean;
}

export default function PhotoEssay({
  title,
  subtitle,
  cover,
  published = false,
  publishedDate,
  updatedDate,
  essayBlocksContent = { blocks: [] },
  photoBlocks,
  shareUrl,
  shareTitle,
  prelude,
  collapsible = false,
  showPhotoEssayToggle = false,
  photoOnly = false,
  hasTableOfContents = false,
}: PhotoEssayProps) {
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showEssay, setShowEssay] = useState(!photoOnly);

  const essayBlocks = essayBlocksContent.blocks;
  const essayOptions = essayBlocksContent.options || {};
  const { imgSrcReplaceStr } = essayOptions;

  const toggleCollapse = (id: string) => {
    setCollapsedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const imageBlocks = essayBlocks.filter(b => b.type === 'image');
  const slides = [
    { src: cover.src },
    ...imageBlocks.map(b => ({ src: b.src })),
  ];

  type Group = {
    heading: { id: string; text: string };
    blocks: typeof essayBlocks;
  };

  const groups: Group[] = [];
  let currentGroup: Group | null = null;

  essayBlocks.forEach(block => {
    if (block.type === 'heading') {
      currentGroup = { heading: block, blocks: [] };
      groups.push(currentGroup);
    } else if (currentGroup) {
      currentGroup.blocks.push(block);
    }
  });

  return (
    <div className="font-garamond">
      <div className="photo-essay-header px-4">
        <center>
          <h1 id="cover-title" className="essay-title text-4xl font-bold mb-2">{title}</h1>
          <p className="text-lg italic">{subtitle}</p>
          <p className="essay-author">by Çağdaş</p>
          {published ? (
            <p className="essay-published text-sm text-gray-400">{publishedDate}</p>
          ) : (
            <p className="essay-published text-sm text-red-400">Work in progress</p>
          )}
          <div className="share-buttons mb-4 flex justify-center">
            <ShareButtons url={shareUrl!} title={shareTitle!} />
          </div>
          {!photoOnly && showPhotoEssayToggle && (
            <div className="flex justify-center mb-6">
              <ToggleSwitch
                label="Photo-essay mode"
                checked={showEssay}
                onChange={() => setShowEssay(!showEssay)}
              />
            </div>
          )}
        </center>
      </div>
      {showEssay
        ? (
          <PhotoEssayContent
            cover={cover}
            prelude={prelude}
            essayBlocks={essayBlocks}
            collapsible={collapsible}
            hasTableOfContents={hasTableOfContents}
            {...(imgSrcReplaceStr ? { imgSrcReplaceStr } : {})}
          />
        )
        : (
          <PhotoGallery photos={photoBlocks} />
        )}
    </div>
  );
}
