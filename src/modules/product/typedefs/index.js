const types = require('./types.gql');
const input = require('./input.gql');

module.exports = [`
extend type Query {
  getProducts: PaginatedProduct
}

extend type Mutation {
  createProduct(input: ProductInput!): Product
}
`, types, input];
