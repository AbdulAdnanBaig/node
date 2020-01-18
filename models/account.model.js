const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AccountSchema = new Schema({
    uId: {type: Number, required: false},
    name: {type: String, required: false},
    manager: {type: String, required: false},
});


// Export the model
module.exports = mongoose.model('Account', AccountSchema);