import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/soi6",
        destination: "/soi6",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;