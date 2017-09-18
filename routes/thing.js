let express = require('express');
let router = express.Router();
let thingController = require('../app/controllers/thingController');

router.route('/')
  .get(thingController.findAll);

module.exports = router;
