/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'], // Add your image domains here
  },
  // Add caching headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;