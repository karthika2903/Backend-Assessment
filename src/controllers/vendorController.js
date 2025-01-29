
const Product = require('../models/Product');


exports.getVendorProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ vendor: req.user.id });
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    next(error);
  }
};


exports.updateProduct = async (req, res, next) => {
  try {
      const productId = req.params.id;
      const vendorId = req.user.id; 
      const updateData = req.body;

      console.log("Vendor ID:", vendorId);
      console.log("Product ID:", productId);

      const product = await Product.findOne({ _id: productId });

      if (!product) {
          return res.status(404).json({ success: false, message: "Product not found" });
      }

      if (product.vendor.toString() !== vendorId) {
          return res.status(403).json({ success: false, message: "Unauthorized: You cannot update this product" });
      }

      const updatedProduct = await Product.findByIdAndUpdate(productId, updateData, { new: true });

      res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
      next(error);
  }
};

