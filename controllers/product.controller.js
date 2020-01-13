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
    let dummy = req.body.mobile;
    let obj = req.body;
    console.log('requesting for a POST');
    let car = new Car(req.body);
    car.save(function (err) {
        res.status(200)
            .json({
                status: true,
                successMessage: "success"
            });
    });
};

exports.car_update = function (req, res, next) {
    let mob = req.body.mobile;
    let obj = req.body;
    Car.updateOne({ mobile: mob }, { $set: obj },
        function (err, resp) {
            if (err) return next(err);
            res.status(200)
            .json({
                status: true,
                successMessage: "success"
            });
        });
};