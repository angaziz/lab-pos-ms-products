require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { buildFederatedSchema } = require('@apollo/federation');

const modules = require('../modules');
const models = require('../models');

module.exports = () => {
  try {
    const server = new ApolloServer({
      schema: buildFederatedSchema([
        {
          typeDefs: modules.typeDefs,
          resolvers: modules.resolvers,
        },
      ]),
      context: () => ({
        db: {
          models,
        },
      }),
    });

    const app = express();
    server.applyMiddleware({ app });

    return {
      app,
      server,
    };
  } catch (error) {
    throw error;
  }
};
