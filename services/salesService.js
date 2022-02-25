const salesModel = require('../models/salesModel');

async function getAll() {
  const sales = await salesModel.getAll();
  return sales;
}

async function getById(id) {
  const sale = await salesModel.getById(id);
  if (sale.length === 0) return false;
  return sale;
}

module.exports = {
  getAll,
  getById,
};
