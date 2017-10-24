var userSchema = require('../models/userModel');
var bcrypt = require('bcrypt');

module.exports = (router) => {
    router.get('/users', (req, res, next) => {
        userSchema.find().then((users, err) => {
            console.log(req);
            res.send(users);
        });
    });

    router.post('/user', function(req, res, next){
        userSchema.create(req.body).then((user, err) => {
            if(err){
                console.log(err);
            }
            else{
                res.send(user); 
            }
        });    
    });
};