const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { buildFederatedSchema } = require('@apollo/federation');
const modules = require('./modules');
const db = require('./db');

module.exports = async () => {
  try {
    await db.connect();

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
            models: db.models
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
