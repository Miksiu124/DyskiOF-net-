const express = require('express');
const router = express.Router();
const { getNotifications, markAsRead, createNotification } = require('../controllers/notificationController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, getNotifications);
router.post('/read/:id', auth, markAsRead);
router.post('/create', auth, createNotification); // Admin only in real use

module.exports = router;