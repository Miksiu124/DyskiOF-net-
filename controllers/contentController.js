const fs = require('fs');
const path = require('path');
const FOLDER_PATH = path.join(__dirname, '../uploads');

exports.listFolders = async (req, res) => {
  const folders = fs.readdirSync(FOLDER_PATH);
  res.json(folders);
};

exports.createFolder = async (req, res) => {
  const { name } = req.body;
  const folderPath = path.join(FOLDER_PATH, name);
  if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
  res.json({ success: true });
};

exports.deleteFolder = async (req, res) => {
  const folderPath = path.join(FOLDER_PATH, req.params.id);
  if (fs.existsSync(folderPath)) fs.rmdirSync(folderPath, { recursive: true });
  res.json({ success: true });
};

exports.uploadFile = async (req, res) => {
  res.json({ message: 'Logika uploadu do wdrożenia (np. multer, Cloudflare R2)' });
};

exports.deleteFile = async (req, res) => {
  const filePath = path.join(FOLDER_PATH, req.params.filename);
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  res.json({ success: true });
};
