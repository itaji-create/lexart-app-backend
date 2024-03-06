const express = require('express');
const cors = require('cors');

const app = express();
const routes = require('../routes/index')

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => res.status(200).json("Your coffee Sir"));
// routes(app);

module.exports = app;
