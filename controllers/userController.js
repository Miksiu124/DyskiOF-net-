const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.updateCredits = async (req, res) => {
  const { amount } = req.body;
  try {
    const user = await User.findById(req.user.id);
    user.credits += amount;
    await user.save();
    res.json({ credits: user.credits });
  } catch (err) {
    res.status(500).send('Server error');
  }
};