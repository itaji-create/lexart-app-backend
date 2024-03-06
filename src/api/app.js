const express = require('express');
const cors = require('cors');
const path = require('path')
const app = express();
const routes = require('../routes/index');
const corsOptions = {
  origin: 'https://lexart-app-frontend.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

app.get('/', (_req, res) => res.status(200).json("Your coffee Sir"));
routes(app);

module.exports = app;
