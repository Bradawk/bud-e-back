let express = require('express');
let router = express.Router();
let connectionController = require('../app/controllers/connectionController');

router.route('/scan')
  .get(connectionController.scanConnection)

module.exports = router;