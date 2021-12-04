const authService = require('../service/auth');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).send({ message: 'missing auth token' });
    }

    const user = authService.verifyToken(authorization);
    if (!user) {
      return res.status(401).send({ message: 'jwt malformed' });
    }
    req.user = user;

    next();
  } catch (err) {
    next(err);
  }
};