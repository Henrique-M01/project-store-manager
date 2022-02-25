const connection = require('./Connection');

async function getAll() {
  const [response] = await connection.execute('SELECT * FROM StoreManager.products;');
  return response;
}

async function getById(id) {
  const [response] = await connection
  .execute('SELECT * FROM StoreManager.products WHERE id = ?;', [id]);
  return response;
}

async function createProduct(name, quantity) {
  const [response] = await connection
  .execute('INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?);', [name, quantity]);
  return response.insertId;
}

async function updateProduct(id, name, quantity) {
  const [response] = await connection
  .execute('UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?;',
   [name, quantity, id]);
  console.log(response);
}

module.exports = {
  getAll,
  getById,
  createProduct,
  updateProduct,
};
