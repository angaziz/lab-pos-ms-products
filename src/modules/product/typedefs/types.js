module.exports = `
type Product @key(fields: "_id") {
  _id: ID!
  code: String!
  name: String!
  buyPrice: Int!
  sellPrice: Int!
  discountPercent: Int!
  quantity: Int!
}
`;
