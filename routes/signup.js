const router = require('express').Router();
const Client = require('../models/clients')

router.get('/', (req, res) => {
  res.render('signup');
});

router.post('/', async (req, res) => {
  const { name, email, password: plainedPass } = req.body
  if (name && email && plainedPass) {
    const password = await bcrypt.hash(plainedPass, saltRound)
    const newUser = await Client.create({
      name, email, password
    })
    req.session.userId = newUser._id
    req.session.email = newUser.email
    req.session.name = newUser.name

    return res.redirect('/entries')
  }
  return res.status(418).redirect('/register')
})

module.exports = router;

