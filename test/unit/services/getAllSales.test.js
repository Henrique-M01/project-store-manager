const Sinon = require('sinon');
const salesService = require('../../../services/salesService');
const salesModel = require('../../../models/salesModel');
const { expect } = require('chai');

describe('Retorna todas as vendas', () => {
  const RESPONSE = [
    { saleId: 1, productId: 1, quantity: 5 },
    { saleId: 1, productId: 2, quantity: 10 },
    { saleId: 2, productId: 3, quantity: 15 },
  ];

  beforeEach(() => {
    Sinon.stub(salesModel, 'getAll').resolves(RESPONSE)});

  afterEach(() => salesModel.getAll.restore())

  it('Retorna todas as vendas cadastradas', async () => {
    const result = await salesService.getAll();

    expect(result).to.be.equal(RESPONSE)
  })
})