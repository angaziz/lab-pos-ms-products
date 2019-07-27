const {
  response: {
    error: transformError
  }
} = require('../../../../transformations');

module.exports = async (root, args, context) => {
  try {
    const createdProduct = await context.db.models.Product.create(args.input);

    return createdProduct;
  } catch (error) {
    throw transformError(error);
  }
};
