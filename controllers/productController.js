const products = require('../data/products');

const getProducts = (req, res) => res.json(products);

const getProductById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    product ? res.json(product) : res.status(404).json({ message: 'Product not found' });
};

const addProduct = (req, res) => {
    const newProduct = { id: products.length + 1, name: req.body.name, stock: req.body.stock };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const { name, stock } = req.body;
    if (name) product.name = name;
    if (stock !== undefined) product.stock = stock;

    res.json(product);
};

const deleteProduct = (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Product not found' });

    products.splice(index, 1);
    res.json({ message: 'Product deleted' });
};

module.exports = { getProducts, getProductById, addProduct, updateProduct, deleteProduct };
