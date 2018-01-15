let express         = require('express');
let router          = express.Router();
let thingController = require('../app/controllers/thingController');
let app             = require('../app')
let jwt             = require('jsonwebtoken')

router.route('/')
  .get(thingController.findAll)
  .post(thingController.create);

router.route('/:id')
  .get(thingController.findOne)
  .delete(thingController.delete)
  .put(thingController.update);

module.exports = router;
