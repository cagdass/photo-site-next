'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    goatcounter: any;
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Don't track localhost
    if (window.location.hostname === 'localhost') return;

    const script = document.createElement('script');
    script.setAttribute('data-goatcounter', 'https://cagdas.goatcounter.com/count');
    script.src = 'https://gc.zgo.at/count.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.location.hostname === 'localhost') return;

    if (window.goatcounter?.count) {
      window.goatcounter.count({
        path: pathname + '?' + searchParams.toString(),
        title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return null;
}