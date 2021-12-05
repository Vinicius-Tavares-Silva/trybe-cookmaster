const model = require('../../model/recipes');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { _id } = req.user;
  const object = await model.findById(id);
  const image = `localhost:3000/src/uploads/${id}.jpeg`;
  try {
    const updatedObject = await model.update({ ...object, image, userId: _id });
    return res.status(200).send(updatedObject);
  } catch (err) {
    next(err);
  }
};