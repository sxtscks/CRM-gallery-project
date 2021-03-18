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

router.get('/:id/edit', async(req, res) => { 
  const client = await Client.findById(req.params.id);
  res.render('edit', { client });
});

router.patch('/:id/edit', async(req, res) => {
  const { companyName, phone, contactPerson, personalPhone, email, notes, _id } = req.body;
  console.log('=========', req.body);

  // console.log(res.locals.userId);

  // if (String(res.locals.userId) === String(authorId)) {
    try {
      await Client.findByIdAndUpdate(_id, { companyName, phone, contactPerson, personalPhone, email, notes });
      return res.sendStatus(200);
    } catch {
      return res.sendStatus(500);
    }
  // }
})

module.exports = router;
