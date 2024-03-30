
const mongoose = require('mongoose');
require("dotenv").config();
const MONGO_URI = `mongodb+srv://admin:admin@file-sharing.8jfm7sb.mongodb.net/?retryWrites=true&w=majority&appName=file-sharing`;
module.exports = () => {
  mongoose.connect(MONGO_URI)
    .then(() => {
      console.log('Connected to MongoDB database successfully');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB database:', error);
    });
};

