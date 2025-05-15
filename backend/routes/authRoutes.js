const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

router.post('/register-user', auth.registerUser);
router.post('/register-vendor', auth.registerVendor);
router.post('/login', auth.login);

module.exports = router;
