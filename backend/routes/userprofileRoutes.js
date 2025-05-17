const express = require('express');
const router = express.Router();
const UserProfile = require('../models/UserProfile');  // updated model name

// GET /api/userprofile/:email
router.get('/:email', async (req, res) => {
  try {
    const profile = await UserProfile.findOne({ email: req.params.email });
    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ message: 'Profile not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/userprofile
router.post('/', async (req, res) => {
  const { email, name, phone, address, profilePicture } = req.body;

  try {
    const updatedProfile = await UserProfile.findOneAndUpdate(
      { email },
      { email, name, phone, address, profilePicture },
      { upsert: true, new: true }
    );
    res.json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: 'Error saving profile' });
  }
});

module.exports = router;
