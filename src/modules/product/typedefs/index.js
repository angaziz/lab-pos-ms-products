const types = require('./types');

module.exports = [`
extend type Query {
  getProducts: [Product]
}
`, types];