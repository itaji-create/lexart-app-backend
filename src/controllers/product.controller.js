const productService = require('../services/product.services');

const getProducts = async (req, res) => {
  try {
    const getProducts = await productService.getProducts();
    return res.status(200).json(getProducts);
  } catch (error) {
    return res.status(409).json({ message: error.message })
  }
}

module.exports = {
  getProducts,
}