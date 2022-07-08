var express = require('express');
var router = express.Router();

router.get('/data', (req, res) => {
  res.send('create bird data');
});

router.get('/', getBirds);

router.get('/:id', getBird);

router.put('/', (req, res) => {
  res.send('update bird');
});

router.post('/', function (req, res) {
  res.send('add bird');
});

function getBirds(req, res) {
  res.send('get birds');
}

function getBird(req, res) {
  res.send(`get bird #${JSON.stringify(req.params)}`);
}

module.exports = router;
