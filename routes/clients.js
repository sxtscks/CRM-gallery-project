const Client = require('../models/clients');

const router = require('express').Router();

router.get('/', async (req, res) => {
  const Clients = await Client.find();
  res.render('clients', { Clients });
});

router.get('/:id/edit', async(req, res) => { 
  const client = await Client.findById(req.params.id);
  res.render('edit', { client });
});

router.patch('/:id/edit', async(req, res) => {
  
})

module.exports = router;
