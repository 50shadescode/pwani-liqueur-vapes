export default async function sitemap() {
  const baseUrl = 'https://pwani-liqueur-vapes.vercel.app';

  // Fetch products for dynamic URLs if needed
  let products = [];
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/products`);
    if (response.ok) {
      products = await response.json();
    }
  } catch (error) {
    console.error('Error fetching products for sitemap:', error);
  }

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/payment`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Dynamic product pages (if you have individual product pages)
  const productPages = products.map((product) => ({
    url: `${baseUrl}/product/${product._id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticPages, ...productPages];
}