const express = require('express');
const { getVendorProducts, updateProduct } = require('../controllers/vendorController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/products', authMiddleware('vendor'), getVendorProducts);
router.put('/products/:id', authMiddleware('vendor'), updateProduct);

module.exports = router;
