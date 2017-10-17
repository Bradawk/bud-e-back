let Func = require('../models/func.js')

exports.findAll = (req, res) => {
    Func.find({},(err, funcs) => {
        if(err) res.status(400).json({'message':'Something went wrong.', 'error': err});
        res.json(funcs);
    })
}

