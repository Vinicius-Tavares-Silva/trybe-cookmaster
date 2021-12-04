const connection = require('../connection');
const collection = require('./collection');

module.exports = async (payload) => {
  const role = 'user';
  const object = { role, ...payload };
  return (await connection()).collection(collection).insertOne(object);
};