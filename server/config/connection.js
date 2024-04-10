
const mongoose = require('mongoose');
const { env } = require('../../client/.eslintrc.cjs');

const dbName = process.env.DB_NAME;
console.log(dbName);

mongoose.connect(process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/${dbName}`);

module.exports = mongoose.connection;
