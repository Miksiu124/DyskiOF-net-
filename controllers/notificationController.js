const Notification = require('../models/Notification');

exports.getNotifications = async (req, res) => {
  const notes = await Notification.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(notes);
};

exports.markAsRead = async (req, res) => {
  await Notification.findByIdAndUpdate(req.params.id, { read: true });
  res.json({ success: true });
};

// Only admins can create notifications; enforced via adminMiddleware on the route
exports.createNotification = async (req, res) => {
  const { userId, type, message } = req.body;
  await Notification.create({ userId, type, message });
  res.json({ success: true });
};
