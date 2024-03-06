const express = require('express');
const cors = require('cors');
const { getUsers } = require('../controllers/user.controller');

const app = express();
// const routes = require('../routes/index')

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => res.status(200).json("Your coffee Sir"));
app.get('/users', async (_req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// routes(app);

module.exports = app;
