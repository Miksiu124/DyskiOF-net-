const express = require('express');
const router = express.Router();
const { getNewFiles, assignFileToFolder } = require('../controllers/ftpController');
const auth = require('../middleware/authMiddleware');

router.get('/new', auth, getNewFiles);
router.post('/assign', auth, assignFileToFolder);

module.exports = router;