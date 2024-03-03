const { Product } = require('../database/models');

const getProducts = async () => {
  const users = await Product.findAll();
  return users;
};

module.exports = {
  getProducts,
}
