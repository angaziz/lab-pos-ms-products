const mongoose = require('mongoose');

module.exports = () => {
  return mongoose.connect('mongodb://0.0.0.0/lab-pos-ms-products', {
    useNewUrlParser: true
  });
};