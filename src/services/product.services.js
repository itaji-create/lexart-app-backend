const { Product } = require('../database/models');

const getProducts = async () => {
  const products = await Product.findAll();
  return products;
};

const getProductById = async (id) => {
  const product = await Product.findByPk(id);
  return product;
};

const createProduct = async (productData) => {
  try {
    if (Array.isArray(productData)) {
      const createdProducts = [];

      for (const product of productData) {
        const { name, brand, model, data } = product;

        for (const productDetail of data) {
          const { price, color } = productDetail;

          const newProduct = await Product.create({
            name,
            brand,
            model,
            price,
            color,
          });

          createdProducts.push(newProduct.toJSON());
        }
      }

      return createdProducts;
    } else {
      let name, brand, model, color, price;

      if ('details' in productData) {
        const { details, price: productPrice } = productData;
        ({ brand, model, color } = details);
        price = productPrice;
        name = productData.name;
      } else {
        ({ name, brand, model, color, price } = productData);
      }

      const newProduct = await Product.create({
        name,
        brand,
        model,
        price,
        color,
      });

      return newProduct;
    }
  } catch (error) {
    throw new Error(error);
  }
};

const deleteProduct = async (id) => {
  const destroyed = await Product.destroy({
    where: { id }
  });
  if (!destroyed) throw new Error('Produto não encontrado');
  return destroyed;
};

const updateProduct = async (body, id) => {
  const [result] = await Product.update(
    body,
    { where: { id: Number(id) }},
  );
    return result;
};

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct
};
