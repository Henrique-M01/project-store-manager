const { expect } = require('chai');
const Sinon = require('sinon');
const connection = require('../../../models/Connection');
const productsModel = require('../../../models/productsModel')

describe('Busca o produto por um ID específico', () => {
  const ID = 1;
  describe('Quando não encontrar um produto', () => {
    beforeEach(() => {
      Sinon.stub(connection, 'execute').resolves([[]]);
    });
  
    afterEach(() => {
      connection.execute.restore();
    });

    it('Retorna um array', async () => {
      const result = await productsModel.getById(ID);

      expect(result).to.be.an('array');
    })

    it('O array está vazio', async () => {
      const result = await productsModel.getById(ID);

      expect(result).to.be.empty;
    })
  })

  describe('Quando encontrar um produto', () => {
    beforeEach(() => {
      Sinon.stub(connection, 'execute').resolves([[
        { id: 1, name: 'Martelo de Thor', quantity: 10 },
      ]]);
    });
  
    afterEach(() => {
      connection.execute.restore();
    });

    it('Retorna um array', async () => {
      const result = await productsModel.getById(ID);

      expect(result).to.be.an('array');
    })

    it('O array não está vazio', async () => {
      const result = await productsModel.getById(ID);

      expect(result).to.not.be.empty;
    })

    it('Os itens possuem as propriedades "id", "name" e "quantity"', async () => {
      const result = await productsModel.getById(ID);

      result.map((item) => {
        expect(item).to.include.all.keys("id", "name", "quantity")
      })
    })
  })
})