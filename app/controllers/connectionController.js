let nmap = require('libnmap');
let options = {
    range:[
        '192.168.43.0-255'
    ]
}

exports.scanConnection = (req, res) => {
    let obj = {}
    let key = 'host'
    
    try{
        nmap.scan(options, function(err, report) {
            if (err) throw new Error(err);
            for (var key in report) {
                if (report.hasOwnProperty(key)) {
                    obj = report[key]
                }
            }
            let result = obj.host;
            res.json(result);
        });
    }catch(e){
        console.log(e)
    }
}
