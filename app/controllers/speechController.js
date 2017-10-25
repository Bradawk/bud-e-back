let gpio = require('rpi-gpio');
let gpioUtils = require('../utils/gpio');
let state = 'off';
let pin = 12;
let conn = require('./connectionController');
let Thing = require('../models/things.js');


exports.handleSpeechRequest = (req, res) => {
    switch (req.body.action) {
        case 'list':
            conn.scanConnection(req, res);
            break;
        case 'light_on':
            Thing.findOneAndUpdate({
                '_id': req.body.id
            }, {
                $set: {
                    "state": 1
                }
            }, function (err) {
                if (err) res.status(400).json({
                    "message": "No thing with the given ID.",
                    "error": err
                });
                res.json({
                    "message": "Light " + pin + " is now on.",
                    "status": 200
                });
            });
            // gpio.read(pin, function (err, value) {
            //     if (err) {
            //         console.log('Check the raspberry connection.');
            //         res.status(500).send('Can\'t read pin value.');
            //     } else {
            //         state = 'on';
            //         gpioUtils.rpiOn(pin);
            //         res.status(200).json({
            //             "message": pin + "in " + req.body.room + " is on.",
            //             "status": 1
            //         });
            //     }
            // });
            break;
        case 'light_off':
            Thing.findOneAndUpdate({
                '_id': req.body.id
            }, {
                $set: {
                    "state": 0
                }
            }, function (err) {
                if (err) res.status(400).json({
                    "message": "No thing with the given ID.",
                    "error": err
                });
                res.json({
                    "message": "Light " + pin + " is now off.",
                    "status": 200
                });
            });
            // gpio.read(pin, function (err, value) {
            //     if (err) {
            //         console.log('Check the raspberry connection.');
            //         res.status(500).send('Can\'t read pin value.');
            //     } else {
            //         state = 'on';
            //         gpioUtils.rpiOff(pin);
            //         res.status(200).json({
            //             "message": pin + "in " + req.body.room + " is off.",
            //             "status": 1
            //         });
            //     }
            // });
            break;
        default:
            break;
    }
}