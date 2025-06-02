const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('products', { title: 'Digital Legal Products' });
});

module.exports = router;

