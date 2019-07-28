const {
  gql
} = require('apollo-server-express');
const mockingoose = require('mockingoose').default;
const {
  mongo: {
    MongoError,
  }
} = require('mongoose');
const { testClient } = require('../../../../helpers');
const { Product } = require('../../../../../src/models');

describe('[INTEGRATION] [GRAPHQL] [MUTATION] - createProduct', () => {
  const { query } = testClient();
  const CREATE_PRODUCT = gql`
    mutation ($input: ProductInput!) {
      createProduct(input: $input) {
        id
        code
        name
        buyPrice
        sellPrice
        discountPercent
        quantity
        createdAt
        updatedAt
      }
    }
  `;
  const input = {
    code: 'BOOK01',
    name: 'Agile Principles - Robert C. Martin',
    buyPrice: 30,
    sellPrice: 40,
    discountPercent: 0,
    quantity: 10,
  };

  test('Should return expected data when request is success', async () => {
    const now = new Date();
    mockingoose(Product).toReturn({
      ...input,
      createdAt: now,
      updatedAt: now,
    }, 'save');

    const res = await query({
      query: CREATE_PRODUCT,
      variables: { input },
    });

    expect(res.data.createProduct).toMatchObject(input);
  });

  test('Should return expected error when error is occured', async () => {
    mockingoose(Product).toReturn(new MongoError('some error'), 'save');

    const res = await query({
      query: CREATE_PRODUCT,
      variables: { input },
    });

    expect(res.errors[0].constructor.name).toBe('GraphQLError');
  });
});