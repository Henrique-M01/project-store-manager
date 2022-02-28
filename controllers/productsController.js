const productsServices = require('../services/productsService');

async function getAll(_req, res, next) {
  try {
    const products = await productsServices.getAll();
    return res.status(200).json(products);
  } catch (e) {
    next(e);
  }
}

async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const product = await productsServices.getById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json({ id, name: product[0].name, quantity: product[0].quantity });
  } catch (e) {
    next(e);
  }
}

async function createProduct(req, res, next) {
  try {
    const { name, quantity } = req.body;
    const create = await productsServices.createProduct(name, quantity);
    if (!create) return res.status(409).json({ message: 'Product already exists' });
    return res.status(201).json({ id: create, name, quantity });
  } catch (e) {
    next(e);
  }
}

async function updateProductById(req, res, next) {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const update = await productsServices.updateProductById(Number(id), name, quantity);
    if (!update) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json({ id, name, quantity });
  } catch (e) {
    next(e);
    console.log(e);
  }
}

async function deleteProductById(req, res, next) {
  try {
    const { id } = req.params;
    const exclude = await productsServices.deleteProductById(id);
    if (!exclude) return res.status(404).json({ message: 'Product not found' });
    return res.status(204).end();
  } catch (e) {
    next(e);
  }
}

module.exports = {
  createProduct,
  updateProductById,
  deleteProductById,
  getById,
  getAll,
};
