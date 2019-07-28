const {
  Error: {
    ValidationError
  }
} = require('mongoose');
const { Product } = require('../../../src/models');
const validationMessages = require('../../fixtures/models/products/validation-messages.json');

describe('[UNIT] [MODELS] - Product', () => {
  test('Should be rejected with expected error when product payload is empty', () => {
    const model = new Product({});

    const validationError = model.validateSync();

    expect(validationError).toBeInstanceOf(ValidationError);
    expect(validationError.message).toBe(validationMessages.REQUIRED_FIELDS);
  });

  test('Should be rejected with expected error when buyPrice is higher than sellPrice', () => {
    const model = new Product({
      code: 'BOOK01',
      name: 'Agile Principles - Robert C. Martin',
      buyPrice: 30,
      sellPrice: 20,
      discountPercent: 0,
      quantity: 10,
    });

    const validationError = model.validateSync();

    expect(validationError).toBeInstanceOf(ValidationError);
    expect(validationError.message).toBe(validationMessages.BUY_PRICE_HIGHER_THAN_SELL_PRICE);
  });

  test('Should be rejected with expected error when discountPrice is less than zero', () => {
    const model = new Product({
      code: 'BOOK01',
      name: 'Agile Principles - Robert C. Martin',
      buyPrice: 20,
      sellPrice: 30,
      discountPercent: -1,
      quantity: 10,
    });

    const validationError = model.validateSync();

    expect(validationError).toBeInstanceOf(ValidationError);
    expect(validationError.message).toBe(validationMessages.DISCOUNT_LESS_THAN_ZERO);
  });

  test('Should be rejected with expected error when discountPrice is more than a hundred', () => {
    const model = new Product({
      code: 'BOOK01',
      name: 'Agile Principles - Robert C. Martin',
      buyPrice: 20,
      sellPrice: 30,
      discountPercent: 101,
      quantity: 10,
    });

    const validationError = model.validateSync();

    expect(validationError).toBeInstanceOf(ValidationError);
    expect(validationError.message).toBe(validationMessages.DISCOUNT_HIGHER_THAN_HUNDRED);
  });

  test('Should be rejected with expected error when quantity is less than a zero', () => {
    const model = new Product({
      code: 'BOOK01',
      name: 'Agile Principles - Robert C. Martin',
      buyPrice: 20,
      sellPrice: 30,
      discountPercent: 100,
      quantity: -1,
    });

    const validationError = model.validateSync();

    expect(validationError).toBeInstanceOf(ValidationError);
    expect(validationError.message).toBe(validationMessages.QUANTITY_LESS_THAN_ZERO);
  });
});