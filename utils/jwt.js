const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'secret';

exports.signToken = (user) => {
  return jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};

