const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' })

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      const DB = process.env.DB;
  
      const conn = await mongoose.connect(DB)
      console.log('Successfully connected to database', conn.connection.host)
    } catch (err) {
      console.error('Error occurred while connecting to DB', err.message)
    }
  }
  
  module.exports = connectDB