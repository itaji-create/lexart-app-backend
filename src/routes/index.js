const userRouter = require('./user.routes');
const productRouter = require('./product.routes');
const saleRouter = require('./sale.routes');

const routes = (app) => {
  app.use('/user', userRouter);
  app.use('/api', productRouter);
  app.use('/api', saleRouter);
};

module.exports = routes;
