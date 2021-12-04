const model = require('../../model/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const object = await model.findById(id);
    if (!object) {
      return res.status(422).send({ err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      },
      });
    }

    return res.status(200).send(object);
  } catch (err) {
    next(err);
  }
};