/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'glovo.dhmedia.io', 'res.cloudinary.com', 'cdn.shopify.com', 'cdn.vapeclub.co.uk', 'vapesocietysupplies.com', 'vaporboss.com'], // Add your image domains here
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
  // Proxy API requests to the Express server
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;