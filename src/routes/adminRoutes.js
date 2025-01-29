const express = require('express');
const { getAllUsers, createProduct } = require('../controllers/adminController');
const router = express.Router();

router.get('/users', getAllUsers);

router.post('/products', createProduct);

module.exports = router;
