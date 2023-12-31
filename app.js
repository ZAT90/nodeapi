const express = require('express');
const app = express()
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// load env variables
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(
    process.env.MONGO_URI,
  //  {useNewUrlParser: true}
  )
  .then(() => console.log('DB Connected'))
   
  mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  });

// bring in routes
const postRoutes = require('./routes/post');


// middleware

app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(expressValidator())
app.use('/', postRoutes);

const port = 8080

app.listen(port, () => { console.log(`A node JS API is listening on port: ${port}`); });