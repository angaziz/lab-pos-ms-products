const { gql } = require('apollo-server-express');
const mockingoose = require('mockingoose').default;
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

  test('Should return expected data when requested', async () => {
    mockingoose(Product).toReturn(productListFixture, 'find');

    const res = await query({
      query: GET_PRODUCTS,
      variables: { offset: 0, limit: 5 }
    });

    expect(res).toMatchSnapshot();
  });
});
