module.exports = async (_root, _args, context, _info) => {
  const query = context.db.models.Product.find({});
  try {
    const result = await query.exec();

    return result;
  } catch (error) {
    throw error;    
  }
};
