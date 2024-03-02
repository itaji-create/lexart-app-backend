const express = require('express');

const router = express.Router();

const { signIn, signUp, getUsers, deleteUser, getToken } = require('../controllers/user.controller');
router
  .get('/getUsers', getUsers)
  .post('/signIn', signIn)
  .post('/token', getToken)
  .post('/signUp', signUp)
  .delete('/delete/:id', deleteUser);

module.exports = router;
