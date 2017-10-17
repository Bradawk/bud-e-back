let Thing = require('../models/thing.js')

exports.findAll = (req, res) => {
    Thing.find({},(err, things) => {
        if(err) res.status(400).json({'message':'Something went wrong.', 'error': err});
        res.json(things);
    })
}

exports.findOne = (req, res) => {
    Thing.findOne({'_id': req.params.id},(err, thing) => {
        if(err) res.status(400).json({'message':'Thing with the given ID not found.', 'error': err});
        res.json(thing);
    })
}

exports.create = (req, res) => {
    Thing.create({
        'ip': '0.0.0.0',
        'mac': '0:0:0:0:',
        'name': 'My new Thing',
        'type': 'Connected Device',
        'created_date': Date.now()
    }, (err, thing) => {
        if(err) res.status(400).json({'message':'Something went wrong during the thing creation.', 'error': err});
        res.json({'thing': thing, 'message': 'Thing created with success.'});
    });
}

exports.update = (req, res, next) => {
    Thing.findOneAndUpdate({
        '_id': req.body.id
    },{
        $set:{
            'ip': req.body.ip,
            'mac': req.body.mac,
            'name': req.body.name,
            'type': req.body.type,
            'update_date': Date.now()
        }
    },(err, thing) => {
        if(err) res.status(400).json({"message":"No thing with the given ID.","error": err});
        res.json({"message":"Thing saved with success.", 'thing': thing});
    });
}

exports.delete = (req, res) => {
    Thing.findByIdAndRemove(req.body.id, (err, thing) => {
        if(err) res.status(400).json({'message':'Something went wrong during the thing deletion.', 'error': err});
        res.json({'message':'Thing successfully deleted.'});
    })
}

