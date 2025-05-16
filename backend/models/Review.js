const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  vendorId: { type: Number, required: true },
  userId: { type: String, required: true },
  username: { type: String },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  reply: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);
