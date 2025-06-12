const express = require('express');
const path = require('path');
const app = express();
const expressLayouts = require('express-ejs-layouts');

require('dotenv').config();

// Middleware & view engine setup
app.use(expressLayouts); // ✅ Enable EJS layout engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/main'); // ✅ Point to correct layout file

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));
app.use('/book', require('./routes/book'));
app.use('/products', require('./routes/products'));
app.use('/mpesa', require('./routes/mpesa'));


// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
