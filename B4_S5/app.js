const express = require('express');

const app = express();

// tạo middleware thông qua use()
app.use((req, res, next) => {
  console.log('In the middleware!');
  next(); // Cho phép request tới middleware dòng code tiếp theo
});

app.use((req, res, next) => {
  console.log('In the another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
