const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  code: String,
  name: String,
  buyPrice: Number,
  sellPrice: Number,
  discountPercent: Number,
  quantity: Number
}, {
  timestamps: true
});

const model = mongoose.model('Product', schema);

module.exports = model;
