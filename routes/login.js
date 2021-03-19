const router = require('express').Router();
const Manager = require('../models/manager')
const bcrypt = require('bcrypt')

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', async (req, res) => {
  const { email, password } = req.body
  if (email && password) {
    // try{

    // }
    const currentUser = await Manager.findOne({ email })
    if (await bcrypt.compare(password, currentUser.password)) {
      req.session.userId = currentUser._id
      req.session.email = currentUser.email
      req.session.name = currentUser.name

      return res.redirect('/')
    }
    return res.status(418).redirect('/entries/login')
  }
})

module.exports = router;
