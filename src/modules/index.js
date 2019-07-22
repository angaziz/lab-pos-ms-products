const merge = require('lodash.merge');
const { gql } = require('apollo-server-express');
const product = require('./product');

module.exports = {
  typeDefs: gql([
    ...product.typeDefs
  ].join('')),
  resolvers: merge(
    product.resolvers
  )
};
