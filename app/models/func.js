let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/**
 * Functionalities model schema.
 */
let funcSchema = new Schema({
    name : String,
    actors : Array,
    location : String
});

let Func = mongoose.model('Func', funcSchema);
module.exports = Func;