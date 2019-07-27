module.exports = async (_root, _args, context, _info) => {
  try {
    const query = context.db.models.Product.find({});
    const result = await query.exec();

    return result;
  } catch (error) {
    throw error;    
  }
};
