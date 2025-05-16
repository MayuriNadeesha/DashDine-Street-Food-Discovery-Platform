const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// GET reviews for a vendor
router.get('/:vendorId', async (req, res) => {
  const reviews = await Review.find({ vendorId: req.params.vendorId }).sort({ createdAt: -1 });
  res.json(reviews);
});

// POST a new review
router.post('/', async (req, res) => {
  const { vendorId, userId, username, rating, comment } = req.body;
  const review = new Review({ vendorId, userId, username, rating, comment });
  await review.save();
  res.status(201).json(review);
});

// PUT reply to a review
router.put('/reply/:id', async (req, res) => {
  const review = await Review.findByIdAndUpdate(req.params.id, { reply: req.body.reply }, { new: true });
  res.json(review);
});

module.exports = router;
