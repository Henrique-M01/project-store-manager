const { expect } = require('chai');
const Sinon = require('sinon');
const connection = require('../../../models/Connection');
const salesModel = require('../../../models/salesModel');

describe('Busca todas as vendas do banco', () => {
  describe('Quando não encontrar vendas', () => {
    beforeEach(() => {
      Sinon.stub(connection, 'execute').resolves([[]]);
    });
  
    afterEach(() => {
      connection.execute.restore();
    });

    it('Retorna um array', async () => {
      const result = await salesModel.getAll();

      expect(result).to.be.an('array');
    })

    it('O array está vazio', async () => {
      const result = await salesModel.getAll();

      expect(result).to.be.empty;
    })
  })

  describe('Quando existir produtos', () => {
    beforeEach(() => {
      Sinon.stub(connection, 'execute').resolves([[
        {
          saleId: 1,
          productId: 1,
          quantity: 5
        },
        {
          saleId: 1,
          productId: 2,
          quantity: 10
        },
        {
          saleId: 2,
          productId: 3,
          quantity: 15
        }
      ]]);
    });
  
    afterEach(() => {
      connection.execute.restore();
    });

    it('Retorna um array', async () => {
      const result = await salesModel.getAll();

      expect(result).to.be.an('array');
    })

    it('O array não está vazio', async () => {
      const result = await salesModel.getAll();

      expect(result).to.not.be.empty;
    })

    it('Todos os itens do array são do tipo "objeto"', async () => {
      const result = await salesModel.getAll();

      result.map((item) => {
        expect(item).to.be.an('object');
      })

    })

    it('Os itens possuem as propriedades "saleId", "productId" e ""', async () => {
      const result = await salesModel.getAll();

      result.map((item) => {
        expect(item).to.include.all.keys("saleId", "productId", "quantity")
      })
    })
  })
})