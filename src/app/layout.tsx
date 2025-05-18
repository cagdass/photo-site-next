import './globals.css';
import './App.css';
import type { Metadata } from "next";
import { Suspense } from 'react';
import { EB_Garamond, Inter } from 'next/font/google';
import Providers from './providers';
import Analytics from '@/components/Analytics';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const garamond = EB_Garamond({ subsets: ['latin'], variable: '--font-garamond', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Çağdaş – Photography',
  description: 'Postcard-unfriendly photography from the places I’ve been.',
  icons: {
    icon: '/favicon.png',
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-Bx4wZTynq2d8kMQOiLHlVQ0zXo8Y/MLvH9Il3MGe3GqTKLkAwnZkZPxg3WZhzYnbKgyHXBjCJcBoA5mA4h0fHw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
                  const root = document.documentElement;
                  root.classList.add(theme);
                  root.style.setProperty('--background', theme === 'dark' ? '#0a0a0a' : '#ffffff');
                  root.style.setProperty('--foreground', theme === 'dark' ? '#ededed' : '#171717');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${garamond.variable} transition-colors`}>
        <Providers>
          <Navbar />
          <div className="h-20" /> {/* spacer to offset the fixed navbar */}
          <main className="pt-[72px] w-full min-h-screen">{children}</main>
          <Footer />
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
        </Providers>
      </body>
    </html >
  );
}