const Client = require('../models/clients');

const router = require('express').Router();

router.get('/:id', async (req, res) => {
  const client = await Client.findById(req.params.id);
  res.render('card', { client });
});

router.delete('/:id', async (req, res, next) => {
  await Client.findByIdAndDelete(req.params.id)
  return res.sendStatus(200);
})

module.exports = router;
