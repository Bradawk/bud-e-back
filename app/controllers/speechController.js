let gpio = require('rpi-gpio');

gpio.setup(17, gpio.DIR_OUT, off);

function on() { 
    gpio.write(17, true, function(err) { 
        if (err) throw err; console.log('Written to pin'); 
    }); 
}

function off() { 
    gpio.write(17, false, function(err) { 
        if (err) throw err; console.log('Written to pin'); 
    }); 
}

let state = 'off';

exports.handleSpeechRequest = (req, res) =>{ 
    state = 'on';
    on();
}