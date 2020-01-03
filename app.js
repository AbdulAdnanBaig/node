//app.js
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
var app = express();
const product_details = require('./controllers/product.controller');

app.use('/products', product);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://adnan:letmeinat7@ds259348.mlab.com:59348/tsi_cms'
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{ useUnifiedTopology: true, useNewUrlParser:true },);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

// app.post('/test', product_details.car_create);

module.exports = app;





