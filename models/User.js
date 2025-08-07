const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  discordId: String,
  banned: { type: Boolean, default: false },
  credits: { type: Number, default: 0 },
  access: [{ folderId: String, expiresAt: Date }]
});
module.exports = mongoose.model('User', UserSchema);