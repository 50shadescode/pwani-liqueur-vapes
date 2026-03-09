import mongoose from 'mongoose';
import Product from '../../../models/Product.js';

export async function GET() {
  try {
    const mongoUri =
      globalThis?.process?.env?.MONGO_URI ||
      'mongodb+srv://cheruiyotevans646_db_user:Evans6042@cluster0.gvsmueo.mongodb.net/?appName=Cluster0';

    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(mongoUri);
    }

    const products = await Product.find().sort({ createdAt: -1 });

    return Response.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return Response.json(
      { message: 'Server error while fetching catalog' },
      { status: 500 }
    );
  }
}