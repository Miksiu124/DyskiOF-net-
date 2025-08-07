const express = require('express');
const router = express.Router();
const { getNotifications, markAsRead, createNotification } = require('../controllers/notificationController');
const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');

router.get('/', auth, getNotifications);
router.post('/read/:id', auth, markAsRead);
// Creating notifications requires admin privileges
router.post('/create', auth, admin, createNotification);

module.exports = router;