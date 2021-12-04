const { ObjectId } = require('mongodb');
const connection = require('../connection');
const collection = require('./collection');

module.exports = async (id) => {
  if (ObjectId.isValid(id)) {
    return (await connection()).collection(collection).findOne(ObjectId(id));
  }
  return null;
};