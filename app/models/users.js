let mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
let Schema = mongoose.Schema;

/**
 * User model schema.
 */
let userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    admin: Boolean
});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

let User = mongoose.model('User', userSchema);


module.exports = User;