const express = require('express');
const router = express.Router();
const { getInbox, sendMessage, grantAccessViaChat } = require('../controllers/chatController');
const auth = require('../middleware/authMiddleware');

router.get('/inbox', auth, getInbox);
router.post('/send', auth, sendMessage);
router.post('/grant-access', auth, grantAccessViaChat);

module.exports = router;