const checkRole = (req, res, next) => {
  const userId = req.session?.userId

  if (userId) {
    return next()
  }
  return res.redirect('/login')
}

module.exports = {
  checkRole,
}