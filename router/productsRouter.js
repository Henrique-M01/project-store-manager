const express = require('express');
const { nameLength, nameExist } = require('../middlewares/validateName');
const productsControler = require('../controllers/productsController');
const { quantityExist, quantityValue } = require('../middlewares/validateQuantity');

const productsRouter = express.Router();

productsRouter.post('/',
  nameExist, nameLength, quantityExist, quantityValue, productsControler.createProduct);

productsRouter.get('/', productsControler.getAll);

productsRouter.put('/:id',
  nameExist, nameLength, quantityExist, quantityValue, productsControler.updateProductById);

productsRouter.delete('/:id', productsControler.deleteProductById);

productsRouter.get('/:id', productsControler.getById);

module.exports = productsRouter;
