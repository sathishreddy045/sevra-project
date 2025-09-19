import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import User from '../models/userModel.js';
import users from '../data/users.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // Clear existing users to prevent duplicates
    await User.deleteMany();
    
    // Insert the admin user
    await User.insertMany(users);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

// This allows us to run 'node utils/seeder.js -d' to destroy data if needed
// For now, we only need the import functionality.
if (process.argv[2] === '-d') {
  // destroyData(); 
} else {
  importData();
}