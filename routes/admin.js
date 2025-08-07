const express = require('express');
const router = express.Router();
const { grantAccess, revokeAccess, banUser, unbanUser, getLogs } = require('../controllers/adminController');
const auth = require('../middleware/authMiddleware');

router.post('/access/grant', auth, grantAccess);
router.post('/access/revoke', auth, revokeAccess);
router.post('/ban', auth, banUser);
router.post('/unban', auth, unbanUser);
router.get('/logs', auth, getLogs);

module.exports = router;