const productsServices = require('../services/productsService');

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
    console.log(update);
    if (!update) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json({ id, name, quantity });
  } catch (e) {
    next(e);
    console.log(e);
  }
}

module.exports = {
  createProduct,
  updateProductById,
};
