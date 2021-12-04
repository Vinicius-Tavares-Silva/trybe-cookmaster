const { ObjectId } = require('mongodb');
const connection = require('../connection');
const collection = require('./collection');

module.exports = async (id) => (await connection())
  .collection(collection)
  .deleteOne({ _id: ObjectId(id) });