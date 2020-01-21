const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LocationSchema = new Schema({
    lId: {type: Number, required: false},
    location: {type: String, required: false},
});


// Export the model
module.exports = mongoose.model('location', LocationSchema);