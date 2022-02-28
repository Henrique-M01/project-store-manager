const express = require('express');
const salesController = require('../controllers/salesControler');

const salesRouter = express.Router();

salesRouter.post('/', salesController.registerSale);

salesRouter.get('/', salesController.getAll);

salesRouter.get('/:id', salesController.getById);

module.exports = salesRouter;