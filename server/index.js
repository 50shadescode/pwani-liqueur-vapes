const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Import the Product model
const Product = require('./models/Product');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Pwani Database Connected"))
  .catch(err => console.error("❌ Database Connection Error:", err));

// --- API ROUTES ---

// GET all products
app.get('/api/products', async (req, res) => {
  try {
    console.log('Fetching products...');
    const products = await Product.find().sort({ createdAt: -1 });
    console.log(`Found ${products.length} products`);
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
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

// M-PESA INTEGRATION
// Get access token
const getMpesaAccessToken = async () => {
  const auth = Buffer.from(`${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`).toString('base64');
  try {
    const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      headers: {
        'Authorization': `Basic ${auth}`
      }
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting M-Pesa access token:', error);
    throw error;
  }
};

// STK Push (for paybill, not till number)
app.post('/api/mpesa/stkpush', async (req, res) => {
  try {
    const { phoneNumber, amount } = req.body;
    const accessToken = await getMpesaAccessToken();

    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = Buffer.from(`${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`).toString('base64');

    const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
      BusinessShortCode: process.env.MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: process.env.MPESA_SHORTCODE,
      PhoneNumber: phoneNumber,
      CallBackURL: `https://example.com/callback`, // Dummy callback for sandbox testing
      AccountReference: 'Pwani Vapes',
      TransactionDesc: 'Payment for vape products'
    }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('STK Push error:', error);
    res.status(500).json({ error: 'Payment initiation failed' });
  }
});

// M-Pesa callback
app.post('/api/mpesa/callback', (req, res) => {
  console.log('M-Pesa Callback:', req.body);
  // Process the callback data here
  res.json({ status: 'success' });
});

// Get till number
app.get('/api/mpesa/till', (req, res) => {
  res.json({
    tillNumber: process.env.MPESA_SHORTCODE,
    storeName: 'PWANI VAPES'
  });
});

// API-only server - frontend deployed separately
app.get('/', (req, res) => {
  res.send("Pwani Vapes API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
