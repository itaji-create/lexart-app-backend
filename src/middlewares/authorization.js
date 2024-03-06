const jwt = require('jsonwebtoken');

const tokenAuthenticador = (req, res, next) => {
  const secret = 'secret_key';
  const { authorization } = req.headers;
    try {
      if (!authorization) return res.status(401).json({ message: 'Token do not exist' });
      jwt.verify(authorization, secret);
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
    next();
};

module.exports = tokenAuthenticador;