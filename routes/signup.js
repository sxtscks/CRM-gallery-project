const router = require('express').Router();
const Manager = require('../models/manager')
const bcrypt = require('bcrypt')

const saltRound = 10

router.get('/', (req, res) => {
  res.render('signup');
});

router.post('/', async (req, res) => {
  const { name, email, password: plainedPass } = req.body
  if (name && email && plainedPass) {
    const password = await bcrypt.hash(plainedPass, saltRound)
    const newUser = await Manager.create({
      name, email, password
    })
    req.session.userId = newUser._id
    req.session.email = newUser.email
    req.session.name = newUser.name

    return res.redirect('/')
  }
  return res.status(418).redirect('/signup')
})

module.exports = router;

