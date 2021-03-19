const Client = require('../models/clients');
const router = require('express').Router();
const authenticated = require('./middleware');


router.get('/', authenticated, async (req, res) => {
  try {
    const Clients = await Client.find();
    return res.render('clients', { Clients });
    
  } catch (error) {
    return res.render('error', { 
      message: 'Не удалось загрузить список клиентов.',
    })
  }
});

module.exports = router;
