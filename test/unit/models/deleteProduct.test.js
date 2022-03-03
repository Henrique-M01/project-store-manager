const { expect } = require('chai');
const Sinon = require('sinon');
const connection = require('../../../models/Connection');
const productsModel = require('../../../models/productsModel');

describe('Deleta um produto no banco', () => {
  const ID = 1;

  beforeEach(() => Sinon.stub(connection, 'execute').resolves(undefined));

  afterEach(() => connection.execute.restore());

  it('Retorna undefined', async () => {
    const result = await productsModel.deleteProduct(ID)

    expect(result).to.be.an('undefined');
  })
})