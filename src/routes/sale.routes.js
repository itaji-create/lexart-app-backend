const express = require('express');

const router = express.Router();

const {
  getSaleById,
} = require('../controllers/sale.controller');


router
  .get('/sales/:id', getSaleById)
module.exports = router;
