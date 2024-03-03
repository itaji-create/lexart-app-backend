const saleServices = require('../services/sale.services');

const getSaleById = async (req, res) => {
  try {
    const sale = await saleServices.getSaleById(req.params.id);
    return res.status(200).json(sale);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getSaleById
}