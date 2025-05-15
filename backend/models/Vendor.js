const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  vendorName: String,
  vendorLocation: String,
  email: { type: String, unique: true },
  password: String
});

module.exports = mongoose.model('Vendor', VendorSchema);