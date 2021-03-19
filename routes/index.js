const router = require('express').Router();
const authenticated = require('./middleware');


router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
