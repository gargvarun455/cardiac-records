var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var config = require('../../config/config');

//Create schema and model
var UserSchema = new Schema({
    username: {
        type: String, 
        unique: true, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['USER','ADMIN'],
        default: 'USER'
    }
});

UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, config.hashing.salt_factor);
    next();
});

UserSchema.methods.comparePassword = function(candidatePassword){
    return bcrypt.compareSync(candidatePassword, this.password);
}

module.exports = mongoose.model('users', UserSchema);