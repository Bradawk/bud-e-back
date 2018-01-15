let User    = require('../models/users.js')
let jwt     = require('jsonwebtoken')
let config  = require('../../config')

let secret  = config.secret;

exports.signup = (req, res) => {
    User.findOne({ 'email' :  req.body.email }, function(err, user) {
        if(err){
            res.status(400).json({
                'message': 'Something went wrong.',
                'err': err
            });
        }
        if (user) {
            res.status(400).json({
                'message': 'This email is already used.'
            });
        }

        var newUser             = new User();
        newUser.email           = req.body.email;
        newUser.username        = req.body.username;
        newUser.admin           = false
        newUser.password        = newUser.generateHash(req.body.password);

        newUser.save(function(err) {
            if(err){
                res.status(400).json({
                    'message': 'User creation went wrong.',
                    'err': err
                });
            }
            res.json({
                'message': 'Sign up successfully',
                'user': newUser
            });
        });
    });
}

exports.login = (req, res) => {

    if(!req.body.email || !req.body.password){
        res.json({
            'message': 'Information missing :)',
            'success': false
        });
    }
    User.findOne({ 'email' :  req.body.email }, function(err, user) {
        if(err){
            res.status(400).json({
                'message': 'Something went wrong.',
                'err': err
            });
        }
        if(!user){
            res.status(400).json({
                'message': 'No user has been found.',
                'success': false
            });
        }
        if(!user.validPassword(req.body.password)){
            res.status(400).json({
                'message': 'The password you entered is wrong.',
                'success': false
            }) 
        }

        const payload = {
            admin: user.admin 
        };

        var token = jwt.sign(payload, secret, {
            expiresIn: 86400
        });

        res.json({
            'success': true,
            'token': token,
        })
    });
}