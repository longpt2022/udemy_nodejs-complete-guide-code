const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  // __dirname: dẫn tới "toàn bộ thư mục" trong code
  // views: dẫn đến thư mục "views"
  // shop.html: dẫn đến file "shop.html"
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;
