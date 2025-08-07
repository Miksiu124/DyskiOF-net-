const express = require('express');
const router = express.Router();
const { grantAccess, revokeAccess, banUser, unbanUser, getLogs } = require('../controllers/adminController');
const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');

router.post('/access/grant', auth, admin, grantAccess);
router.post('/access/revoke', auth, admin, revokeAccess);
router.post('/ban', auth, admin, banUser);
router.post('/unban', auth, admin, unbanUser);
router.get('/logs', auth, admin, getLogs);

module.exports = router;
