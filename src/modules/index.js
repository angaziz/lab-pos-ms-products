const merge = require('lodash.merge');
const { gql } = require('apollo-server-express');

const productModule = require('./product');

module.exports = {
  typeDefs: gql([
    ...productModule.typeDefs
  ].join('')),
  resolvers: merge(
    productModule.resolvers
  )
};
