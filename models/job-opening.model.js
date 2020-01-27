const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let JobSchema = new Schema({
    jId: { type: Number, required: false },
    account: { },
    designation: { type: Number, required: false },
    status: { type: String, required: false },
    jobDes: { type: String, required: false },
    panel: [String],
    open: {type: Number, required: false},
    title: {type: String, required: false}
});


// Export the model
module.exports = mongoose.model('job', JobSchema);