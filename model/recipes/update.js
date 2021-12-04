const connection = require('../connection');
const collection = require('./collection');

module.exports = async (payload) => {
  const { _id, ...object } = payload;
  await (await connection())
    .collection(collection)
    .updateOne(
    { _id },
    { $set: object },
    );
  return payload;
};