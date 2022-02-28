const express = require('express');
const salesController = require('../controllers/salesControler');
const productIdExist = require('../middlewares/validateProductId');
const { quantityExistSale, quantityValueSale } = require('../middlewares/validateQuantitySale');

const salesRouter = express.Router();

salesRouter.post('/',
  productIdExist, quantityExistSale, quantityValueSale, salesController.registerSale);

salesRouter.get('/', salesController.getAll);

salesRouter.put('/:id',
  productIdExist, quantityExistSale, quantityValueSale, salesController.updateSale);

salesRouter.get('/:id', salesController.getById);

module.exports = salesRouter;