const fs = require('fs');
const path = require('path');
const FTP_PATH = path.join(__dirname, '../ftp-folder');
const ASSIGNED_LOG = path.join(__dirname, '../ftp-folder/.assigned.json');

if (!fs.existsSync(ASSIGNED_LOG)) fs.writeFileSync(ASSIGNED_LOG, JSON.stringify([]));

exports.getNewFiles = async (req, res) => {
  const assigned = JSON.parse(fs.readFileSync(ASSIGNED_LOG));
  const files = fs.readdirSync(FTP_PATH).filter(f => f !== '.assigned.json' && !assigned.includes(f));
  res.json(files);
};

exports.assignFileToFolder = async (req, res) => {
  const { fileName, folderId } = req.body;
  const assigned = JSON.parse(fs.readFileSync(ASSIGNED_LOG));
  if (!assigned.includes(fileName)) assigned.push(fileName);
  fs.writeFileSync(ASSIGNED_LOG, JSON.stringify(assigned));
  res.json({ success: true, message: `Plik ${fileName} przypisany do folderu ${folderId}` });
};
