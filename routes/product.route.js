const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Require the controllers
const product_controller = require('../controllers/product.controller');

app.get('/getCar', product_controller.car_details);
app.post('/postCar', product_controller.car_create);
module.exports = app;