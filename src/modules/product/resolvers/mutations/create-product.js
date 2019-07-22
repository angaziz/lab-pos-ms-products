module.exports = async (root, args, context) => {
  const createdProduct = await context.db.models.Product.create(args.input);

  return createdProduct;
};
