const { expect } = require('chai');
const Sinon = require('sinon');
const connection = require('../../../models/Connection');
const productsModel = require('../../../models/productsModel');

describe('Cria um produto no banco', () => {
  const ID = 5;
  const NAME = 'Computador';
  const QUANTITY = 5;

  beforeEach(() => {
    Sinon.stub(connection, 'execute').resolves([{
      fieldCount: 0,
      affectedRows: 1,
      insertId: ID,
      info: '',
      serverStatus: 2,
      warningStatus: 0
    }]);
  });

  afterEach(() => {
    connection.execute.restore();
  });

  it('Retorna o ID do novo produto', async () => {
    const result = await productsModel.createProduct(NAME, QUANTITY);

    expect(result).to.be.equal(ID);
  })
})