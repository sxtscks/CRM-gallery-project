const router = require('express').Router();
const Client = require('../models/clients');
const authenticated = require('./middleware');

router.get('/', (req, res) => {
  res.render('add');
});

router.post('/', authenticated,  async (req, res) => {
  const newClient = new Client({
    companyName: req.body.clientName,
    phone: req.body.clientPhone,
    contactPerson: req.body.contactPerson,
    personalPhone: req.body.personalPhone,
    email: req.body.companyEmail,
    notes: req.body.notes
  })
  await newClient.save()

  return res.redirect('/clients')
})

module.exports = router;
