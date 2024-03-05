const express = require('express');

const router = express.Router();

const { getProducts, createProduct, updateProduct, deleteProduct, getProductById } = require('../controllers/product.controller');
const tokenAuthenticador = require('../middlewares/authorization');
router
  .get('/products', tokenAuthenticador, getProducts)
  .get('/products/:id', tokenAuthenticador, getProductById)
  .post('/products', tokenAuthenticador, createProduct)
  .put('/products/:id', tokenAuthenticador, updateProduct)
  .delete('/products/:id', tokenAuthenticador, deleteProduct);

module.exports = router;