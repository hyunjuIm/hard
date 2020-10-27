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

//기업관리
router.get('/company-list', function(req, res, next) {
  res.render('company-list');
});

//병원관리
router.get('/hospital-list', function(req, res, next) {
  res.render('hospital-list');
});

//패키지관리
router.get('/package-list', function(req, res, next) {
  res.render('package-list');
});

//패키지생성
router.get('/package-create', function(req, res, next) {
  res.render('package-create');
});

//패키지검사항목
router.get('/package-injection-item', function(req, res, next) {
  res.render('package-injection-item');
});

module.exports = router;

