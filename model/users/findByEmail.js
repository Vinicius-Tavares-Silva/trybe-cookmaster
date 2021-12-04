const connection = require('../connection');
const collection = require('./collection');

module.exports = async (email) => {
  const result = (await connection()).collection(collection).findOne({ email });
  return result;
};