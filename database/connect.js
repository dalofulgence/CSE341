// const mongoose = require('mongoose');

// const URI = "mongodb+srv://dalofulgence84:Gatouso84@cluster0.mzhuc.mongodb.net/firstDatabase?retryWrites=true&w=majority";

// const connectDB = ()=>{
//      mongoose.connect(URI);
//     console.log('DB connect ...!')
// }
//  module.exports = connectDB;

const dotenv = require('dotenv');
dotenv.config();
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mzhuc.mongodb.net/firstDatabase?retryWrites=true&w=majority`;
