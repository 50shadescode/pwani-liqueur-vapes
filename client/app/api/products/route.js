import mongoose from 'mongoose';
import Product from '../../../models/Product.js';

export async function GET() {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb+srv://cheruiyotevans646_db_user:Evans6042@cluster0.gvsmueo.mongodb.net/?appName=Cluster0';
    console.log('MONGO_URI:', mongoUri);
    // Connect to MongoDB if not already connected
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(mongoUri);
    }

    console.log('Fetching products...');
    const products = await Product.find().sort({ createdAt: -1 });
    console.log(`Found ${products.length} products`);

    return Response.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return Response.json({ message: "Server error while fetching catalog" }, { status: 500 });
  }
}