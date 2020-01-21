const Job = require('../models/job-opening.model');

// Job section API's
exports.job_get = function (req, res) {
    Job.find(function (err, resp) {
        if (err) return next(err);
        res.send(resp);
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