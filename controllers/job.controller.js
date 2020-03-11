const Job = require('../models/job-opening.model');
const Acc = require('../models/account.model');
const Des = require('../models/designation.model');
const async = require('async')

var test = []

// Job section API's
exports.job_get = function (req, res) {
async.waterfall([
    function(clbk){
        Job.find(function (err, resp) {
            console.log("first====>",resp)
            clbk(null,resp)
        })
    },function(jobs,Secclbk){
        console.log("second==Jobs==>",jobs.length)
        var data =[]
        jobs.forEach(function(element,index){
            console.log(element.accountId,index)
            // to find the account object
            Acc.find({ 'uId' : element.accountId },function(err,result){
                console.log("second====>",result)
                data.push(JSON.parse(JSON.stringify(element)))
                data[data.length-1]["account"]=result[0]
                if(index==jobs.length-1){
                    Secclbk(null,data)
                }
            })
            // to find the designation object
            Des.find({ 'dId' : element.designationId },function(err,result){
                console.log("second====>",result)
                data.push(JSON.parse(JSON.stringify(element)))
                data[data.length-1]["designation"]=result[0]
                if(index==jobs.length-1){
                    Secclbk(null,data)
                }
            })
        })
       
    }
],function(err,data){
    console.log("data====>",data);
    res.send(data)
})
// var data = Job.aggregate([{
//     $lookup:{
//         localField:"uId",
//         from:"accounts",
//         foreignField:"account_id",
//         as:"account"
//     }
// }])
// console.dir(data)
    // Job.find(function (err, resp) {
    //     if (err) return next(err); 
    //     res.send(resp);     
    //     for (let index = 0; index < resp.length; index++) {
    //         const element = resp[index];
    //         // find query to populate the account details
    //         Acc.find({ 'uId' : element.account },
    //         function(req, res){
    //             element.account = res;
    //             test.push(element);
    //         });
    //     }
    // });
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