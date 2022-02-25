const productsModel = require('../models/productsModel');

async function createProduct(name, quantity) {
  const allProducts = await productsModel.getAll();
  const nameExist = allProducts.some((product) => product.name === name);
  if (nameExist) return false;
  const create = await productsModel.createProduct(name, quantity);
  return create;
}

async function updateProductById(id, name, quantity) {
  const product = await productsModel.getById(id);
  if (product.length === 0) return false;
  await productsModel.updateProduct(id, name, quantity);
  const edited = await productsModel.getById(id);
  return edited;
}

module.exports = {
  createProduct,
  updateProductById,
};
