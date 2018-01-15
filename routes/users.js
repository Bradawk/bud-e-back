let express = require('express');
let router = express.Router();
let authController = require('../app/controllers/authController');

router.route('/signup')
  .post(authController.signup)

router.route('/login')
  .post(authController.login)

module.exports = router;