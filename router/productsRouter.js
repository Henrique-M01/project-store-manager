const express = require('express');
const nameLength = require('../middlewares/validateName');
const productsControler = require('../controllers/productsController');

const productsRouter = express.Router();

productsRouter.post('/', nameLength, productsControler.createProduct);

productsRouter.put('/:id', nameLength, productsControler.updateProductById);

module.exports = productsRouter;
