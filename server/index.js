const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Import the Product model
const Product = require('./models/Product');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Pwani Database Connected"))
  .catch(err => console.error("❌ Database Connection Error:", err));

// --- API ROUTES ---

// GET all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching catalog" });
  }
});

// CREATE product
app.post('/api/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: "Failed to add product" });
  }
});

// FILTER by category
app.get('/api/products/category/:cat', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.cat });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error filtering products" });
  }
});

// ----------------------------
// SERVE FRONTEND (PRODUCTION)
// ----------------------------
if (process.env.NODE_ENV === "production") {
  const clientPath = path.join(__dirname, "..", "client", "dist");

  app.use(express.static(clientPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(clientPath, "index.html"));
  });
} else {
  // Dev-only root check
  app.get('/', (req, res) => {
    res.send("Pwani Liqueur & Vapes API is running...");
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
