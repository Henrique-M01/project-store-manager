function productIdExist(req, res, next) {
  const [{ productId }] = req.body;
  console.log(productId);
  if (!productId) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  next();
}

module.exports = productIdExist;