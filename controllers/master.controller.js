const Acc = require('../models/account.model');
const Des = require('../models/designation.model');

// Account section API's
exports.acc_get = function (req, res) {
    Acc.find(function (err, resp) {
        if (err) return next(err);
        res.send(resp);
    });
};

exports.acc_create = function (req, res, next) {
    console.log('inside the new function', req.body)
    let acc = new Acc(req.body);
    acc.save(function (err) {
        res.status(200)
            .json({
                status: true,
                successMessage: "success"
            });
    });
};

// Designation section API's
exports.des_get = function (req, res) {
    Des.find(function (err, resp) {
        if (err) return next(err);
        res.send(resp);
    });
};

exports.des_create = function (req, res, next) {
    console.log('inside the new function', req.body)
    let des = new Des(req.body);
    des.save(function (err) {
        res.status(200)
            .json({
                status: true,
                successMessage: "success"
            });
    });
};