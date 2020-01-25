const Job = require('../models/job-opening.model');
const Acc = require('../models/account.model');
var test

// Job section API's
exports.job_get = function (req, res) {
    Job.find(function (err, resp) {
        // if (err) return next(err);      
        for (let index = 0; index < resp.length; index++) {
            const element = resp[index];
            // find query to populate the account details
            Acc.find({ 'uId' : element.account },
            function(req, res){
                element.account = res;
                console.log(element);
            });
        }

    });
};

exports.job_create = function (req, res, next) {
    console.log('inside the new function', req.body)
    let job = new Job(req.body);
    job.save(function (err) {
        res.status(200)
            .json({
                status: true,
                successMessage: "success"
            });
    });
};