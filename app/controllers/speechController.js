let gpio        = require('rpi-gpio');
let gpioUtils   = require('../utils/gpio');
let state       = 'off';

let pin         = 12; 

// TODO REPLACE PIN BY OBJECT

exports.handleSpeechRequest = (req, res) =>{
    gpio.read(pin, function(err, value) {
        if(err){
            console.log('Check the raspberry connection.');
            res.status(500).send('Can\'t read pin value.');
        }else{
            if(req.body.action == 'light_on'){
                state = 'on';
                on(pin, req.body.room);
                res.status(200).json({"message": pin + "in "+ req.body.room + " is on.", "status": 1});
            }else if(req.body.action == 'light_off'){
                state = 'off';
                on(pin, req.body.room);
                res.status(200).json({"message": pin + "in "+ req.body.room + " is off.", "status": 0});
            }
        }
    });
}