const express = require('express');

const router = express.Router();

const { signIn, signUp, getUsers, deleteUser } = require('../controllers/user.controller');
router
  .get('/getUsers', getUsers)
  .post('/signIn', signIn)
  .post('/signUp', signUp)
  .delete('/delete/:id', deleteUser);

module.exports = router;
