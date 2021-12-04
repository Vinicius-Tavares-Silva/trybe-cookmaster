const model = require('../../model/users');
const { userValidations, emailValidation } = require('../../service/users');

module.exports = async (req, res, next) => {
  const payload = req.body;
  const validation = userValidations(payload);
  const emailFound = await emailValidation(payload);
  try {
    if (validation) {
      const { message } = validation;
      return res.status(400).send({ message });
    }
    if (emailFound) {
      const { message } = emailFound;
      return res.status(409).send({ message });
    }
    const { ops: [{ password, ...object }] } = await model.create(payload);
    return res.status(201).send({ user: object });
  } catch (err) {
    next(err);
  }
};