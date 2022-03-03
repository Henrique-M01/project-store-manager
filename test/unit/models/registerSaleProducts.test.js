const { expect } = require('chai');
const Sinon = require('sinon');
const connection = require('../../../models/Connection');
const salesModel = require('../../../models/salesModel');

describe('Registra a venda dos produtos', () => {
  const PRODUCT_ID = 2;
  const ID = 5;
  const QUANTITY = 5;
  const informationRegisterSale = {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: '',
    serverStatus: 2,
    warningStatus: 0
  };
  
  beforeEach(() => {
    Sinon.stub(connection, 'execute').resolves([informationRegisterSale]);
  });

  afterEach(() => {
    connection.execute.restore();
  });

  it('Retorna informações da venda cadastrada', async () => {
    const result = await salesModel.registerSaleProducts(PRODUCT_ID, QUANTITY, ID);

    expect(result).to.be.equal(informationRegisterSale);
  })
})