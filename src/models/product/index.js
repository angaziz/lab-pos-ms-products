const mongoose = require('mongoose');
const schema = require('./schema')(mongoose);

const model = mongoose.model('Product', schema);

module.exports = model;
