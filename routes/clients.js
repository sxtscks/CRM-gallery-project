const Client = require('../models/clients');

const router = require('express').Router();

router.get('/', async (req, res) => {
  const Clients = await Client.find();
  res.render('clients', { Clients });
});
  
module.exports = router;