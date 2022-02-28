const salesService = require('../services/salesService');

async function getAll(_req, res, next) {
  try {
    const sales = await salesService.getAll();
    return res.status(200).json(sales);
  } catch (e) {
    next(e);
  }
}

async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const sale = await salesService.getById(id);
    if (!sale) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(sale);
  } catch (e) {
    next(e);
  }
}

async function registerSale(req, res, next) {
  try {
    const arrayObjects = req.body;
    const sale = await salesService.registerSale(arrayObjects);
    return res.status(201).json(sale);
  } catch (e) {
    next(e);
  }
}

async function updateSale(req, res, next) {
  try {
    const { id } = req.params;
    const [{ productId, quantity }] = req.body;
    const update = await salesService.updateSale(id, productId, quantity);
    return res.status(200).json(update);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getAll,
  getById,
  registerSale,
  updateSale,
};
