const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Vendor = require('../models/Vendor');

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already in use' });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashed });
    await user.save();
    res.json({ message: 'User registered successfully' });
    } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.registerVendor = async (req, res) => {
  const { vendorName, vendorLocation, email, password } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already in use' });

    const hashed = await bcrypt.hash(password, 10);
    const vendor = new Vendor({ vendorName, vendorLocation, email, password: hashed });
    await vendor.save();
    res.json({ message: 'Vendor registered successfully' });
    } catch (err) {
    res.status(500).json({ message: 'Server error' });
  } 
};

exports.login = async (req, res) => {
  const { email, password, role } = req.body;
  const model = role === 'vendor' ? Vendor : User;
  const user = await model.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid email' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

  const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
};
