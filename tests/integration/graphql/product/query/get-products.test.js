const { gql } = require('apollo-server-express');
const mockingoose = require('mockingoose').default;
const {
  mongo: {
    MongoError,
  },
} = require('mongoose');
const { testClient } = require('../../../../helpers');
const { Product } = require('../../../../../src/models');
const productListFixture = require('../../../../fixtures/models/products/product-list.json');

describe('[INTEGRATION] [GRAPHQL] [QUERY] - getProducts', () => {
  const { query } = testClient();
  const GET_PRODUCTS = gql`
    query ($offset: Int!, $limit: Int!) {
      getProducts(offset: $offset, limit: $limit) {
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

  test('Should return expected data when request is success', async () => {
    mockingoose(Product).toReturn(productListFixture, 'find');

    const res = await query({
      query: GET_PRODUCTS,
      variables: { offset: 0, limit: 5 },
    });

    expect(res.errors).toBeFalsy();
    expect(res.data.getProducts.length).toBe(productListFixture.length);
  });

  test('Should return expected error when error is occured', async () => {
    mockingoose(Product).toReturn(new MongoError('some error'), 'find');

    const res = await query({
      query: GET_PRODUCTS,
      variables: { offset: 0, limit: 5 },
    });

    expect(res.errors[0].constructor.name).toBe('GraphQLError');
  });
});
