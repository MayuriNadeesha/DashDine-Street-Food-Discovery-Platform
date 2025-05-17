const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  phone: String,
  address: String,
  profilePicture: String
});

module.exports = mongoose.model('UserProfile', userProfileSchema);
