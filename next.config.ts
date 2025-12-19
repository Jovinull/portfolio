import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  compiler: {
    // Mantém console no dev, remove no build de prod
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
