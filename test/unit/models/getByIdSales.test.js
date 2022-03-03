const { expect } = require('chai');
const Sinon = require('sinon');
const connection = require('../../../models/Connection');
const salesModel = require('../../../models/salesModel')

describe('Busca uma venda por um ID específico', () => {
  const ID = 1;
  describe('Quando não encontrar uma venda', () => {
    beforeEach(() => {
      Sinon.stub(connection, 'execute').resolves([[]]);
    });
  
    afterEach(() => {
      connection.execute.restore();
    });

    it('Retorna um array', async () => {
      const result = await salesModel.getById(ID);

      expect(result).to.be.an('array');
    })

    it('O array está vazio', async () => {
      const result = await salesModel.getById(ID);

      expect(result).to.be.empty;
    })
  })

  describe('Quando encontrar um produto', () => {
    beforeEach(() => {
      Sinon.stub(connection, 'execute').resolves([[
        { productId: 1, quantity: 5, date: '2022-03-03T08:29:53.000Z' },
        { productId: 2, quantity: 10, date: '2022-03-03T08:29:53.000Z' },
      ]]);
    });
  
    afterEach(() => {
      connection.execute.restore();
    });

    it('Retorna um array', async () => {
      const result = await salesModel.getById(ID);

      expect(result).to.be.an('array');
    })

    it('O array não está vazio', async () => {
      const result = await salesModel.getById(ID);

      expect(result).to.not.be.empty;
    })

    it('Os itens possuem as propriedades "productId", "quantity" e "date"', async () => {
      const result = await salesModel.getById(ID);

      result.map((item) => {
        expect(item).to.include.all.keys("productId", "quantity", "date")
      })
    })
  })
})