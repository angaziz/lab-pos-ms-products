const getProducts = require('./queries/get-products');
const createProduct = require('./mutations/create-product');

module.exports = {
  Query: {
    getProducts,
  },
  Mutation: {
    createProduct
  }
};
