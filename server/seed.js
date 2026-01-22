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

  // Adult Toys
  {
    name: "Silicone Pleasure Wand",
    price: 8500,
    category: "Adult Toys",
    badge: "Premium",
    image: "/image.png",
    desc: "High-quality silicone wand with multiple vibration settings. Waterproof and rechargeable.",
    stock: 15
  },
  {
    name: "Luxury Rabbit Vibrator",
    price: 7200,
    category: "Adult Toys",
    badge: "Best Seller",
    image: "/image%20copy.png",
    desc: "Dual stimulation rabbit vibrator with clitoral and G-spot stimulation. 10 vibration patterns.",
    stock: 12
  },
  {
    name: "Prostate Massager",
    price: 6500,
    category: "Adult Toys",
    badge: "Popular",
    image: "/image%20copy%202.png",
    desc: "Curved prostate massager with remote control. Perfect for solo or partnered play.",
    stock: 8
  },
  {
    name: "Couples Vibrator Ring",
    price: 4200,
    category: "Adult Toys",
    badge: "New Arrival",
    image: "/image%20copy%203.png",
    desc: "Adjustable cock ring vibrator that stimulates both partners. USB rechargeable.",
    stock: 20
  },
  {
    name: "Anal Beads Set",
    price: 3800,
    category: "Adult Toys",
    badge: "Value",
    image: "/image%20copy%204.png",
    desc: "Graduated silicone anal beads for progressive stimulation. Easy retrieval ring.",
    stock: 18
  },
  {
    name: "Nipple Clamps with Chain",
    price: 2500,
    category: "Adult Toys",
    badge: "Essential",
    image: "/image%20copy%205.png",
    desc: "Adjustable nipple clamps connected by chain. Perfect for sensation play.",
    stock: 25
  },
  {
    name: "Blindfold and Restraints Set",
    price: 3200,
    category: "Adult Toys",
    badge: "Bundle",
    image: "/image%20copy%206.png",
    desc: "Complete BDSM starter set with blindfold, wrist cuffs, and ankle cuffs.",
    stock: 10
  },
  {
    name: "Glass Dildo Set",
    price: 5800,
    category: "Adult Toys",
    badge: "Luxury",
    image: "/image%20copy%207.png",
    desc: "Handcrafted borosilicate glass dildos in various sizes. Hypoallergenic and body-safe.",
    stock: 6
  },
  {
    name: "Lubricant Variety Pack",
    price: 1800,
    category: "Adult Toys",
    badge: "Essential",
    image: "/image%20copy%208.png",
    desc: "Set of 3 premium lubricants: water-based, silicone-based, and warming gel.",
    stock: 30
  },
  {
    name: "Remote Control Egg",
    price: 4500,
    category: "Adult Toys",
    badge: "Fun",
    image: "/image%20copy%209.png",
    desc: "Wireless remote controlled vibrating egg. Long range control up to 10 meters.",
    stock: 14
  },
  {
    name: "Suction Cup Dildo",
    price: 5200,
    category: "Adult Toys",
    badge: "Versatile",
    image: "/image%20copy%2010.png",
    desc: "Realistic suction cup dildo. Sticks to any smooth surface for hands-free play.",
    stock: 11
  },
  {
    name: "Temperature Play Set",
    price: 3900,
    category: "Adult Toys",
    badge: "Adventure",
    image: "/image%20copy%2011.png",
    desc: "Ice and wax play set with stainless steel instruments. Safe temperature play guide included.",
    stock: 9
  },
  {
    name: "Luxury Lingerie Set",
    price: 6800,
    category: "Adult Toys",
    badge: "Sexy",
    image: "/image%20copy%2012.png",
    desc: "Complete lingerie set with bra, panties, garter belt, and stockings. Lace and satin.",
    stock: 7
  },
  {
    name: "Bondage Rope Kit",
    price: 2900,
    category: "Adult Toys",
    badge: "Beginner",
    image: "/image%20copy%2013.png",
    desc: "Soft bondage rope with step-by-step tying guide. Perfect for beginners.",
    stock: 16
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding...");

    // This clears existing items to prevent duplicates every time you run the script
    const deleteResult = await Product.deleteMany({});
    console.log(`Deleted ${deleteResult.deletedCount} existing products`);

    // Ensure all products have required fields
    const processedProducts = products.map(product => ({
      ...product,
      image: product.image || "https://via.placeholder.com/300x300/cccccc/000000?text=Product",
      desc: product.desc || "No description available"
    }));

    const insertResult = await Product.insertMany(processedProducts);
    console.log(`Database Seeded Successfully with ${insertResult.length} Pwani Inventory items!`);

    process.exit();
  } catch (err) {
    console.error("Seeding Error:", err);
    process.exit(1);
  }
};

seedDB();