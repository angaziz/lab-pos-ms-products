require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { buildFederatedSchema } = require('@apollo/federation');

const modules = require('../modules');
const models = require('../models');
const connectDb = require('./connect-db');

module.exports = async () => {
  try {
    await connectDb();

    const server = new ApolloServer({
      schema: buildFederatedSchema([
        {
          typeDefs: modules.typeDefs,
          resolvers: modules.resolvers
        }
      ]),
      context: () => {
        return {
          db: {
            models: models
          }
        };
      }
    });

    const app = express();
    server.applyMiddleware({ app });

    return app;
  } catch (error) {
    throw error;
  }
};
