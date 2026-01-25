import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/soi6",
        destination: "/soi6",
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.cagdas.photos',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/images/pattaya/:path*',
        destination: '/api/404',
      },
    ];
  },
}

export default nextConfig;