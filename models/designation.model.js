const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DesignationSchema = new Schema({
    dId: {type: Number, required: false},
    designation: {type: String, required: false},
});


// Export the model
module.exports = mongoose.model('Designation', DesignationSchema);