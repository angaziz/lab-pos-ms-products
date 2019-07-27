// Schema validators are using function instead of arrow
// Why: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this

const Product = require('./product');

module.exports = {
  Product,
};
