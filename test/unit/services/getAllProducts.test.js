const Sinon = require('sinon');
const productsService = require('../../../services/productsService');
const productsModel = require('../../../models/productsModel');
const { expect } = require('chai');

describe('Retorna todos os produtos cadastrados', () => {
  const RESPONSE = [
    { id: 1, name: 'Martelo de Thor', quantity: 10 },
    { id: 2, name: 'Traje de encolhimento', quantity: 20 },
    { id: 3, name: 'Escudo do Capitão América', quantity: 30 }
  ];

  beforeEach(() => {
    Sinon.stub(productsModel, 'getAll').resolves(RESPONSE)});

  afterEach(() => productsModel.getAll.restore())

  it('Retorna todos os produtos cadastrados', async () => {
    const result = await productsService.getAll();

    expect(result).to.be.equal(RESPONSE)
  })
})