var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/teste', (req, res, next) => {
  const data = { title: 'Teste', course: 'WebDev' }
  res.render('index', data);
});

module.exports = router;
