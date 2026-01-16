const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Product = require('./models/Product');

dotenv.config({ path: path.join(__dirname, '.env') });

const products = [
  // Vapes
  {
    name: "Vapengin Jupiter Blueberry Raspberry Vape, 13,000 Puffs",
    price: 4600,
    category: "Vapes",
    badge: "Popular",
    image: "https://glovo.dhmedia.io/image/pim-glovo/6943c88d83a6a980c0be9acb",
    desc: "Blueberry Raspberry flavor with 13,000 puffs.",
    stock: 10
  },
  {
    name: "Lost Mary BM15K Strawberry Ice, 3 Pack",
    price: 4450,
    category: "Vapes",
    badge: "Best Seller",
    image: "https://glovo.dhmedia.io/image/pim-glovo/6943c88d83a6a980c0be9abd",
    desc: "Strawberry Ice flavor, 15,000 puffs per unit, 3 pack.",
    stock: 15
  },
  {
    name: "Lost Mary MT35K Miami Mint Turquoise, 5x99 Puffs",
    price: 4630,
    category: "Vapes",
    badge: "Premium",
    image: "https://vapesocietysupplies.com/wp-content/uploads/2025/05/Lost-Mary-MT35K-Turbo-Disposable-_-35K-Puffs-Orange-Passion-Mango.webp",
    desc: "Miami Mint Turquoise flavor, 35,000 puffs.",
    stock: 8
  },
  {
    name: "Lost Mary MT35K Watermelon Ice, 4-Pack",
    price: 4630,
    category: "Vapes",
    badge: "Popular",
    image: "https://cdn.shopify.com/s/files/1/1784/0015/files/watermelon-ice-lost-mary-mt15000-turbo-vape.webp?v=1747265997",
    desc: "Watermelon Ice flavor, 35,000 puffs, 4 pack.",
    stock: 12
  },
  {
    name: "Vapengin Jupiter Bubblegum Mint 6500 Puffs",
    price: 3450,
    category: "Vapes",
    badge: "New Arrival",
    image: "https://res.cloudinary.com/dpk0mlcjr/image/upload/w_600,h_600,c_lfill,f_auto/v1721747900/products/watermelon-bubblegum-mint-vapengin-jupiter-6500-puffs-pod-kit",
    desc: "Bubblegum Mint flavor with 6,500 puffs.",
    stock: 20
  },
  {
    name: "Lost Mary BM15K Miami Mint Blue, 4-Pack",
    price: 4450,
    category: "Vapes",
    badge: "Best Seller",
    image: "https://cdn.vapeclub.co.uk/img/products/miami-mint-lost-vape-bm6000-refill-pack_7.jpg",
    desc: "Miami Mint Blue flavor, 15,000 puffs, 4 pack.",
    stock: 10
  },
  {
    name: "Lost Mary MT35K Watermelon Bubblegum, 5 Pack",
    price: 4630,
    category: "Vapes",
    badge: "Premium",
    image: "https://glovo.dhmedia.io/image/pim-glovo/6943c88d83a6a980c0be9ab9",
    desc: "Watermelon Bubblegum flavor, 35,000 puffs, 5 pack.",
    stock: 8
  },
  {
    name: "Lost Mary MT35K Miami Mint Turquoise",
    price: 4630,
    category: "Vapes",
    badge: "Popular",
    image: "https://vaporboss.com/cdn/shop/files/Lost-Mary-MT15000-Turbo-miami-mint_1280x.png?v=1726202423",
    desc: "Miami Mint Turquoise flavor, 35,000 puffs.",
    stock: 10
  },
  {
    name: "Lost Mary MT35K Watermelon Ice, Red",
    price: 4630,
    category: "Vapes",
    badge: "New Arrival",
    image: "https://vapesocietysupplies.com/wp-content/uploads/2025/05/Lost-Mary-MT35K-Turbo-Disposable-_-35K-Puffs-Watermelon.webp",
    desc: "Watermelon Ice Red flavor, 35,000 puffs.",
    stock: 15
  },
  {
    name: "Lost Mary MT35K Mango Peach Watermelon, 15000 Puffs",
    price: 4630,
    category: "Vapes",
    badge: "Premium",
    image: "https://glovo.dhmedia.io/image/pim-glovo/6943c88d83a6a980c0be9ad0",
    desc: "Mango Peach Watermelon flavor, 35,000 puffs.",
    stock: 12
  },
  {
    name: "Lost Mary BM15K Peach Ice, 3-Pack",
    price: 4450,
    category: "Vapes",
    badge: "Best Seller",
    image: "https://glovo.dhmedia.io/image/pim-glovo/6943c88d83a6a980c0be9ac1",
    desc: "Peach Ice flavor, 15,000 puffs, 3 pack.",
    stock: 10
  },
  {
    name: "Lost Mary MT35K Turbo Strawberry Ice, 1000mAh",
    price: 4630,
    category: "Vapes",
    badge: "Popular",
    image: "https://vapesocietysupplies.com/wp-content/uploads/2025/05/Lost-Mary-MT35K-Turbo-Disposable-_-35K-Puffs-Strawberry.webp",
    desc: "Turbo Strawberry Ice flavor, 35,000 puffs.",
    stock: 8
  },
  // Liquor
  {
    name: "Hennessy V.S Cognac",
    price: 7200,
    category: "Liquor",
    badge: "Best Seller",
    image: "https://i.postimg.cc/T1B2B7kb/Hennessy.jpg",
    desc: "Bold and fragrant with notes of toasted hazelnut and oak. Perfect for Mombasa nights.",
    stock: 15
  },
  {
    name: "Glenfiddich 12 Year Old",
    price: 8500,
    category: "Liquor",
    badge: "Premium",
    image: "https://i.postimg.cc/63jpf5nL/Glenfiddich.jpg",
    desc: "Sweet, fruity notes matured in finest American oak and European oak casks.",
    stock: 8
  },
  {
    name: "4Th Street Red 750 Ml",
    price: 1900,
    category: "Liquor",
    badge: "Popular",
    image: "https://glovo.dhmedia.io/image/global-menu-service/AI-GEN-PRODUCT-IMAGES/4Th_Street_Red_750_Ml__1930486",
    desc: "Red wine, 750ml.",
    stock: 20
  },
  {
    name: "Rooiberg Sweet White 750 Ml",
    price: 2750,
    category: "Liquor",
    badge: "Premium",
    image: "https://glovo.dhmedia.io/image/global-menu-service/AI-GEN-PRODUCT-IMAGES/Rooiberg_Sweet_White_750_Ml_2353371",
    desc: "Sweet white wine, 750ml.",
    stock: 10
  },
  {
    name: "Mohans Reserve Natural Sweet White",
    price: 1775,
    category: "Liquor",
    badge: "New Arrival",
    image: "https://glovo.dhmedia.io/image/global-menu-service/AI-GEN-PRODUCT-IMAGES/Mohans_Reserve_Natural_Sweet_White_3034815",
    desc: "Natural sweet white wine.",
    stock: 15
  },
  {
    name: "Guiness (Can)",
    price: 320,
    category: "Liquor",
    badge: "Popular",
    image: "https://glovo.dhmedia.io/image/global-menu-service/AI-GEN-PRODUCT-IMAGES/Guiness__Can__2449381",
    desc: "Guinness beer can.",
    stock: 50
  },
  {
    name: "Tonic Water 500 Ml(Schweppes)",
    price: 180,
    category: "Liquor",
    badge: "Essential",
    image: "https://glovo.dhmedia.io/image/global-menu-service/AI-GEN-PRODUCT-IMAGES/Tonic_Water_500_Ml_Schweppes__6053232",
    desc: "Schweppes tonic water, 500ml.",
    stock: 30
  },
  {
    name: "Smirnoff Vodka Red 1000Ml",
    price: 2950,
    category: "Liquor",
    badge: "Best Seller",
    image: "https://glovo.dhmedia.io/image/global-menu-service/AI-GEN-PRODUCT-IMAGES/Smirnoff_Vodka_Red_1000Ml_2384072",
    desc: "Smirnoff Red Vodka, 1000ml.",
    stock: 12
  },
  {
    name: "Gilbeys 750 Ml",
    price: 2150,
    category: "Liquor",
    badge: "Popular",
    image: "https://glovo.dhmedia.io/image/global-menu-service/AI-GEN-PRODUCT-IMAGES/Gilbeys_750_Ml_2953916",
    desc: "Gilbeys gin, 750ml.",
    stock: 18
  },
  {
    name: "Barcadi Carta Oro Gold Rum 750 Ml",
    price: 3750,
    category: "Liquor",
    badge: "Premium",
    image: "https://glovo.dhmedia.io/image/global-menu-service/AI-GEN-PRODUCT-IMAGES/Barcadi_Carta_Oro_Gold_Rum_750_Ml_1504427",
    desc: "Bacardi Carta Oro Gold Rum, 750ml.",
    stock: 10
  },
  {
    name: "Best Gin 750 Ml",
    price: 1580,
    category: "Liquor",
    badge: "Value",
    image: "https://glovo.dhmedia.io/image/global-menu-service/AI-GEN-PRODUCT-IMAGES/Best_Gin_750_Ml_1246995",
    desc: "Best Gin, 750ml.",
    stock: 25
  },
  {
    name: "Cape Town Gin Black Rhino 750 Ml",
    price: 4890,
    category: "Liquor",
    badge: "Luxury",
    image: "https://glovo.dhmedia.io/image/global-menu-service/AI-GEN-PRODUCT-IMAGES/Cape_Town_Gin_Black_Rhino_750_Ml_1667455",
    desc: "Cape Town Gin Black Rhino, 750ml.",
    stock: 5
  },
  {
    name: "All Seasons Connoisseur'S Collectica",
    price: 2350,
    category: "Liquor",
    badge: "Premium",
    image: "https://glovo.dhmedia.io/image/global-menu-service/AI-GEN-PRODUCT-IMAGES/All_Seasons_Connoisseur_S_Collectica_1494061",
    desc: "All Seasons Connoisseur's Collectica whiskey.",
    stock: 8
  },
  {
    name: "Jack Daniels 1L",
    price: 4950,
    category: "Liquor",
    badge: "Best Seller",
    image: "https://glovo.dhmedia.io/image/global-menu-service/AI-GEN-PRODUCT-IMAGES/Jack_Daniels_1L_2444821",
    desc: "Jack Daniel's whiskey, 1L.",
    stock: 10
  },
  {
    name: "Jack Daniels 700Ml",
    price: 4150,
    category: "Liquor",
    badge: "Popular",
    image: "https://glovo.dhmedia.io/image/global-menu-service/AI-GEN-PRODUCT-IMAGES/Jack_Daniels_700Ml_3129127",
    desc: "Jack Daniel's whiskey, 700ml.",
    stock: 15
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding...");

    // This clears existing items to prevent duplicates every time you run the script
    await Product.deleteMany({});

    // Ensure all products have required fields
    const processedProducts = products.map(product => ({
      ...product,
      image: product.image && product.image.startsWith('http') && !product.image.includes('placeholder') ? product.image : "https://via.placeholder.com/300x300/cccccc/000000?text=Product",
      desc: product.desc || "No description available"
    }));

    await Product.insertMany(processedProducts);
    console.log("✅ Database Seeded Successfully with Pwani Inventory!");

    process.exit();
  } catch (err) {
    console.error("❌ Seeding Error:", err);
    process.exit(1);
  }
};

seedDB();