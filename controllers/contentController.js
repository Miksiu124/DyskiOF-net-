const fs = require('fs').promises;
const path = require('path');
const FOLDER_PATH = path.join(__dirname, '../uploads');

exports.listFolders = async (req, res) => {
  try {
    const folders = await fs.readdir(FOLDER_PATH);
    res.json(folders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to list folders' });
  }
};

exports.createFolder = async (req, res) => {
  const { name } = req.body;
  const folderPath = path.join(FOLDER_PATH, name);
  try {
    await fs.mkdir(folderPath, { recursive: true });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create folder' });
  }
};

exports.deleteFolder = async (req, res) => {
  const folderPath = path.join(FOLDER_PATH, req.params.id);
  try {
    await fs.rm(folderPath, { recursive: true, force: true });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete folder' });
  }
};

exports.uploadFile = async (req, res) => {
  try {
    res.json({ message: 'Logika uploadu do wdrożenia (np. multer, Cloudflare R2)' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to upload file' });
  }
};

exports.deleteFile = async (req, res) => {
  const filePath = path.join(FOLDER_PATH, req.params.filename);
  try {
    await fs.unlink(filePath);
    res.json({ success: true });
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.json({ success: true });
    } else {
      console.error(err);
      res.status(500).json({ error: 'Failed to delete file' });
    }
  }
};
