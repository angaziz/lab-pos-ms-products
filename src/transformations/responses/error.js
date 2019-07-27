const {
  UserInputError,
  ApolloError
} = require('apollo-server-express');
const {
  Error: {
    ValidationError
  }
} = require('mongoose');

module.exports = (error) => {
  if(error instanceof ValidationError) {
    return new UserInputError(error.message, {
      invalidArgs: Object.keys(error.errors)
    });
  }

  if(error.name === 'MongoError') {
    return new ApolloError('Internal server error', 'INTERNAL_SERVER_ERROR');
  }

  return error.message;
};
