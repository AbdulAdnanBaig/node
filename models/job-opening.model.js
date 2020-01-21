const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let JobSchema = new Schema({
    jId: { type: Number, required: false },
    account: { type: Number, required: false },
    designation: { type: Number, required: false },
    status: { type: String, required: false },
    jobDes: { type: String, required: false },
    panel: [String]
});


// Export the model
module.exports = mongoose.model('job', JobSchema);