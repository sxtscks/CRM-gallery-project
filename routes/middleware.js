function authenticated(req, res, next) {
  if (res.locals.userId) {
    return next();
  }
  return res.redirect('/login');
}

module.exports = authenticated;
