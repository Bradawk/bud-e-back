let Gpio = require('onoff').Gpio;
let led = new Gpio(4, 'out');


exports.handleSpeechRequest = (req, res) =>{ 
    let action  = req.body.action;
    
    if(action == 'light_on'){
        led.writeSync(1);
        res.send()
    }else{
        led.writeSync(0);
        led.unexport();
        res.send()
    }
}