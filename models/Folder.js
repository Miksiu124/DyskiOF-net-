const mongoose = require('mongoose');
const FolderSchema = new mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Folder', FolderSchema);