const { expect } = require('chai');
const Sinon = require('sinon');
const connection = require('../../../models/Connection');
const salesModel = require('../../../models/salesModel');

describe('Atualiza um produto no banco', () => {
  const SALE_ID = 10
  const PRODUCT_ID = 1;
  const QUANTITY = 30;
  const CHANGED_ROWS = 1;
  const informationUpdateSale = {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1  Changed: 1  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: CHANGED_ROWS
  } ;

  beforeEach(() => {
    Sinon.stub(connection, 'execute').resolves([informationUpdateSale])
  });

  afterEach(() => {
    connection.execute.restore();
  });

  it('Retorna o número de colunas afetadas pela mudança', async () => {
    const result = await salesModel.updateSale(SALE_ID, PRODUCT_ID, QUANTITY);

    expect(result).to.be.equal(informationUpdateSale);
  })
})
