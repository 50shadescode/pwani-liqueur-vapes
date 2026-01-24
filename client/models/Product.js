import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  badge: {
    type: String,
    default: ""
  },
  image: {
    type: String,
    required: true
  }, // This will now store the secure Cloudinary URL
  desc: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 5
  }, // Added to support the star ratings in your Catalog
  stock: {
    type: Number,
    default: 10
  }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);