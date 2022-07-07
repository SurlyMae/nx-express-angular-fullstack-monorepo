var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('respond with a resource');
});

router.get('/about', (req, res) => {
  res.send('respond with about resource');
});

module.exports = router;
