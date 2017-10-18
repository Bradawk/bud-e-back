let gpio = require('rpi-gpio');

gpio.setup(12, gpio.DIR_OUT, off);

function on() { 
    gpio.write(12, true, function(err) { 
        if (err) throw err; console.log('Written to pin'); 
    }); 
}

function off() { 
    gpio.write(12, false, function(err) { 
        if (err) throw err; console.log('Written to pin'); 
    }); 
}

let state = 'off';

exports.handleSpeechRequest = (req, res) =>{ 
    if(req.body.action == "light_on"){
        state = 'on';
        on();
    }else{
        state = 'off';
        off();
    }
}