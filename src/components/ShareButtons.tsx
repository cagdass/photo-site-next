'use client';

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLink, faQrcode, faXmark } from '@fortawesome/free-solid-svg-icons';
import { QRCodeCanvas } from 'qrcode.react';
import { eventBus } from '@/utils/eventBus';

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
  const urls = shareUrls(url, title);
  const commonLinkClasses =
    'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded';
  const [copied, setCopied] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      alert('Failed to copy link');
    }
  };

  useEffect(() => {
    document.body.style.overflow = qrOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [qrOpen]);

  useEffect(() => {
    if (qrOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [qrOpen]);

  return (
    <>
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
          className="hover:text-gray-600 transition-colors relative cursor-pointer group"
        >
          <FontAwesomeIcon icon={faLink} />
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 border rounded bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            <code>{copied ? 'Link copied!' : url}</code>
          </div>
        </button>

        <button
          onClick={() => {
            setQrOpen(true);
            eventBus.emit('qrModalOpened');
          }}
          aria-label="Show QR code"
          title="Show QR code"
          className="hover:text-gray-600 transition-colors cursor-pointer"
        >
          <FontAwesomeIcon icon={faQrcode} />
        </button>
      </div>

      {qrOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center min-h-screen p-4">
          <div className="bg-white text-black p-6 rounded-xl text-center shadow-xl w-[90%] max-w-xs relative">
            <button
              onClick={() => {
                setQrOpen(false);
                eventBus.emit('qrModalClosed');
              }}
              className="absolute top-2 right-2 text-sm text-gray-500 hover:text-black cursor-pointer"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <p className="mb-4 font-medium text-lg">Scan to open</p>
            <div className="flex items-center justify-center">

              <QRCodeCanvas value={url} size={192} includeMargin />
            </div>

            <p className="mt-4 text-sm break-all text-gray-800">{url}</p>
            <button
              onClick={copyToClipboard}
              className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transitio cursor-pointer"
            >
              {copied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}