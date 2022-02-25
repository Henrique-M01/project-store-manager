function validateName(req, res, next) {
  const { name } = req.body;
  if (name.length < 5) {
    return res.status(409).json({ message: 'Product already exists' });
  }
  
  next();
}

module.exports = validateName;
