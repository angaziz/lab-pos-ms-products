const merge = require('lodash.merge');
const { gql } = require('apollo-server-express');

const commonModule = require('./common');
const productModule = require('./product');

module.exports = {
  typeDefs: gql([
    ...commonModule.typeDefs,
    ...productModule.typeDefs
  ].join('')),
  resolvers: merge(
    productModule.resolvers
  )
};
