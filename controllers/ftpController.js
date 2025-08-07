const fs = require('fs').promises;
const path = require('path');
const FTP_PATH = path.join(__dirname, '../ftp-folder');
const ASSIGNED_LOG = path.join(__dirname, '../ftp-folder/.assigned.json');

(async () => {
  try {
    await fs.access(ASSIGNED_LOG);
  } catch {
    await fs.writeFile(ASSIGNED_LOG, JSON.stringify([]));
  }
})();

exports.getNewFiles = async (req, res) => {
  try {
    const assignedData = await fs.readFile(ASSIGNED_LOG, 'utf8');
    const assigned = JSON.parse(assignedData);
    const files = (await fs.readdir(FTP_PATH)).filter(f => f !== '.assigned.json' && !assigned.includes(f));
    res.json(files);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve new files' });
  }
};

exports.assignFileToFolder = async (req, res) => {
  const { fileName, folderId } = req.body;
  try {
    const assignedData = await fs.readFile(ASSIGNED_LOG, 'utf8');
    const assigned = JSON.parse(assignedData);
    if (!assigned.includes(fileName)) assigned.push(fileName);
    await fs.writeFile(ASSIGNED_LOG, JSON.stringify(assigned));
    res.json({ success: true, message: `Plik ${fileName} przypisany do folderu ${folderId}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to assign file to folder' });
  }
};
