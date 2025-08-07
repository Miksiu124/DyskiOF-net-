const Message = require('../models/Message');
const User = require('../models/User');

exports.getInbox = async (req, res) => {
  const messages = await Message.find({
    $or: [
      { sender: req.user.id },
      { receiver: req.user.id }
    ]
  }).sort({ createdAt: -1 });
  res.json(messages);
};

exports.sendMessage = async (req, res) => {
  const { receiverId, content } = req.body;
  const message = await Message.create({
    sender: req.user.id,
    receiver: receiverId,
    content
  });
  res.json(message);
};

exports.grantAccessViaChat = async (req, res) => {
  const { userId, folderId, expiresAt } = req.body;
  const user = await User.findById(userId);
  user.access.push({ folderId, expiresAt });
  await user.save();
  res.json({ success: true, message: 'Dostęp przydzielony przez czat.' });
};
