var express = require('express');
var router = express.Router();
var sess = require('/index');
router.get('/', function(req, res, next) {
      res.render('home', {  });
  });

  module.exports = router;
