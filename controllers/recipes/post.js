const model = require('../../model/recipes');
// const validations = require('../../service/products/validations');

// const runValidations = (name, quantity, objectArray) => {
//   if (!validations.nameLengthValidation(name)) {
//     return '"name" length must be at least 5 characters long';
//   }
//   if (validations.nameValidation(name, objectArray)) {
//     return 'Product already exists';
//   }
//   if (!validations.quantityValueValidation(quantity)) {
//     return '"quantity" must be larger than or equal to 1';
//   }
//   if (!validations.quantityTypeValidation(quantity)) {
//     return '"quantity" must be a number';
//   }
//   return null;
// };

module.exports = async (req, res, next) => {
  const payload = req.body;
  // const { name, quantity } = payload;
  // const objectArray = await model.find();
  // const validationReturn = runValidations(name, quantity, objectArray);
  try {
    // if (validationReturn) {
    //   return res.status(422).send({ err: {
    //     code: 'invalid_data',
    //     message: validationReturn,
    //   },
    //   });
    // }
    const object = await model.create(payload);
    return res.status(201).send(object.ops[0]);
  } catch (err) {
    next(err);
  }
};