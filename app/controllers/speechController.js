let gpio = require('rpi-gpio');


exports.handleSpeechRequest = (req, res) =>{ 
    gpio.read(4, function(err, value){
        console.log('The value is '+ value);
    });
}