const Sinon = require('sinon');
const { expect } = require('chai');
const salesService = require('../../../services/salesService');
const salesModel = require('../../../models/salesModel');

describe('Retorna a venda especifica do ID', () => {
  const ID = 1;

  describe('Se o produto não existir', async () => {
    beforeEach(() => {
      Sinon.stub(salesModel, 'getById').resolves(false)});
  
    afterEach(() => salesModel.getById.restore())

    it('Retornar false', async () => {
      const result = await salesService.getById(ID);

      expect(result).to.be.equal(false)
    })
  })

  describe('Se o produto existir, retornar ele', async () => {
  const RESPONSE = [{ id: ID, name: 'Martelo de Thor', quantity: 10 }];

  beforeEach(() => {
    Sinon.stub(salesModel, 'getById').resolves(RESPONSE)});

  afterEach(() => salesModel.getById.restore())

  it('Retorna o produto específico', async () => {
    const result = await salesService.getById(ID);

    expect(result).to.be.equal(RESPONSE)
  })
  })
})