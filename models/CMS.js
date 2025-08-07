const mongoose = require('mongoose');
const CMSSchema = new mongoose.Schema({
  faq: { type: String, default: '' },
  pricing: { type: String, default: '' },
  tos: { type: String, default: '' },
  testimonials: { type: String, default: '' }
});
module.exports = mongoose.model('CMS', CMSSchema);
