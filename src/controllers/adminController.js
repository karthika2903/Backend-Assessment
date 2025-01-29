const User = require('../models/User');
const Product = require('../models/Product');

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        next(error);
    }
};
exports.createProduct = async (req, res, next) => {
    try {
        const { name, description, category, price, images, startDate, expiryDate, freeDelivery } = req.body;
        const product = await Product.create({
            name,
            description,
            category,
            price,
            images,
            startDate,
            expiryDate,
            freeDelivery,
            createdBy: req.user.id,
        });
        res.status(201).json({ success: true, data: product });
    } catch (error) {
        next(error);
    }
};