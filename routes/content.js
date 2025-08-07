const express = require('express');
const router = express.Router();
const { listFolders, createFolder, deleteFolder, uploadFile, deleteFile } = require('../controllers/contentController');
const auth = require('../middleware/authMiddleware');

router.get('/folders', auth, listFolders);
router.post('/folders', auth, createFolder);
router.delete('/folders/:id', auth, deleteFolder);
router.post('/upload', auth, uploadFile);
router.delete('/file/:filename', auth, deleteFile);

module.exports = router;