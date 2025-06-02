const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('book', { title: 'Book a Consultation' });
});

module.exports = router;

