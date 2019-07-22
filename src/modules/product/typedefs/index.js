const types = require('./types');
const input = require('./input');

module.exports = [`
extend type Query {
  getProducts: [Product]
}

extend type Mutation {
  createProduct(input: ProductInput!): Product
}
`, types, input];