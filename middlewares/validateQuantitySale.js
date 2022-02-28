function quantityExistSale(req, res, next) {
  try {
    const [{ quantity }] = req.body;
    if (quantity === undefined) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
  
    next();
  } catch (e) {
    next(e);
  }
}

function quantityValueSale(req, res, next) {
  try {
    const [{ quantity }] = req.body;
    if (quantity <= 0) {
      return res.status(422).json({
        message: '"quantity" must be greater than or equal to 1' });
    }

    next();
  } catch (e) {
    next(e);
  }
}

module.exports = {
  quantityExistSale,
  quantityValueSale,
};