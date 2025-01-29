require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

connectDB();

const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});