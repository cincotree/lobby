import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

export default function nextConfig(phase: string): NextConfig {
  return {
    output: 'export',
    trailingSlash: true,
    images: { unoptimized: true },
    ...(phase === PHASE_DEVELOPMENT_SERVER && {
      async rewrites() {
        return [{ source: '/prototypes/:id/', destination: '/prototypes/:id/index.html' }];
      },
    }),
  };
}
