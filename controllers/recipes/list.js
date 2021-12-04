const model = require('../../model/recipes');

module.exports = async (req, res, next) => {
  try {
    const response = await model.find();
    return res.status(200).send(response);
  } catch (err) {
    next(err);
  }
};