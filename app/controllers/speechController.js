let wpi = require('wiring-pi');
let configPin = 7;


exports.handleSpeechRequest = (req, res) =>{
    wpi.setup('wpi');
    wpi.pinMode(configPin, wpi.OUTPUT);

    let isOn    = 0;
    let action  = req.body.action;

    if(action == 'light_on'){
        isOn = 1;
        wpi.digitalWrite(configPin, isLedOn);
        res.send()
    }else{
        res.send()
    }
}