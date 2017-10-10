var mongoose = require('../config/dbconnection');

var user = mongoose.model('user', {
  first_name: {
    type: String,
    require: true,
    minlenght: 3,
    trim: true
  },
  last_name: {
    type: String,
    require: true,
    minlenght: 3,
    trim: true
  }
});

module.exports = user;
