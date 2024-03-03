'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const salesData = [
      {
        userId: 1,
        totalAmount: 500.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        totalAmount: 800.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    const sales = await queryInterface.bulkInsert('Sales', salesData, { returning: true });

    const saleItemsData = [
      {
        saleId: sales[0].id,
        productId: 1,
        quantity: 3,
        subtotal: 150.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleId: sales[0].id,
        productId: 2,
        quantity: 2,
        subtotal: 200.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleId: sales[1].id,
        productId: 3,
        quantity: 1,
        subtotal: 800.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('SaleItems', saleItemsData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SaleItems', null, {});
    await queryInterface.bulkDelete('Sales', null, {});
  }
};