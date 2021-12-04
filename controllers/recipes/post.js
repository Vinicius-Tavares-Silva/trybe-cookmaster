const model = require('../../model/recipes');
const recipeValidations = require('../../service/recipes');

module.exports = async (req, res, next) => {
  const payload = req.body;
  const validation = recipeValidations(payload);
  const { _id } = req.user;
  try {
    if (validation) {
      const { message } = validation;
      return res.status(400).send({ message });
    }
    const { ops: [object] } = await model.create(payload);
    return res.status(201).send({ recipe: { ...object, userId: _id } });
  } catch (err) {
    next(err);
  }
};