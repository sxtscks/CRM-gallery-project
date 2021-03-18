const checkRole = (req, res, next) => {
  const userId = req.session?.user?.id

  if (userId) {
    return next()
  }
  return res.redirect('/login')
}

module.exports = {
  checkRole,
}