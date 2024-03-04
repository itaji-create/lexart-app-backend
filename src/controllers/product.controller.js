const productServices = require('../services/product.services');

const getProducts = async (req, res) => {
  try {
    const getProducts = await productServices.getProducts();
    return res.status(200).json(getProducts);
  } catch (error) {
    return res.status(409).json({ message: error.message })
  }
}

const createProduct = async (req, res) => {
  try {
    const newProduct = await productServices.createProduct(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const body = req.body;
    const product = await productServices.updateProduct(body, req.params.id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const destroyed = await productServices.deleteProduct(id);
    return res.status(202).json(destroyed);
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
};

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct
};