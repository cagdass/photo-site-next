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
  essayBlocks: any[];
  photoBlocks: any[];
  shareUrl?: string;
  shareTitle?: string;
  collapsible?: boolean;
  showPhotoEssayToggle?: boolean;
  photoOnly?: boolean;
}

export default function PhotoEssay({
  title,
  subtitle,
  cover,
  published = false,
  publishedDate,
  updatedDate,
  essayBlocks,
  photoBlocks,
  shareUrl,
  shareTitle,
  collapsible = false,
  showPhotoEssayToggle = false,
  photoOnly = false,
}: PhotoEssayProps) {
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showEssay, setShowEssay] = useState(!showPhotoEssayToggle && !photoOnly);

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
          <h1 className="essay-title text-4xl font-bold mb-2">{title}</h1>
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
            essayBlocks={essayBlocks}
            collapsible={collapsible}
          />
        )
        : (
          <PhotoGallery photos={photoBlocks} />
        )}
    </div>
  );
}
