const { expect } = require('chai');
const Sinon = require('sinon');
const connection = require('../../../models/Connection');
const productsModel = require('../../../models/productsModel');

describe('Busca todos os produtos do banco', () => {
  describe('Quando não encontrar produtos', () => {
    beforeEach(() => {
      Sinon.stub(connection, 'execute').resolves([[]]);
    });
  
    afterEach(() => {
      connection.execute.restore();
    });

    it('Retorna um array', async () => {
      const result = await productsModel.getAll();

      expect(result).to.be.an('array');
    })

    it('O array está vazio', async () => {
      const result = await productsModel.getAll();

      expect(result).to.be.empty;
    })
  })

  describe('Quando existir produtos', () => {
    beforeEach(() => {
      Sinon.stub(connection, 'execute').resolves([[
        { id: 1, name: 'Martelo de Thor', quantity: 10 },
        { id: 2, name: 'Traje de encolhimento', quantity: 20 },
        { id: 3, name: 'Escudo do Capitão América', quantity: 30 }
      ]]);
    });
  
    afterEach(() => {
      connection.execute.restore();
    });

    it('Retorna um array', async () => {
      const result = await productsModel.getAll();

      expect(result).to.be.an('array');
    })

    it('O array não está vazio', async () => {
      const result = await productsModel.getAll();

      expect(result).to.not.be.empty;
    })

    it('Todos os itens do array são do tipo "objeto"', async () => {
      const result = await productsModel.getAll();

      result.map((item) => {
        expect(item).to.be.an('object');
      })

    })

    it('Os itens possuem as propriedades "id", "name" e "quantity"', async () => {
      const result = await productsModel.getAll();

      result.map((item) => {
        expect(item).to.include.all.keys("id", "name", "quantity")
      })
    })
  })
})