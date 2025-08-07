const CMS = require('../models/CMS');

exports.getCMS = async (req, res) => {
  const content = await CMS.findOne();
  res.json(content);
};

exports.updateCMS = async (req, res) => {
  const updated = await CMS.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(updated);
};
