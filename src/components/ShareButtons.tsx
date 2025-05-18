'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

type ShareButtonsProps = {
  url: string;
  title: string;
};

const shareUrls = (url: string, title: string) => ({
  twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
  linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
});

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const urls = shareUrls(url, title);
  const commonLinkClasses = "transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded";

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback or error handling here
      alert('Failed to copy link');
    }
  };

  return (
    <div className="share-buttons flex gap-6 mt-2 text-xl">
      <a
        href={urls.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        title="Share on Twitter"
        className={`${commonLinkClasses} hover:text-[#1DA1F2] focus-visible:text-[#1DA1F2]`}
      >
        <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
      </a>

      <a
        href={urls.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        title="Share on Facebook"
        className={`${commonLinkClasses} hover:text-[#1877F2] focus-visible:text-[#1877F2]`}
      >
        <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" />
      </a>

      <a
        href={urls.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
        className={`${commonLinkClasses} hover:text-[#0077B5] focus-visible:text-[#0077B5]`}
      >
        <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
      </a>

      <a
        href={urls.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        title="Share on WhatsApp"
        className={`${commonLinkClasses} hover:text-[#25D366] focus-visible:text-[#25D366]`}
      >
        <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
      </a>

      <a
        href={urls.email}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share by Email"
        title="Share by Email"
        className={`${commonLinkClasses} hover:text-[#1A73E8] focus-visible:text-[#1A73E8]`}
      >
        <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
      </a>

      <button
        onClick={copyToClipboard}
        aria-label="Copy link"
        title="Copy link"
        className="hover:text-gray-600 transition-colors relative cursor-pointer"
      >
        {/* you can use a clipboard icon from FontAwesome or SVG */}
        <FontAwesomeIcon icon={faLink} />
        {copied && (
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 border rounded bg-black text-white text-xs px-2 py-1">
            Link copied!
          </span>
        )}
      </button>
    </div>
  );
}