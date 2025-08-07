const adminMiddleware = (req, res, next) => {
  const user = req.user;
  // Check if user has admin role or flag
  if (!user || !(user.role === 'admin' || user.isAdmin)) {
    return res.status(403).json({ msg: 'Brak uprawnień administratora' });
  }
  next();
};

module.exports = adminMiddleware;
