module.exports = (mongoose) => {
  const typeDefs = {
    code: {
      type: String,
      required: true,
      uppercase: true,
    },
    name: {
      type: String,
      required: true,
    },
    buyPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    sellPrice: {
      type: Number,
      required: true,
      min: 0,
      validate: {
        validator() {
          return this.sellPrice >= this.buyPrice;
        },
        message: 'Sell price must be greater than or equal to buy price',
      },
    },
    discountPercent: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
      default: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
  };

  const opts = {
    timestamps: true,
  };

  return new mongoose.Schema(typeDefs, opts);
};
