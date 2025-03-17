const express = require('express');
const { getProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const validateProduct = require('../middleware/validation');

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', validateProduct, addProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
