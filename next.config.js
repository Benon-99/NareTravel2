/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;