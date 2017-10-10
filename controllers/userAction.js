var express = require('express');
var router = express.Router();
var mongoose = require('../config/dbconnection');
var User = require('../models/user');

module.exports = {
  add: add
}

function add(req, res, next) {
  console.log('control');
  console.log(req.body);
  user = new User({
    first_name: req.body.firstName,
    last_name: req.body.lastName
  });

  user.save().then((doc) => {
    console.log(doc);
    return res.status(200)
      .json(doc);
  },
  (error) => {
    console.log(error);
    return next(error);
  }
)
}
