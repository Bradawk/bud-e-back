let gpio = require('rpi-gpio');

exports.rpiOn = (pin, location) => {
    gpio.write(pin, true, (err) => {
        if(err) console.log(err);
        console.log("Pin set to true.");
    })
}

exports.rpiOff = (pin, location) => {
    gpio.write(pin, false, (err) => {
        if(err) console.log(err);
        console.log("Pin set to false");
    })
}