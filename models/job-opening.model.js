const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Account = require('./account.model')

let JobSchema = new Schema({
    jId: { type: Number, required: false },
    accountId: String,
    designationId: String,
    status: { type: String, required: false },
    jobDes: { type: String, required: false },
    panel: [String],
    open: {type: Number, required: false},
    title: {type: String, required: false}
});


// Export the model
module.exports = mongoose.model('job', JobSchema);