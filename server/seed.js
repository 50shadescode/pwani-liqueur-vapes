const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
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
    name: "Blueberry Gami Vape",
    price: 2500,
    category: "Vapes",
    badge: "New Arrival",
    image: "https://i.postimg.cc/90yF5PsP/blueberry-Gami.jpg",
    desc: "Smooth blueberry candy flavor with 5000 puffs of pure satisfaction.",
    stock: 20
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding...");
    
    // This clears existing items to prevent duplicates every time you run the script
    await Product.deleteMany({}); 
    
    await Product.insertMany(products);
    console.log("✅ Database Seeded Successfully with Pwani Inventory!");
    
    process.exit();
  } catch (err) {
    console.error("❌ Seeding Error:", err);
    process.exit(1);
  }
};

seedDB();