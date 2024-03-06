const { User } = require('../database/models');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const token = (email, password) => {
  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '1h',
  };

  const secret = fs.readFileSync('jwt.evaluation.key').toString() || 'secret_key';
  
  return jwt.sign({ email, password }, secret, jwtConfig);
};

const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

const signIn = async ({ email, password }) => {
    const user = await User.findOne({
      where: { email, password: md5(password) },
      attributes: { exclude: ['password'] },
    });
  
    if (!user) throw new Error('Verifique dados de login e tente novamente!');
    user.token = token(email, password)
    return user;
};

const signUp = async ({ name, email, password }) => {
    const userEmail = await User.findOne({ where: { email } });
    if (userEmail) throw new Error('Já existe uma conta com esse email!');
  
    const userName = await User.findOne({ where: { name } });
    if (userName) throw new Error('Já existe uma conta com esse nome!');
  
    const newUser = await User.create({ name, email, password: md5(password) });
    return newUser; 
};

const deleteUser = async (id) => {
  const destroyed = await User.destroy({
    where: { id }
  });
  return destroyed;
}

module.exports = {
  signIn,
  signUp,
  deleteUser,
  getUsers,
  token
}
