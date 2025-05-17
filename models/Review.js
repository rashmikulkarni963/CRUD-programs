const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
   productid: {
    type: Number,
    required: true,
    min: 0
  },
  ratings: {
    type: Number,
    required: true,
    min:5
  },
 description: {
    type: String,
    required: true
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Review', ReviewSchema)