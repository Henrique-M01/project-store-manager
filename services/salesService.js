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

async function registerSale(sales) {
  const sale = await salesModel.registerSale();
  const response = { id: sale.insertId, itemsSold: sales };
  // Lógica realizada com ajuda do Leandro Oliveira e seu código;
  sales.forEach(async ({ productId, quantity }) => {
    await salesModel.registerSaleProducts(productId, quantity, sale.insertId);
  });
  return response;
}

module.exports = {
  getAll,
  getById,
  registerSale,
};
