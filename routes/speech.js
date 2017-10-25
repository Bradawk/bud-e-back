let express = require('express');
let router = express.Router();
let speechController = require('../app/controllers/speechController');

router.route('/request')
  .post(speechController.handleSpeechRequest)

module.exports = router;