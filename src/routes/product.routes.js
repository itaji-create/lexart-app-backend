const express = require('express');

const router = express.Router();

const { getProducts, createProduct, updateProduct, deleteProduct, getProductById, getProductByName } = require('../controllers/product.controller');
const tokenAuthenticador = require('../middlewares/authorization');
router
  .get('/products', tokenAuthenticador, getProducts)
  .get('/products/:id', tokenAuthenticador, getProductById)
  .get('/products/search/:name', tokenAuthenticador, getProductByName)
  .post('/products', tokenAuthenticador, createProduct)
  .put('/products/:id', tokenAuthenticador, updateProduct)
  .delete('/products/:id', tokenAuthenticador, deleteProduct);

module.exports = router;