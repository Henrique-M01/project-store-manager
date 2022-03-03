const { expect } = require('chai');
const Sinon = require('sinon');
const connection = require('../../../models/Connection');
const salesModel = require('../../../models/salesModel');

describe('Registra uma venda no banco', () => {
  const informationsSaleRegister = { 
    fieldCount: 0,
    affectedRows: 1,
    insertId: 5,
    info: '',
    serverStatus: 2,
    warningStatus: 0
  };

  beforeEach(() => {
    Sinon.stub(connection, 'execute').resolves([informationsSaleRegister]);
  });

  afterEach(() => {
    connection.execute.restore();
  });

  it('Retorna o registro da nova venda cadastrada', async () => {
    const result = await salesModel.registerSale();
    console.log(result);

    expect(result).to.be.equal(informationsSaleRegister);
  })
})