'use client';

import dynamic from 'next/dynamic';

const Soi6PageClient = dynamic(() => import('./Soi6PageClient'), {
  ssr: false,
});

export default function Soi6Wrapper() {
  return <Soi6PageClient />;
}