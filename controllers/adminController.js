const User = require('../models/User');
const Log = require('../models/Log');

exports.grantAccess = async (req, res) => {
  const { userId, folderId, expiresAt } = req.body;
  const user = await User.findById(userId);
  user.access.push({ folderId, expiresAt });
  await user.save();
  await Log.create({ action: 'ACCESS_GRANTED', details: `${userId} -> ${folderId}` });
  res.json({ success: true });
};

exports.revokeAccess = async (req, res) => {
  const { userId, folderId } = req.body;
  const user = await User.findById(userId);
  user.access = user.access.filter(a => a.folderId !== folderId);
  await user.save();
  await Log.create({ action: 'ACCESS_REVOKED', details: `${userId} -/-> ${folderId}` });
  res.json({ success: true });
};

exports.banUser = async (req, res) => {
  const { userId } = req.body;
  await User.findByIdAndUpdate(userId, { banned: true });
  await Log.create({ action: 'USER_BANNED', details: userId });
  res.json({ success: true });
};

exports.unbanUser = async (req, res) => {
  const { userId } = req.body;
  await User.findByIdAndUpdate(userId, { banned: false });
  await Log.create({ action: 'USER_UNBANNED', details: userId });
  res.json({ success: true });
};

exports.getLogs = async (req, res) => {
  const logs = await Log.find().sort({ createdAt: -1 }).limit(100);
  res.json(logs);
};