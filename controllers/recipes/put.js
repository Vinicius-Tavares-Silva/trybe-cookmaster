const model = require('../../model/recipes');
// const validations = require('../../service/products/validations');

// const runValidations = (name, quantity, object) => {
//   if (!validations.nameLengthValidation(name)) {
//     return '"name" length must be at least 5 characters long';
//   }
//   if (!validations.quantityValueValidation(quantity)) {
//     return '"quantity" must be larger than or equal to 1';
//   }
//   if (!validations.quantityTypeValidation(quantity)) {
//     return '"quantity" must be a number';
//   }
//   if (!object) {
//     return 'Wrong id format';
//   }
//   return null;
// };

module.exports = async (req, res, next) => {
  const { id } = req.params;
  // const payload = req.body;
  // const { name, quantity } = payload;
  const object = await model.findById(id);
  // const validationReturn = runValidations(name, quantity, object);
  try {
    // if (validationReturn) {
    //   return res.status(422).send({ err: {
    //     code: 'invalid_data',
    //     message: validationReturn,
    //   },
    //   });
    // }
    const updatedObject = await model.update({ ...object, ...req.body });
    return res.status(200).send(updatedObject);
  } catch (err) {
    next(err);
  }
};