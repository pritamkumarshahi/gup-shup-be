const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config(); // Load environment variables from .env file

// MongoDB Connection
const connectDB = async () => {
  try {
    console.log('MongoDB URI:', process.env.MONGO_URI); // Check the URI
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit process with failure
  }
};


module.exports = connectDB;