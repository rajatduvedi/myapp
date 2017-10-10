var express	= require('express');
var router 	= express.Router();

var userAction = require('../controllers/userAction');


router.post('/addUser', userAction.add);

module.exports = router;
