const Sinon = require('sinon');
const { expect } = require('chai');
const productsService = require('../../../services/productsService');
const productsModel = require('../../../models/productsModel');

describe('Retorna a venda especifica do ID', () => {
  const ID = 1;
  const RESPONSE = [{ id: ID, name: 'Martelo de Thor', quantity: 10 }];

  beforeEach(() => {
    Sinon.stub(productsModel, 'getById').resolves(RESPONSE)});

  afterEach(() => productsModel.getById.restore())

  it('Retorna o produto específico', async () => {
    const result = await productsService.getById(ID);

    expect(result).to.be.equal(RESPONSE)
  })
})