const express = require('express');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const vendorRoutes = require('./routes/vendorRoutes');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middlewares/errorHandler');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();


app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Backend is running successfully')
});
app.use('/api/auth', authRoutes);
app.use('/api/admin', authMiddleware('admin'), adminRoutes);
app.use('/api/vendor', authMiddleware('vendor'), vendorRoutes);
app.use('/api/products', productRoutes);

app.use(errorHandler);

module.exports = app;