function nameLength(req, res, next) {
  try {
    const { name } = req.body;
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  
  next();
  } catch (e) {
    next(e);
  }
}

function nameExist(req, res, next) {
  try {
    const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  next();
  } catch (e) {
    next(e);
  }
}

module.exports = {
  nameLength,
  nameExist,
};
