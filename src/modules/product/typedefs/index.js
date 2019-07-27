const types = require('./types.gql');
const input = require('./input.gql');

module.exports = [`
extend type Query {
  getProducts(offset: Int!, limit: Int!): [Product!]!
}

extend type Mutation {
  createProduct(input: ProductInput!): Product
}
`, types, input];
