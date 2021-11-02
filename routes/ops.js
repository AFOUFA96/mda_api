var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('afaf');
});
router.get('/ib', function(req, res, next) {
  res.send('ibra');
});

module.exports = router;
