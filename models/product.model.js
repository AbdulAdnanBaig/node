const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let CarSchema = new Schema({
    name : {type: String, required: false},
    mobile: {type: String, required: false},
    mail: {type: String, required: false},
    dob: {type: String, required: false},
    curr_tech: {type: String, required: false},
    title: {type: String, required: false},
    ctc: {type: String, required: false},
    ectc: {type: String, required: false},
    notice: {type: String, required: false},
    remarks: {type: String, required: false},
    id: {type: Number, required: false},
});


// Export the model
module.exports = mongoose.model('Car', CarSchema);