var express = require('express');
var router = express.Router();
const db = require('../models');

router.get('/', function(req, res, next) {
    db.langue.findAll().then(function(rows) {
      res.json(rows);
  });
  });

module.exports = router;