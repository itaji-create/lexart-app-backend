const { User, Product, Sale } = require('../database/models');

const getSaleById = async (id) => {
  const sale = await Sale.findByPk(id, {
    include: [
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });
  return sale;
};

module.exports = {
  getSaleById
}