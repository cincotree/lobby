/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      // /presentations/foo  →  /presentations/foo/
      // (the trailing slash will serve .../index.html from /public)
      {
        source: '/presentations/:id',
        destination: '/presentations/:id/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
