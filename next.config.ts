import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(process.env.NODE_ENV === 'development' && {
    async rewrites() {
      return [{ source: '/prototypes/:id/', destination: '/prototypes/:id/index.html' }];
    },
  }),
};

export default nextConfig;
