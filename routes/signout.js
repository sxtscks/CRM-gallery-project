const router = require('express').Router();

router.get('/', async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect('/')
    }

    res.clearCookie(req.app.get('cookieName'))
    return res.redirect('/')
  })
})

module.exports = router;
