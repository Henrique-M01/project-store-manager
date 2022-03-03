const { expect } = require('chai');
const Sinon = require('sinon');
const connection = require('../../../models/Connection');
const productsModel = require('../../../models/productsModel');

describe('Atualiza um produto no banco', () => {
  const ID = 1;
  const NAME = 'Martelo de Thor';
  const QUANTITY = 30;
  const CHANGED_ROWS = 1;

  beforeEach(() => {
    Sinon.stub(connection, 'execute').resolves([
      {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 0,
        info: 'Rows matched: 1  Changed: 1  Warnings: 0',
        serverStatus: 2,
        warningStatus: 0,
        changedRows: CHANGED_ROWS,
      }
    ])
  });

  afterEach(() => {
    connection.execute.restore();
  });

  it('Retorna o número de colunas afetadas pela mudança', async () => {
    const result = await productsModel.updateProduct(ID, NAME, QUANTITY);

    expect(result).to.be.equal(CHANGED_ROWS);
  })
})
