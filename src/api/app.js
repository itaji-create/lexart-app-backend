const express = require('express');
const cors = require('cors');
const path = require('path')
const { User } = require('../database/models')
const app = express();
// const routes = require('../routes/index')

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

app.get('/', (_req, res) => res.status(200).json("Your coffee Sir"));
// routes(app);
app.get('/users', async (_req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

module.exports = app;
