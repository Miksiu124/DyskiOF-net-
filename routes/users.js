const express = require('express');
const router = express.Router();
const { getProfile, updateCredits } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

router.get('/me', auth, getProfile);
router.post('/credits', auth, updateCredits);

module.exports = router;