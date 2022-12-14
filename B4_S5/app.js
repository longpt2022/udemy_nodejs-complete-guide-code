const http = require('http');

const express = require('express');

const app = express();

// tạo middleware thông qua use()
app.use((req, res, next) => {
  console.log('In the middleware!');
  next(); // Cho phép request tới middleware dòng code tiếp theo
});

app.use((req, res, next) => {
  console.log('In the another middleware!');
});

const server = http.createServer(app);

server.listen(3000);
