const Client = require('../models/clients');

const router = require('express').Router();

router.get('/:id', async (req, res) => {
  const client = await Client.findById(req.params.id);
  res.render('card', { client });
});
  

module.exports = router;
