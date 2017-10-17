let express = require('express');
let router = express.Router();
let funcController = require('../app/controllers/funcController');

router.route('/')
  .get(funcController.findAll)

module.exports = router;
