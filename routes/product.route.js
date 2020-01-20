const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Require the controllers
const product_controller = require('../controllers/product.controller');
const master_controller = require('../controllers/master.controller');

app.get('/getCar', product_controller.car_details);
app.post('/postCar', product_controller.car_create);
app.post('/updateCar', product_controller.car_update);

// Master routes
app.post('/postAcc', master_controller.acc_create);
app.get('/getAcc', master_controller.acc_get);

app.post('/postDes', master_controller.des_create);
app.get('/getDes', master_controller.des_get);
module.exports = app;