var express = require('express');
var router = express.Router();

//메인화면
router.get('/', function(req, res, next) {
  res.render('index');
});

//예약관리
router.get('/reservation-list', function(req, res, next) {
  res.render('reservation-list');
});



module.exports = router;
