const {
  Error: {
    ValidationError,
  },
} = require('mongoose');
const {
  UserInputError,
  ApolloError,
} = require('apollo-server-express');

const {
  response: {
    error: transformError,
  },
} = require('../../../../src/transformations');


describe('[UNIT] [TRANSFORMATIONS] [RESPONSES] - error', () => {
  test('Should return UserInputError when mongoose validation error is occured', () => {
    const error = new ValidationError();

    expect(transformError(error)).toBeInstanceOf(UserInputError);
  });

  test('Should return ApolloError when MongoError is occured', () => {
    const error = {
      name: 'MongoError',
    };

    expect(transformError(error)).toBeInstanceOf(ApolloError);
  });

  test('Should return error.message when non-handled error is occured', () => {
    const errorMessage = 'unexpected';
    const error = new Error(errorMessage);

    expect(transformError(error)).toEqual(errorMessage);
  });
});
