const {
  response
} = require('../../../../transformations');

module.exports = async (_root, args, context, info) => {
  try {
    const query = context.db.models.Product.find().skip(args.offset).limit(args.limit);
    const result = await query.exec();

    return result;
  } catch (error) {
    throw response.error(error);    
  }
};
