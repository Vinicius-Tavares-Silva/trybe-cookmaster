const model = require('../model/users');
const authService = require('./auth');

module.exports = async (email, password) => {
  if (!email || !password) {
    return ({ message: 'All fields must be filled' });
  }
  const user = await model.findByEmail(email);
  if (!user || user.password !== password) {
    return ({ message: 'Incorrect username or password' });
  }
  const { password: _password, ...userWithoutPassword } = user;
  const token = authService.genToken(userWithoutPassword);
  return ({ status: 200, message: token });
};