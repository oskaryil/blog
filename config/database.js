/*
 * Database configuration
 */

const mongoose = require('mongoose');
const constants = require('./constants');

mongoose.Promise = global.Promise;

let mongooseConnection;

try {
  mongooseConnection = mongoose.connect(constants.MONGO_URL, { useMongoClient: true });
} catch (err) {
  mongooseConnection = mongoose.createConnection(constants.MONGO_URL, { useMongoClient: true });
}

module.exports = mongooseConnection;
