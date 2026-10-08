import type { NextConfig } from 'next';

// A single static landing page: export plain HTML/CSS/JS that any static host can serve.
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

export default nextConfig;
