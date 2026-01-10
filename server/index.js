const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import the Product model
const Product = require('./models/Product');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Pwani Database Connected"))
  .catch(err => console.error("❌ Database Connection Error:", err));

// --- API ROUTES ---

// 1. GET: Fetch all products for the Catalog
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }); // Newest first
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error while fetching catalog" });
  }
});

// 2. POST: Create a new product (Used by your Client's Admin Form)
app.post('/api/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(400).json({ message: "Failed to add product. Ensure all fields are filled." });
  }
});

// 3. GET: Filter by category (Liquor, Vapes, etc.)
app.get('/api/products/category/:cat', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.cat });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error filtering products" });
  }
});

// Basic Route for health check
app.get('/', (req, res) => {
  res.send("Pwani Liqueur & Vapes API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});