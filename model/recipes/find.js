const connection = require('../connection');
const collection = require('./collection');

module.exports = async () => (await connection())
  .collection(collection)
  .find()
  .toArray();