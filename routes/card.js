const Client = require('../models/clients');
const router = require('express').Router();
const authenticated = require('./middleware');


router.get('/:id', authenticated, async (req, res) => {
  const client = await Client.findById(req.params.id);
  console.log(client);
  
  res.render('card', { client });
});

router.delete('/:id', authenticated, async (req, res, next) => {
  await Client.findByIdAndDelete(req.params.id)
  return res.sendStatus(200);
})

router.get('/:id/edit', authenticated, async(req, res) => { 
  const client = await Client.findById(req.params.id);
  res.render('edit', { client });
});

router.patch('/:id/edit', authenticated, async(req, res) => {
  const { companyName, phone, contactPerson, personalPhone, email, notes, _id } = req.body;

    try {
      await Client.findByIdAndUpdate(_id, { companyName, phone, contactPerson, personalPhone, email, notes });
      return res.sendStatus(200);
    } catch {
      return res.sendStatus(500);
    }
})

module.exports = router;
