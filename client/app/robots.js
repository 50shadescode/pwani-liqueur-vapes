export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
    sitemap: 'https://pwani-liqueur-vapes.vercel.app/sitemap.xml',
  };
}