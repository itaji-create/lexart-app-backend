const express = require('express');

const router = express.Router();

const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');
router
  .get('/products', getProducts)
  .post('/products', createProduct)
  .put('/products/:id', updateProduct)
  .delete('/products/:id', deleteProduct);

module.exports = router;