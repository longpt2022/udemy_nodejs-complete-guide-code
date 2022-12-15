const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  // __dirname: dẫn tới "toàn bộ thư mục" trong code
  // views: dẫn đến thư mục "views"
  // shop.html: dẫn đến file "shop.html"
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
