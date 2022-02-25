const express = require('express');
const nameLength = require('../middlewares/validateName');
const productsControler = require('../controllers/productsController');

const productsRouter = express.Router();

productsRouter.post('/', nameLength, productsControler.createProduct);

productsRouter.put('/:id', nameLength, productsControler.updateProductById);

productsRouter.delete('/:id', productsControler.deleteProductById);

productsRouter.get('/:id', productsControler.getById);

module.exports = productsRouter;
