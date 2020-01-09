const Car = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.car_details = function (req, res) {
    console.log('inside CAR');
    Car.find(function (err, resp) {
        if (err) return next(err);
        res.send(resp);
    });
};

exports.car_create = function (req, res, next) {
    console.log('from the controller',req.body);
     let car = new Car(req.body);
     console.log('car structure',car);
    car.save(function (err) {
        // if (err) {
        //     return next(err);
        // }
        res.status(200).send('CAR Created successfully')
    })
};