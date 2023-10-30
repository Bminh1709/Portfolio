var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/skill', function(req, res, next) {
  res.render('skill', { title: 'Skill' });
});

router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Project' });
});

module.exports = router;
