const express = require('express');
//const connectDB = require('./database/connect.js')
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./database/connect');
const contactRoutes = require('./routes/contact');
const app = express();
//connectDB();
const port = process.env.PORT || 3000

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/contact', contactRoutes);


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})




// mongodb.initDb((err, mongodb) => {
//   if (err) {
//     console.log(err);
//   } else {
//     app.listen(port);
//     console.log(`Connected to DB and listening on ${port}`);
//   }
// });