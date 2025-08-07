const express = require('express');
const router = express.Router();
const { register, login, discordOAuth } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/discord', discordOAuth);

module.exports = router;