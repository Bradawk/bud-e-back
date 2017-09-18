var express = require('express');
var router = express.Router();
var indexController = require('../app/controllers/indexController');

router.route('/')
  .get(indexController.index);

module.exports = router;
