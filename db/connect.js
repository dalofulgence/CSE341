// const mongoose = require('mongoose');

// const URI = "mongodb+srv://dalofulgence84:Gatouso84@cluster0.mzhuc.mongodb.net/firstDatabase?retryWrites=true&w=majority";

// const connectDB = ()=>{
//      mongoose.connect(URI);
//     console.log('DB connect ...!')
// }
//  module.exports = connectDB;

// const dotenv = require('dotenv');
// dotenv.config();
//const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mzhuc.mongodb.net/firstDatabase?retryWrites=true&w=majority`;

const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};