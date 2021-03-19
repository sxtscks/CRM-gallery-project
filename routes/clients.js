const Client = require('../models/clients');
const router = require('express').Router();
const authenticated = require('./middleware');


router.get('/', authenticated, async (req, res) => {
  const Clients = await Client.find();
  res.render('clients', { Clients });
});

module.exports = router;
