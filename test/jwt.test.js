const test = require('node:test');
const assert = require('node:assert/strict');
const { signToken, verifyToken } = require('../utils/jwt');

test('sign and verify token', () => {
  process.env.JWT_SECRET = 'testsecret';
  const token = signToken({ id: 'user123' });
  assert.equal(typeof token, 'string');
  const decoded = verifyToken(token);
  assert.equal(decoded.id, 'user123');
});
