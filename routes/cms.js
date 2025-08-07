const express = require('express');
const router = express.Router();
const { getCMS, updateCMS } = require('../controllers/cmsController');
const auth = require('../middleware/authMiddleware');

router.get('/', getCMS);
router.post('/', auth, updateCMS);

module.exports = router;