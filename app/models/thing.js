let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/**
 * Thing model schema.
 */
let thingSchema = new Schema({
    ip : String,
    mac : String,
    name : String,
    type : String,
    func : Array
});

let Thing = mongoose.model('Thing', thingSchema);
module.exports = Thing;