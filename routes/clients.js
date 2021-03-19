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

router.post('/', authenticated, async (req, res) => {
  const { isSortCreate } = req.body;
  console.log(isSortCreate);

  try {
    let Clients;
    if (isSortCreate) {
      console.log(isSortCreate);
      Clients = await Client.find().sort({ createdAt: -1 }).exec();
    } else {
      Clients = await Client.find();
    }
    return res.render('clients', { Clients });
    
  } catch (error) {
    return res.render('error', { 
      message: 'Не удалось загрузить список клиентов.',
    })
  }
})

module.exports = router;
