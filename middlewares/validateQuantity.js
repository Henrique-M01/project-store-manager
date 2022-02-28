function quantityExist(req, res, next) {
  try {
    const { quantity } = req.body;
    if (!quantity) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
  
    next();
  } catch (e) {
    next(e);
  }
}

function quantityValue(req, res, next) {
  try {
    const { quantity } = req.body;
    if (quantity <= 0) {
      return res.status(422).json({
        message: '"quantity" must be greater than or equal to 1' });
    }
  } catch (e) {
    next(e);
  }
}

module.exports = {
  quantityExist,
  quantityValue,
};
