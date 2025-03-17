const validateProduct = (req, res, next) => {
    const { name, stock } = req.body;
    if (!name || typeof name !== 'string' || stock === undefined || typeof stock !== 'number') {
        return res.status(400).json({ message: 'Invalid product data' });
    }
    next();
};

module.exports = validateProduct;
