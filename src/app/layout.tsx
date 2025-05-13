import './globals.css';
import './App.css';
import type { Metadata } from "next";
import { EB_Garamond, Inter } from 'next/font/google';
import Providers from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const garamond = EB_Garamond({ subsets: ['latin'], variable: '--font-garamond', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Çağdaş – Photography',
  description: 'Postcard-unfriendly photography from the places I’ve been.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const root = document.documentElement;
                  if (theme === 'dark') {
                    root.style.setProperty('--background', '#0a0a0a');
                    root.style.setProperty('--foreground', '#ededed');
                  } else {
                    root.style.setProperty('--background', '#ffffff');
                    root.style.setProperty('--foreground', '#171717');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${garamond.variable} bg-white text-black dark:bg-black dark:text-white transition-colors`}>
        <Providers>
          <Navbar />
          <div className="h-20" /> {/* spacer to offset the fixed navbar */}
          <main className="pt-[72px] min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html >
  );
}