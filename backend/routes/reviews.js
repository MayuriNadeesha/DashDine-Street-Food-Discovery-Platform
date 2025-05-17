const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// ✅ GET reviews for a specific vendor
router.get('/:vendorId', async (req, res) => {
  try {
    const reviews = await Review.find({ vendorId: req.params.vendorId }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching vendor reviews', error: err });
  }
});

// ✅ GET reviews submitted by a specific user
router.get('/user/:userId', async (req, res) => {
  try {
    const reviews = await Review.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user's reviews", error: err });
  }
});

// ✅ POST a new review
router.post('/', async (req, res) => {
  try {
    const { vendorId, userId, username, rating, comment } = req.body;

    if (!vendorId || !userId || !username || !rating || !comment) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const review = new Review({ vendorId, userId, username, rating, comment });
    await review.save();

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: 'Error posting review', error: err });
  }
});

// ✅ PUT: Reply to a review
router.put('/reply/:id', async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { reply: req.body.reply },
      { new: true }
    );
    res.json(review);
  } catch (err) {
    res.status(500).json({ message: 'Error replying to review', error: err });
  }
});


// GET reviews by user ID
router.get('/user/:userId', async (req, res) => {
  try {
    const reviews = await Review.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch reviews' });
  }
});

module.exports = router;
