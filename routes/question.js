var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.question.findAll().then(function(rows) {
    res.json(rows);
});
});
router.get('/reponse', function(req, res, next) {
  db.reponse.findAll().then(function(rows) {
    res.json(rows);
});
});

module.exports = router;
