const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, deleteAllProducts, getProductByName } = require('../controllers/productController'); // Adjust path as necessary

// Get all Products
router.get('/', getAllProducts);


// Get Product by ID
router.get('/:id', getProductById);

// Add new Product
router.post('/', createProduct);

// Update Product by ID
router.put('/:id', updateProduct);

// Remove Product by ID
router.delete('/:id', deleteProduct);

//Remove All Products
router.delete('/', deleteAllProducts);


//Find All Products which name contains 'kw'
router.get('/:name', getProductByName);




module.exports = router;