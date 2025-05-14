'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

type ShareButtonsProps = {
  url: string;
  title: string;
};

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="share-buttons flex gap-3 mt-2">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>

      <a
        href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share by Email"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}