var userSchema = require('../models/userModel');
var bcrypt = require('bcrypt');
var authResponse = require('../models/authResponseModel');
var errorResponse = require('../models/errorResponseModel');
var CryptoJS = require("crypto-js");
var config = require('../../config/config');

module.exports = (router) => {

    router.get('/users', (req, res, next) => {
        userSchema.find().then((users, err) => {
            res.send(users);
        });
    });

    router.get('/user/:username', (req, res, next) => {
        userSchema.find({ username: req.params.username })
                  .then((user, err) => {
            res.send(user);
        });
    });

    router.post('/user', function (req, res, next) {
        userSchema.create(req.body).then((user, err) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(user);
            }
        });
    });

    router.post('/authUser', function (req, res, next) {
        reqUsername = req.body.username;
        reqPassword = CryptoJS.AES.decrypt(req.body.password, 
                                           config.crypto.secret_key)
                                  .toString(CryptoJS.enc.Utf8)
        console.log(reqPassword);
        if (reqUsername === '' || reqPassword === '') {
            errorResponse.errorCode = '400';
            errorResponse.description = 'Username or password cannot be empty';
            res.status(400);
            res.send(errorResponse);
        }
        else {
            userSchema.findOne({ username: reqUsername }).then((user) => {
                authResponse.username = req.body.username;
                if (user == null) {
                    authResponse.authenticated = false;
                }
                else {
                    authResponse.authenticated = user.comparePassword(reqPassword);                    
                }
                res.send(authResponse);
            });
        }
    });
};