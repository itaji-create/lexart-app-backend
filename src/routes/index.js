const userRouter = require('./user.routes');
const productRouter = require('./product.routes');

const routes = (app) => {
  app.use('/user', userRouter);
  app.use('/api', productRouter);
};

module.exports = routes;
